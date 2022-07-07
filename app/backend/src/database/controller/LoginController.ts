import { NextFunction, Request, Response } from 'express';
import LoginService from '../service/LoginService';

export default class LoginController {
  static async Login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      const token = await LoginService.Login(email, password);
      return res.status(200).json({ token });
    } catch (err) {
      next(err);
    }
  }
}
