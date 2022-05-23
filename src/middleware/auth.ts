import HttpException from '../exceptions/HttpException';
import { Request, Response, NextFunction } from 'express';
import UnauthorizedException from '../exceptions/UnauthorizedException';

// const operatorController: OperatorController = new OperatorController();

export const authorize = async (req: Request, _res: Response, next: NextFunction) => {
  // operatorController
  //   .authorize(req)
  //   .then(() => {
  //     next();
  //   })
  //   .catch((e:Error) => next(new UnauthorizedException(e.message)));
};

export const authorizeOperator = async (req: Request, _res: Response, next: NextFunction) => {
  // operatorController
  //   .authorizeOperator(req)
  //   .then(() => {
  //     next();
  //   })
  //   .catch((e:Error) => next(new UnauthorizedException(e.message)));
};


export const autorizeOperatorByProfile = async (req: Request, _res: Response, next: NextFunction) => {
  // operatorController
  //   .autorizeOperatorByProfile(req)
  //   .then(() => {
  //     next();
  //   })
  //   .catch((e:Error) => next(new HttpException(403, e.message)));
};


export const autorizeAdministrator = async (req: Request, _res: Response, next: NextFunction) => {
  // operatorController
  //   .autorizeAdministrator(req)
  //   .then(() => {
  //     next();
  //   })
  //   .catch((e:Error) => next(new HttpException(403, e.message)));
};

export const autorizeMaster = async (req: Request, _res: Response, next: NextFunction):Promise<any> => {
  // operatorController
  //   .autorizeMaster(req)
  //   .then(() => {
  //     next();
  //   })
  //   .catch((e:Error) => next(new HttpException(403, e.message)));
};