import Team from '../models/Team';
import IError from '../interfaces/IError';

const errorObj = (status: number, message: string): IError => ({
  status,
  message,
} as IError);

export default class TeamsService {
  static async getAll() {
    const teams = await Team.findAll();
    return teams;
  }

  static async getById(id: string) {
    const team = await Team.findOne({ where: { id } });
    if (!team) throw errorObj(450, 'time sem id');
    return team;
  }
}
