import { Request, Response } from 'express';
import LeaderboardService from '../service/LeaderboardService';

class LeaderboardController {
  static async getLeaderboard(req: Request, res: Response) {
    const { path } = req;
    const leaderboard = await LeaderboardService.getLeaderboard(path);
    return res.status(200).json(leaderboard);
  }

  static async getFullLeaderboard(req: Request, res: Response) {
    const fullLeaderboard = await LeaderboardService.getFullLeaderboard();
    return res.status(200).json(fullLeaderboard);
  }
}

export default LeaderboardController;
