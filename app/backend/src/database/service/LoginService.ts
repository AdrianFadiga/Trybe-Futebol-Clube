import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import jwtConfig from '../auth/JWTConfig';
import IError from '../interfaces/IError';
import User from '../models/User';
import secret from '../auth/secret';

const errorObj = (status: number, message: string): IError => ({
  status,
  message,
} as IError);

export default class LoginService {
  static async Login(email: string, password: string) {
    const user = await User.findOne({ where: { email } });
    if (!user) throw errorObj(401, 'email ruim');
    const xablau = await bcrypt.compare(password, user.password);
    if (!xablau) throw errorObj(401, 'senha errada');
    const token = jwt.sign({ data: email }, secret as string, jwtConfig);
    return token;
  }
}
