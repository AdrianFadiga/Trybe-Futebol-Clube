import * as jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
// import IRequestWithAdmin from '../interfaces/IRequestWithAdmin';

const secret: string | undefined = process.env.JWT_SECRET;

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const payload = jwt.verify(token, secret as string) as jwt.JwtPayload;
    // req.payload = { email: payload.email, admin: payload.admin, userId: payload.id };
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

export default validateToken;
