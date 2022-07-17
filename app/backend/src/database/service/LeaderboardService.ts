import Match from '../models/Match';
import IMatch from '../interfaces/IMatch';
import utils from '../utils/utils';
import Team from '../models/Team';

class LeaderboardService {
  static async getLeaderboard(path: string) {
    const matches = await Match.findAll({ where: { inProgress: false },
      include: [{
        model: Team,
        as: 'teamHome',
      }, {
        model: Team,
        as: 'teamAway',
      }] });
    const homeTeam = path === '/home';
    const leaderboards = utils.getLeaderboard(matches as IMatch[], homeTeam);
    const sortedLeaderboards = utils.sortLeaderboards(leaderboards);
    return sortedLeaderboards;
  }
}

export default LeaderboardService;
