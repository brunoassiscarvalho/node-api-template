import BusinessException from '../../exceptions/BusinessException';
import { Request, Response } from 'express';
import admin, { auth } from 'firebase-admin';
import { UserRecord } from 'firebase-functions/v1/auth';


export default class UsesrController {

  public async getUsers(): Promise<string> {
    return "Servidor Funcionado!"
  }

  public async createUser(req: Request): Promise<UserRecord> {

    const { email, password } = req.body;
    const user: UserRecord = await auth().createUser({ email, password });
    if (!user) throw new BusinessException('Não foi possível criar o usuário');
    return user
  }
}