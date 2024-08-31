import { Request, Response, NextFunction, Express } from 'express';
import ContactController from './contact.controller';

const ContactApi = (app: Express) => {
  const defaultPath = '/v1/contact';
  const controller = ContactController();
  app.get(defaultPath, async (req: Request, res: Response, next: NextFunction) => {
    controller
      .getContacts()
      .then((result) => {
        res.json(result);
        next();
      })
      .catch((e) => next(e));
  });

  app.get(defaultPath+"/:id", async (req: Request, res: Response, next: NextFunction) => {
    controller
      .getContactById(req)
      .then((result) => {
        res.json(result);
        next();
      })
      .catch((e) => next(e));
  });

  app.post(defaultPath, async (req: Request, res: Response, next: NextFunction) => {
    controller
      .createContacts(req)
      .then((result) => {
        res.json(result);
        next();
      })
      .catch((e) => next(e));
  });

  app.put(defaultPath, async (req: Request, res: Response, next: NextFunction) => {
    controller
      .updateContacts(req)
      .then((result) => {
        res.json(result);
        next();
      })
      .catch((e) => next(e));
  });
};

export default ContactApi;
