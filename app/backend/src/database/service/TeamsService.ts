import Team from '../models/Team';

export default class TeamsService {
  static async getAll() {
    const teams = await Team.findAll();
    return teams;
  }
}
