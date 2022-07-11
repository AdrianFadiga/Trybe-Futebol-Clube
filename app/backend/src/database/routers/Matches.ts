import * as express from 'express';
import MatchesController from '../controller/MatchesController';
import ValidateJWT from '../auth/validateJWT';
import Middlewares from '../middlewares/Middlewares';

const router: express.Router = express.Router();

router.get('/', MatchesController.getAll);

router.post(
  '/',
  ValidateJWT.validateToken,
  Middlewares.validateCreateMatch,
  MatchesController.create,
);

router.patch('/:id/finish', MatchesController.finishMatch);

export default router;
