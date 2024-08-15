import { Request, Response, NextFunction, Express } from 'express';
import ExempleController from './exemple.controller';

const ExempleApi = (app: Express) => {
  const defaultPath = '/exemple';
  const controller = ExempleController();
  app.get(defaultPath, async (req: Request, res: Response, next: NextFunction) => {
    controller
      .getExemples()
      .then((result) => {
        res.json(result);
        next();
      })
      .catch((e) => next(e));
  });

  app.get(defaultPath+"/:id", async (req: Request, res: Response, next: NextFunction) => {
    controller
      .getExempleById(req)
      .then((result) => {
        res.json(result);
        next();
      })
      .catch((e) => next(e));
  });

  app.post(defaultPath, async (req: Request, res: Response, next: NextFunction) => {
    controller
      .createExemples(req)
      .then((result) => {
        res.json(result);
        next();
      })
      .catch((e) => next(e));
  });

  app.put(defaultPath, async (req: Request, res: Response, next: NextFunction) => {
    controller
      .updateExemples(req)
      .then((result) => {
        res.json(result);
        next();
      })
      .catch((e) => next(e));
  });
};

export default ExempleApi;
