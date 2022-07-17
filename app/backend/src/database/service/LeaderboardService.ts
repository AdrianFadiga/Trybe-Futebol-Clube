import Match from '../models/Match';
import utils from '../utils/utils';
import Team from '../models/Team';

class LeaderboardService {
  static async getLeaderboard(path: string) {
    // const homeOrAway = path === '/home' ? 'homeTeam' : 'awayTeam';
    const matches = await Match.findAll({ where: { inProgress: false },
      include: [{
        model: Team,
        as: 'teamHome',
      }, {
        model: Team,
        as: 'teamAway',
      }] });
    const leaderboards = utils.getLeaderboard(matches);
    const sortedLeaderboards = utils.sortLeaderboards(leaderboards);
    return sortedLeaderboards;
  }
}

export default LeaderboardService;
