import * as express from 'express';
import MatchesController from '../controller/MatchesController';

const router: express.Router = express.Router();

router.get('/', MatchesController.getAll);

export default router;
