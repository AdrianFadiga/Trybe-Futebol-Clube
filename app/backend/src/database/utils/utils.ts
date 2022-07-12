import IMatch from '../interfaces/IMatch';
import ITeam from '../interfaces/ITeam';
import Leaderboard from '../types/Leaderboard';

const sortLeaderboards = (leaderboards: Leaderboard[]) => leaderboards
  .sort((a, b) => b.totalPoints - a.totalPoints
    || b.totalVictories - a.totalVictories
    || b.goalsBalance - a.goalsBalance
    || b.goalsFavor - a.goalsFavor
    || b.goalsOwn - a.goalsOwn);

const generateTeamsArray = (matches: IMatch[], teams: ITeam[]) => matches
  .reduce((acc: Leaderboard[], curr) => {
    const xablau = teams.find((t) => t.id === curr.homeTeam);
    if (acc.every((team) => team.id !== curr.homeTeam)) {
      acc.push({
        name: xablau?.teamName,
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

const utils = {
  sortLeaderboards,
  generateTeamsArray,
};

export default utils;
