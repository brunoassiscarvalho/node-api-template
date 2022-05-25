import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { initializeApp } from "firebase/app";
import { https } from "firebase-functions";
import admin, { ServiceAccount } from "firebase-admin";
import { logger } from "./logger/winston";
import errorMiddleware from "./middleware/error.middleware";
import { Routes } from "./api/api";

import serviceAccount from "../firebase.key.json";
import { Configurations } from "./core/configurations";

dotenv.config();

class App {
  private app: Application;

  private mongoUrl: string =
    process.env.DB_URI || "mongodb://localhost:27017/safe-CV";

  private PORT: string = process.env.PORT || "3005";

  private routes: Routes = new Routes();

  private firebaseConfig = new Configurations();

  private allowlist = process.env.CLIENTS?.split(" ") || [""];

  private corsOptions = {
    origin: this.allowlist,
    optionsSuccessStatus: 200,
  };

  constructor() {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as ServiceAccount),
      databaseURL: "https://arvorah-homologacao-default-rtdb.firebaseio.com",
    });
    initializeApp(this.firebaseConfig.FIREBASE);
    this.app = express();
    this.config();
    // MongoSetup(this.mongoUrl);
    https.onRequest(this.app);
    this.routes.routes(this.app);
    this.configError();

    this.startServer(this.app, this.PORT);
  }

  private config(): void {
    this.app.use(cors(this.corsOptions));
    this.app.use(express.json({ limit: "50mb" }));
    this.app.use(express.urlencoded({ limit: "50mb", extended: true }));
  }

  private configError(): void {
    this.app.use(errorMiddleware);
  }

  private startServer(app: Application, PORT: string): void {
    app.listen(process.env.PORT || "3005", () => {
      logger.info(`Express server listening on port ${PORT}`);
    });
  }
}

export default new App();
