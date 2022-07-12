/* eslint-disable max-lines-per-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Match from '../models/Match';
import Team from '../models/Team';
import MatchInfo from '../types/MatchInfo';

class LeaderboardService {
  static async generateTeamsArray(matches: any) {
    const teams = await Team.findAll();
    const xablau = matches.reduce((acc: any, curr: any) => {
      const nomeDoTime = teams.find((t) => t.id === curr.homeTeam);
      if (acc.every((t: any) => t.id !== curr.homeTeam)) {
        acc.push({
          name: nomeDoTime?.teamName,
          id: curr.homeTeam,
          totalPoints: 0,
          totalGames: 0,
          totalVictories: 0,
          totalLosses: 0,
          totalDraws: 0,
          goalsFavor: 0,
          goalsOwn: 0,
          goalsBalance: 0,
          efficiency: 0,
        });
      }
      return acc;
    }, []);
    return xablau;
  }

  static updateTeamScore(teamsArray: any, matches: any) {
    return matches.reduce((acc: any, { homeTeam, homeTeamGoals, awayTeamGoals }: any) => {
      const xablau = acc.find((team: any) => team.id === homeTeam);
      if (homeTeamGoals > awayTeamGoals) xablau.totalVictories += 1;
      if (homeTeamGoals === awayTeamGoals) xablau.totalDraws += 1;
      if (homeTeamGoals < awayTeamGoals) xablau.totalLosses += 1;
      xablau.totalPoints = (xablau.totalVictories * 3) + xablau.totalDraws;
      xablau.totalGames += 1;
      xablau.goalsFavor += homeTeamGoals;
      xablau.goalsOwn += awayTeamGoals;
      xablau.goalsBalance = xablau.goalsFavor - xablau.goalsOwn;
      xablau.efficiency = (xablau.totalPoints / (xablau.totalGames * 3)) * 100;
      return acc;
    }, teamsArray).sort((a: any, b: any) => b.totalPoints - a.totalPoints
    || b.totalVictories - a.totalVictories
    || b.goalsBalance - a.goalsBalance
    || b.goalsFavor - a.goalsFavor
    || b.goalsOwn - a.goalsOwn);
  }

  static async getHomeLeaderboard() {
    const matches = await Match.findAll({ where: { inProgress: false },
      attributes: ['homeTeam', 'homeTeamGoals', 'awayTeamGoals'] }) as any;
    const teamsArray = await LeaderboardService.generateTeamsArray(matches);
    const leaderboards = LeaderboardService.updateTeamScore(teamsArray, matches);
    return leaderboards;
  }
}

export default LeaderboardService;
