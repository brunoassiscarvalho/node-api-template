import { Request } from "express";
import {
  getAuth,
  signInWithEmailAndPassword,
  UserCredential,
} from "firebase/auth";
import UnauthorizedException from "../../exceptions/UnauthorizedException";
import { decodePassAuthorization } from "../../util/Utils";

export default class LoginController {
  public async login(req: Request): Promise<string> {
    const { email, password } = decodePassAuthorization(req.headers);
    try {
      const userLogged: UserCredential = await signInWithEmailAndPassword(
        getAuth(),
        email,
        password
      );
      if (!userLogged.user?.emailVerified)
        throw new UnauthorizedException("O email ainda não foi validado");
      return userLogged.user.getIdToken();
    } catch (err) {
      throw new UnauthorizedException("Não foi possível fazer o login", err);
    }
  }
}
