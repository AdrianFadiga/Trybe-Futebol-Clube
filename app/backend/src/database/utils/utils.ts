import IMatch from '../interfaces/IMatch';
import ITeam from '../interfaces/ITeam';
import Leaderboard from '../types/Leaderboard';
import homeOrAwayType from '../types/HomeOrAway';

const teamObj: Leaderboard = {
  name: '',
  id: 0,
  totalPoints: 0,
  totalGames: 0,
  totalVictories: 0,
  totalLosses: 0,
  totalDraws: 0,
  goalsFavor: 0,
  goalsOwn: 0,
  goalsBalance: 0,
  efficiency: 0,
};

const sortLeaderboards = (leaderboards: Leaderboard[]) => leaderboards
  .sort((a, b) => b.totalPoints - a.totalPoints
    || b.totalVictories - a.totalVictories
    || b.goalsBalance - a.goalsBalance
    || b.goalsFavor - a.goalsFavor
    || b.goalsOwn - a.goalsOwn);

const generateTeamsArray = (
  matches: IMatch[],
  teams: ITeam[],
  homeOrAway: homeOrAwayType,
) => matches.reduce((acc: Leaderboard[], curr) => {
  const xablau = teams.find((t) => t.id === curr[homeOrAway]);
  if (acc.every((team) => team.id !== curr[homeOrAway])) {
    teamObj.name = xablau?.teamName;
    teamObj.id = curr[homeOrAway];
    acc.push({ ...teamObj });
  }
  return acc;
}, []);

const updateHomeTeamScore = (teamsArray: Leaderboard[], matches: IMatch[]) => {
  const teste = matches.reduce((acc, curr) => {
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
  return teste;
};

const updateAwayTeamScore = (teamsArray: Leaderboard[], matches: IMatch[]) => {
  const teste = matches.reduce((acc, curr) => {
    const xablau = acc.find((team) => team.id === curr.awayTeam);
    if (!xablau) return acc;
    if (curr.homeTeamGoals < curr.awayTeamGoals) xablau.totalVictories += 1;
    if (curr.homeTeamGoals === curr.awayTeamGoals) xablau.totalDraws += 1;
    if (curr.homeTeamGoals > curr.awayTeamGoals) xablau.totalLosses += 1;
    xablau.totalPoints = (xablau.totalVictories * 3) + xablau.totalDraws;
    xablau.totalGames += 1;
    xablau.goalsFavor += curr.awayTeamGoals;
    xablau.goalsOwn += curr.homeTeamGoals;
    xablau.goalsBalance = xablau.goalsFavor - xablau.goalsOwn;
    xablau.efficiency = (xablau.totalPoints / (xablau.totalGames * 3)) * 100;
    return acc;
  }, teamsArray);
  return teste;
};

const updateTeamScore = (
  teamsArray: Leaderboard[],
  matches: IMatch[],
  homeOrAway: homeOrAwayType,
) => (homeOrAway === 'homeTeam' ? updateHomeTeamScore(teamsArray, matches)
  : updateAwayTeamScore(teamsArray, matches));

const utils = {
  sortLeaderboards,
  generateTeamsArray,
  updateTeamScore,
};

export default utils;
