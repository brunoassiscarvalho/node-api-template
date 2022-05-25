import { Request } from "express";
import {
  getAuth,
  signInWithEmailAndPassword,
  UserCredential,
} from "firebase/auth";
import UnauthorizedException from "../../exceptions/UnauthorizedException";

export default class LoginController {
  public async login(req: Request): Promise<UserCredential> {
    const { email, password } = this.decodePassAuthorization(
      req.headers["x-factor"] as string
    );
    try {
      const userLogged: UserCredential = await signInWithEmailAndPassword(
        getAuth(),
        email,
        password
      );
      if (!userLogged.user?.emailVerified)
        throw new UnauthorizedException("O email ainda não foi validado");
      return userLogged;
    } catch (err) {
      throw new UnauthorizedException("Não foi possível fazer o login", err);
    }
  }

  private decodePassAuthorization(codedCredential: string) {
    if (!codedCredential)
      throw new UnauthorizedException("Autorização não encontrada");

    if (!codedCredential.startsWith("Basic"))
      throw new UnauthorizedException(
        "Autorização básica não preenche os requisitos"
      );

    const [, token] = codedCredential.split(" ");
    const data = Buffer.from(token, "base64").toString("ascii");
    const [email, password] = data.split(":");
    return { email, password };
  }
}
