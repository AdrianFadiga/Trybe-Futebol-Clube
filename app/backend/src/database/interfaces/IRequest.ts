import { Request } from 'express';

export default interface IRequest extends Request {
  payload?: string;
}
