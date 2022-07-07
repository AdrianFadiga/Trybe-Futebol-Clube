import { NextFunction, Request, Response } from 'express';

class Middlewares {
  static validateLogin(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;
    if (!email || !password) next({ status: 400, message: 'All fields must be filled' });
    next();
  }
}

export default Middlewares;
