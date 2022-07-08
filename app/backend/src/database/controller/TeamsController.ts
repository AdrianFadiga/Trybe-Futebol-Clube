import { NextFunction, Request, Response } from 'express';
import TeamsService from '../service/TeamsService';

export default class TeamsController {
  static async getAll(req: Request, res: Response) {
    const teams = await TeamsService.getAll();
    return res.status(200).json(teams);
  }

  static async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const team = await TeamsService.getById(id);
      return res.status(200).json(team);
    } catch (err) {
      next(err);
    }
  }
}
