import { Application } from "express";
import { LoginApi } from "./login/login.api";

import { InfoApi } from "./info/info.api";
import { UserApi } from "./user/user.api";

export class Routes {
  private loginApi: LoginApi;
  private infoApi: InfoApi;
  private userApi: UserApi;

  constructor() {
    this.loginApi = new LoginApi();
    this.infoApi = new InfoApi();
    this.userApi = new UserApi();
  }

  public routes(app: Application): void {
    this.loginApi.routes(app);
    this.infoApi.routes(app);
    this.userApi.routes(app);
  }
}
