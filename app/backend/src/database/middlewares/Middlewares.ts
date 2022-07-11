import { NextFunction, Request, Response } from 'express';

class Middlewares {
  static validateLogin(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;
    if (!email || !password) next({ status: 400, message: 'All fields must be filled' });
    next();
  }

  static validateCreateMatch(req: Request, res: Response, next: NextFunction) {
    const { homeTeam, awayTeam } = req.body;
    if (homeTeam === awayTeam) {
      next({ status: 401, message: 'It is not possible to create a match with two equal teams' });
    }
    next();
  }
}

export default Middlewares;
