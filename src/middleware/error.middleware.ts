import { logger } from "../logger/winston";
import { Request, Response } from "express";
import HttpException from "../exceptions/HttpException";

function errorMiddleware(
  error: HttpException,
  _request: Request,
  response: Response
) {
  logger.error(error);
  const status = error.status || 500;
  const message = error.message || "Algo deu errado";
  const info = error.info;
  response.status(status).send({ message, info });
}

export default errorMiddleware;
