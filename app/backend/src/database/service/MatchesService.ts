import Match from '../models/Match';
import Team from '../models/Team';
import IdAndInProgress from '../types/IdAndInProgress';
import MatchInfo from '../types/MatchInfo';

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
      }, {
        model: Team,
        as: 'teamHome',
      }] });
    return matches;
  }

  static async create(matchInfo: MatchInfo) {
    const newMatch = Match.create({
      homeTeam: matchInfo.homeTeam,
      awayTeam: matchInfo.awayTeam,
      homeTeamGoals: matchInfo.homeTeamGoals,
      awayTeamGoals: matchInfo.awayTeamGoals,
      inProgress: 1,
    });
    return newMatch;
  }

  static async finishMatch(id: string) {
    await Match.update({ inProgress: 0 }, { where: { id } });
  }
}
