import IMatch from '../interfaces/IMatch';
import ITeam from '../interfaces/ITeam';
import Leaderboard from '../types/Leaderboard';
import homeOrAwayType from '../types/HomeOrAway';

const sortLeaderboards = (leaderboards: Leaderboard[]) => leaderboards
  .sort((a, b) => b.totalPoints - a.totalPoints
|| b.totalVictories - a.totalVictories
|| b.goalsBalance - a.goalsBalance
|| b.goalsFavor - a.goalsFavor
|| b.goalsOwn - a.goalsOwn);

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
const generateTeamsArray = (matches: IMatch[], teams: ITeam[], homeOrAway: homeOrAwayType) =>
  matches.reduce((acc: Leaderboard[], curr) => {
    const currentTeam = teams.find((team) => team.id === curr[homeOrAway]);
    if (acc.every((team) => team.id !== curr[homeOrAway])) {
      teamObj.name = currentTeam?.teamName;
      teamObj.id = curr[homeOrAway];
      acc.push({ ...teamObj });
    }
    return acc;
  }, []);

const updateHomeTeamScore = (teamsArray: Leaderboard[], matches: IMatch[]) =>
  matches.reduce((acc, curr) => {
    const currentTeam = acc.find((team) => team.id === curr.homeTeam);
    if (!currentTeam) return acc;
    if (curr.homeTeamGoals > curr.awayTeamGoals) currentTeam.totalVictories += 1;
    if (curr.homeTeamGoals === curr.awayTeamGoals) currentTeam.totalDraws += 1;
    if (curr.homeTeamGoals < curr.awayTeamGoals) currentTeam.totalLosses += 1;
    currentTeam.totalPoints = (currentTeam.totalVictories * 3) + currentTeam.totalDraws;
    currentTeam.totalGames += 1;
    currentTeam.goalsFavor += curr.homeTeamGoals;
    currentTeam.goalsOwn += curr.awayTeamGoals;
    currentTeam.goalsBalance = currentTeam.goalsFavor - currentTeam.goalsOwn;
    currentTeam.efficiency = (currentTeam.totalPoints / (currentTeam.totalGames * 3)) * 100;
    return acc;
  }, teamsArray);

const updateAwayTeamScore = (teamsArray: Leaderboard[], matches: IMatch[]) =>
  matches.reduce((acc, curr) => {
    const currentTeam = acc.find((team) => team.id === curr.awayTeam);
    if (!currentTeam) return acc;
    if (curr.homeTeamGoals < curr.awayTeamGoals) currentTeam.totalVictories += 1;
    if (curr.homeTeamGoals === curr.awayTeamGoals) currentTeam.totalDraws += 1;
    if (curr.homeTeamGoals > curr.awayTeamGoals) currentTeam.totalLosses += 1;
    currentTeam.totalPoints = (currentTeam.totalVictories * 3) + currentTeam.totalDraws;
    currentTeam.totalGames += 1;
    currentTeam.goalsFavor += curr.awayTeamGoals;
    currentTeam.goalsOwn += curr.homeTeamGoals;
    currentTeam.goalsBalance = currentTeam.goalsFavor - currentTeam.goalsOwn;
    currentTeam.efficiency = (currentTeam.totalPoints / (currentTeam.totalGames * 3)) * 100;
    return acc;
  }, teamsArray);

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
