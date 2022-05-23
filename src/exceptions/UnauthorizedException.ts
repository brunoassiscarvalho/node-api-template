import HttpException from "./HttpException";

class UnauthorizedException extends HttpException {
  status: number;
  message: string;
  constructor(message: string) {
    super(401, message);
    this.status = 401;
    this.message = message;
  }
}

export default UnauthorizedException;