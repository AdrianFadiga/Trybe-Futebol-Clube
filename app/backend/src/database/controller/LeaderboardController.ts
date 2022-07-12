import { Request, Response } from 'express';
import LeaderboardService from '../service/LeaderboardService';

class LeaderboardController {
  static async getHomeLeaderboard(req: Request, res: Response) {
    const leaderboard = await LeaderboardService.getHomeLeaderboard();
    return res.status(200).json(leaderboard);
  }
}

export default LeaderboardController;
