import * as express from 'express';
import { Response, Request, NextFunction } from 'express';
import * as dotenv from 'dotenv';
import LoginRouter from './database/routers/Login';
import IResponseError from './database/interfaces/IResponseError';

dotenv.config();
class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    this.app.get('/', (req, res) => res.json({ ok: true }));
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
    this.app.use('/login', LoginRouter);
    this.app.use((err: IResponseError, _req: Request, res: Response, _next: NextFunction) => {
      if (err.status) return res.status(err.status).json({ message: err.message });
      return res.status(500).json({ message: err.message });
    });
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();
