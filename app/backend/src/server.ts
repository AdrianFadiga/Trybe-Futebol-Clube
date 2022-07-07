import * as dotenv from 'dotenv';
import { App } from './app';

dotenv.config();

const PORT = process.env.APP_PORT || 3001;

new App().start(PORT);
