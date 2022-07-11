import Match from '../models/Match';
import Team from '../models/Team';
import MatchInfo from '../types/MatchInfo';
import IError from '../interfaces/IError';

const errorObj = (status: number, message: string): IError => ({
  status,
  message,
} as IError);

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

  static async verifyTeams({ homeTeam, awayTeam }: MatchInfo) {
    const homeTeamExists = await Team.findOne({ where: { id: homeTeam } });
    const awayTeamExists = await Team.findOne({ where: { id: awayTeam } });
    if (!homeTeamExists || !awayTeamExists) return false;
    return true;
  }

  static async create(matchInfo: MatchInfo) {
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = matchInfo;
    const teamsExists = await this.verifyTeams({ homeTeam, awayTeam });
    if (!teamsExists) throw errorObj(404, 'There is no team with such id!') as IError;
    const newMatch = Match.create({
      homeTeam,
      awayTeam,
      homeTeamGoals,
      awayTeamGoals,
      inProgress: 1,
    });
    return newMatch;
  }

  static async finishMatch(id: string) {
    await Match.update({ inProgress: 0 }, { where: { id } });
  }

  static async updateMatch({ id, homeTeamGoals, awayTeamGoals }: MatchInfo) {
    await Match.update({ homeTeamGoals, awayTeamGoals }, { where: { id } });
  }
}
