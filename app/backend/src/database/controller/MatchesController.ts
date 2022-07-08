import { Request, Response } from 'express';
import MatchesService from '../service/MatchesService';

export default class MatchesController {
  static async getAll(req: Request, res: Response) {
    const { inProgress } = req.query;
    if (inProgress === undefined) {
      const matches = await MatchesService.getAll();
      return res.status(200).json(matches);
    }
    const progress = inProgress === 'true';
    const matches = await MatchesService.getByInProgress(progress as boolean);
    return res.status(200).json(matches);
  }
}
