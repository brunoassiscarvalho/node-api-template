import BusinessException from "../../exceptions/BusinessException";
import { Request } from "express";
import { auth } from "firebase-admin";
import { UserRecord } from "firebase-functions/v1/auth";
import EMailController from "../../email/email.controller";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { decodePassAuthorization } from "../../util/Utils";
import User, { IUser } from "./user";

export default class UsesrController {
  private mailController: EMailController;

  constructor() {
    this.mailController = new EMailController();
  }

  public async getUsers(): Promise<string> {
    return "Servidor Funcionado!";
  }

  public async createUser(req: Request): Promise<UserRecord> {
    const { email, password } = decodePassAuthorization(req.headers);

    const { name, phone, cep } = req.body;
    if (!name || !phone || !cep || !email || !password)
      throw new BusinessException("Dados incompletos");

    try {
      const newUser: IUser = await User.create({ email, name, phone, cep });
      const user: UserRecord = await auth().createUser({
        email,
        password,
        emailVerified: false,
      });

      await auth().setCustomUserClaims(user.uid, {
        role: "patient",
        name,
        _id: newUser._id,
      });

      const link: string = await auth().generateEmailVerificationLink(email, {
        url: "https://localhost:3000",
      });

      await this.mailController.sendVerificationEmail({
        userEmail: email,
        userName: name,
        link,
      });

      return user;
    } catch (error) {
      throw new BusinessException("Não foi possível criar o usuário", error);
    }
  }

  public async sendVerificationEmail(req: Request): Promise<string> {
    const { email, password } = req.body;
    try {
      await signInWithEmailAndPassword(getAuth(), email, password);
      const user: IUser = await User.findOne({ email }).lean();
      const link: string = await auth().generateEmailVerificationLink(email, {
        url: "https://localhost:3000",
      });
      await this.mailController.sendVerificationEmail({
        userEmail: email,
        userName: user.name,
        link,
      });
      return "deu certo";
    } catch (error) {
      throw new BusinessException(
        "Não foi possível enviar o email de confirmação",
        error
      );
    }
  }
}
