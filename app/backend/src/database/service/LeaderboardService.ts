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

  static async getFullLeaderboard() {
    // const homeLeaderboard = await LeaderboardService.getLeaderboard('/home');
    // const awayLeaderboard = await LeaderboardService.getLeaderboard('/away');
    // const fullLeaderboard = utils.mergeLeaderboards(homeLeaderboard, awayLeaderboard);
    // const sortedLeaderboards = utils.sortLeaderboards(fullLeaderboard);
    // return sortedLeaderboards;
  }
}

export default LeaderboardService;
