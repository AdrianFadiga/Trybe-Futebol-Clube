import IMatch from '../interfaces/IMatch';
import Match from '../models/Match';
import Leaderboard from '../types/Leaderboard';
import utils from '../utils/utils';
import Team from '../models/Team';

class LeaderboardService {
  static updateTeamScore(teamsArray: Leaderboard[], matches: IMatch[]) {
    return matches.reduce((acc, curr) => {
      const xablau = acc.find((team) => team.id === curr.homeTeam);
      if (!xablau) return acc;
      if (curr.homeTeamGoals > curr.awayTeamGoals) xablau.totalVictories += 1;
      if (curr.homeTeamGoals === curr.awayTeamGoals) xablau.totalDraws += 1;
      if (curr.homeTeamGoals < curr.awayTeamGoals) xablau.totalLosses += 1;
      xablau.totalPoints = (xablau.totalVictories * 3) + xablau.totalDraws;
      xablau.totalGames += 1;
      xablau.goalsFavor += curr.homeTeamGoals;
      xablau.goalsOwn += curr.awayTeamGoals;
      xablau.goalsBalance = xablau.goalsFavor - xablau.goalsOwn;
      xablau.efficiency = (xablau.totalPoints / (xablau.totalGames * 3)) * 100;
      return acc;
    }, teamsArray);
  }

  static async getHomeLeaderboard() {
    const matches = await Match.findAll({ where: { inProgress: false } });
    const teams = await Team.findAll();
    const teamsArray = utils.generateTeamsArray(matches, teams);
    const leaderboards = LeaderboardService.updateTeamScore(teamsArray, matches);
    const sortedLeaderboards = utils.sortLeaderboards(leaderboards);
    return sortedLeaderboards;
  }
}

export default LeaderboardService;
