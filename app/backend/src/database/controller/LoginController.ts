import { NextFunction, Request, Response } from 'express';
import IRequest from '../interfaces/IRequest';
import LoginService from '../service/LoginService';

export default class LoginController {
  Login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;
      const token = await LoginService.Login(email, password);
      return res.status(200).json({ token });
    } catch (err) {
      next(err);
    }
  };

  static async CheckRole(req: IRequest, res: Response, next: NextFunction) {
    try {
      const { payload } = req;
      const userRole = await LoginService.CheckRole(payload as string);
      return res.status(200).json(userRole);
    } catch (err) {
      next(err);
    }
  }
}
