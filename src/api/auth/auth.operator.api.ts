import { Request, Response, NextFunction, Application } from 'express';
import AuthOperatorController from './auth.operator.controller';

export class AuthOperatorApi {
  private defaultPath = '/auth';

  public authController: AuthOperatorController = new AuthOperatorController();

  public routes(app: Application): void {
    app.post(
      this.defaultPath,
      async (req: Request, res: Response, next: NextFunction) => {
        try {
          this.authController
            .authenticate(req)
            .then((result) => {
              res.json(result);
              next();
            })
            .catch((e) => next(e));
        } catch (error) {
          next(error);
        }
      }
    );
  }
}
