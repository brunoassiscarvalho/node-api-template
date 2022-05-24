
import { Request, Response, NextFunction, Application } from 'express';
import { isAuthenticated } from '../../middleware/authenticated';
import UserController from './user.controller';

export class UserApi {
  private defaultPath = '/user';

  public userController: UserController = new UserController();

  public routes(app: Application): void {
    app.get(
      this.defaultPath,
      isAuthenticated,
      async (req: Request, res: Response, next: NextFunction) => {
        this.userController
          .getUsers()
          .then((result) => {
            res.json(result);
            next();
          })
          .catch((e) => next(e));
      }
    );

    app.post(
      this.defaultPath,
      async (req: Request, res: Response, next: NextFunction) => {
        this.userController
          .createUser(req)
          .then((result) => {
            res.json(result);
            next();
          })
          .catch((e) => next(e));
      }
    );

    app.post(
      this.defaultPath+"/verification-mail",
      async (req: Request, res: Response, next: NextFunction) => {
        this.userController
          .sendVerificationEmail(req)
          .then((result) => {
            res.json(result);
            next();
          })
          .catch((e) => next(e));
      }
    );
  }
}
