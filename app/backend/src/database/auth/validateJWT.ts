import * as jwt from 'jsonwebtoken';
import { NextFunction, Response } from 'express';
import IRequest from '../interfaces/IRequest';

export default class ValidateJWT {
  static async validateToken(req: IRequest, res: Response, next: NextFunction) {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET as string) as jwt.JwtPayload;
      req.payload = payload.data;
      next();
    } catch (err) {
      return res.status(401).json({ message: 'Token must be a valid token' });
    }
  }
}
