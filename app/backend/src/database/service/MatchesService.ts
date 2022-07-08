import Match from '../models/Match';
import Team from '../models/Team';

export default class MatchesService {
  static async getAll() {
    const matches = await Match.findAll({ include: [{
      model: Team,
      as: 'teamHome',
    //   attributes: ['teamName'],
    }, {
      model: Team,
      as: 'teamAway',
    //   attributes: ['teamName'],
    }] });
    return matches;
  }

  static async getByInProgress(inProgress: boolean) {
    const matches = await Match.findOne({ where: { inProgress },
      include: [{
        model: Team,
        as: 'teamHome',
        // attributes: ['teamName'],
      }, {
        model: Team,
        as: 'teamHome',
        // attributes: ['teamName'],
      }] });
    return matches;
  }
}
