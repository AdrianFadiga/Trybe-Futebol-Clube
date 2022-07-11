import { NextFunction, Request, Response } from 'express';
import IRequest from '../interfaces/IRequest';
import MatchesService from '../service/MatchesService';
import MatchInfo from '../types/MatchInfo';

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

  static async create(req: IRequest, res: Response, next: NextFunction) {
    try {
      const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = req.body;
      const match = await MatchesService.create({ homeTeam,
        awayTeam,
        homeTeamGoals,
        awayTeamGoals });
      return res.status(201).json(match);
    } catch (err) {
      next(err);
    }
  }

  static async finishMatch(req: Request, res: Response) {
    const { id } = req.params;
    await MatchesService.finishMatch(id);
    return res.status(200).json({ message: 'Finished' });
  }

  static async updateInProgress(req: Request, res: Response) {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    await MatchesService.updateMatch({ id, homeTeamGoals, awayTeamGoals } as MatchInfo);
    return res.status(200).json({ message: 'match score modified' });
  }
}
