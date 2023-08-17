import { Request, Response, NextFunction, Express } from 'express';
import TrekController from './trek.controller';

const TrekApi = (app: Express) => {
  const defaultPath = '/trek';
  const controller = TrekController();
  app.get(defaultPath, async (req: Request, res: Response, next: NextFunction) => {
    controller
      .getTreks()
      .then((result) => {
        res.json(result);
        next();
      })
      .catch((e) => next(e));
  });

  app.get(defaultPath+"/:id", async (req: Request, res: Response, next: NextFunction) => {
    controller
      .getTrekById(req)
      .then((result) => {
        res.json(result);
        next();
      })
      .catch((e) => next(e));
  });

  app.post(defaultPath, async (req: Request, res: Response, next: NextFunction) => {
    controller
      .createTreks(req)
      .then((result) => {
        res.json(result);
        next();
      })
      .catch((e) => next(e));
  });

  app.put(defaultPath, async (req: Request, res: Response, next: NextFunction) => {
    controller
      .updateTreks(req)
      .then((result) => {
        res.json(result);
        next();
      })
      .catch((e) => next(e));
  });
};

export default TrekApi;
