import * as express from 'express';
import LeaderboardController from '../controller/LeaderboardController';

const router: express.Router = express.Router();

router.get('/home', LeaderboardController.getLeaderboard);

router.get('/away', LeaderboardController.getLeaderboard);

router.get('/', LeaderboardController.getFullLeaderboard);

export default router;
