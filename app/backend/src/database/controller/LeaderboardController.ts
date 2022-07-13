import { Request, Response } from 'express';
import LeaderboardService from '../service/LeaderboardService';

class LeaderboardController {
  static async getLeaderboard(req: Request, res: Response) {
    const { path } = req;
    const leaderboard = await LeaderboardService.getLeaderboard(path);
    return res.status(200).json(leaderboard);
  }
}

export default LeaderboardController;
