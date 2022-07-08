import * as express from 'express';
import TeamsController from '../controller/TeamsController';

const router: express.Router = express.Router();

router.get('/', TeamsController.getAll);

router.get('/:id', TeamsController.getById);

export default router;
