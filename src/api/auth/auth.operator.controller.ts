
import HttpException from '../../exceptions/HttpException';
import { Request } from 'express';
import FirebaseAdmin from 'firebase-admin';
import { DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier';


export default class AuthOperatorController {
  public async authenticate(req: Request): Promise<DecodedIdToken> {
    FirebaseAdmin.initializeApp();
    const token = req?.headers?.authorization?.split('Bearer')[1];    
    if (!token) throw new HttpException(403, 'Autenticação inválida');
    const decodedIdToken: DecodedIdToken = await FirebaseAdmin.auth().verifyIdToken(token);
    return decodedIdToken;
  }
}
