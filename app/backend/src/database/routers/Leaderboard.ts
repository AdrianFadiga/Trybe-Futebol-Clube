import * as express from 'express';
import LeaderboardController from '../controller/LeaderboardController';
// import Middleware from '../middlewares/Middlewares';
// import ValidateJWT from '../auth/validateJWT';

const router: express.Router = express.Router();

router.get('/home', LeaderboardController.getHomeLeaderboard);

// router.post('/', Middleware.validateLogin, LoginController.Login);

export default router;
