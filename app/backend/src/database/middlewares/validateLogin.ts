import { NextFunction, Request, Response } from 'express';

class Middlewares {
  public validateLogin(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;
    if (!email || !password) next({ status: 401, message: 'Campos não preenchidos' });
    if (!email.includes('@')) next({ status: 401, message: 'Email invalido' });
    if (password.length <= 6) next({ status: 401, message: 'Senha pequena' });
    next();
  }
}

export default Middlewares;
