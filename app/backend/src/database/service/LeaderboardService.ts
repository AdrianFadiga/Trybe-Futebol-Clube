import Match from '../models/Match';
import utils from '../utils/utils';
import Team from '../models/Team';

class LeaderboardService {
  static async getLeaderboard(path: string) {
    const homeOrAway = path === '/home' ? 'homeTeam' : 'awayTeam';
    const matches = await Match.findAll({ where: { inProgress: false } });
    const teams = await Team.findAll();
    const teamsArray = utils.generateTeamsArray(matches, teams, homeOrAway);
    const leaderboards = utils.updateTeamScore(teamsArray, matches, homeOrAway);
    const sortedLeaderboards = utils.sortLeaderboards(leaderboards);
    return sortedLeaderboards;
  }
}

export default LeaderboardService;
