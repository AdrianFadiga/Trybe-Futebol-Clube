import * as express from 'express';
import TeamsController from '../controller/TeamsController';

const router: express.Router = express.Router();

router.get('/', TeamsController.getAll);

export default router;
