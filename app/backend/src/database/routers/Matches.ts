import * as express from 'express';
import MatchesController from '../controller/MatchesController';
import ValidateJWT from '../auth/validateJWT';

const router: express.Router = express.Router();

router.get('/', MatchesController.getAll);

router.post('/', ValidateJWT.validateToken, MatchesController.create);

router.patch('/:id/finish', MatchesController.finishMatch);

export default router;
