/* eslint-disable max-lines-per-function */
import IMatch from '../interfaces/IMatch';
import ITeam from '../interfaces/ITeam';
import Leaderboard from '../types/Leaderboard';
import homeOrAwayType from '../types/HomeOrAway';

const sortLeaderboards = (leaderboards: Leaderboard[]) => leaderboards
  .sort((a, b) => b.totalPoints - a.totalPoints
|| b.totalVictories - a.totalVictories
|| b.goalsBalance - a.goalsBalance
|| b.goalsFavor - a.goalsFavor
|| a.goalsOwn - b.goalsOwn);

const getTotalPoints = (teamMatches: IMatch[], homeTeam: boolean) => {
  let totalPoints = 0;
  teamMatches.forEach((match) => {
    if (homeTeam && match.homeTeamGoals > match.awayTeamGoals) totalPoints += 3;
    if (!homeTeam && match.homeTeamGoals < match.awayTeamGoals) totalPoints += 3;
    if (match.homeTeamGoals === match.awayTeamGoals) totalPoints += 1;
  });
  return totalPoints;
};

const getTotalGames = (matches: IMatch[]) => matches.length;

const getTotalVictories = (teamMatches: IMatch[], homeTeam: boolean) => {
  if (homeTeam) return teamMatches.filter((team) => team.homeTeamGoals > team.awayTeamGoals).length;
  return teamMatches.filter((team) => team.homeTeamGoals < team.awayTeamGoals).length;
};

const getTotalLosses = (teamMatches: IMatch[], homeTeam: boolean) => {
  if (homeTeam) return teamMatches.filter((team) => team.awayTeamGoals > team.homeTeamGoals).length;
  return teamMatches.filter((team) => team.awayTeamGoals < team.homeTeamGoals).length;
};

const getTotalDraws = (teamMatches: IMatch[]) => teamMatches
  .filter((team) => team.awayTeamGoals === team.homeTeamGoals).length;

const getGoalsFavor = (teamMatches: IMatch[], homeTeam: boolean) => {
  if (homeTeam) return teamMatches.reduce((acc, curr) => acc + curr.homeTeamGoals, 0);
  return teamMatches.reduce((acc, curr) => acc + curr.awayTeamGoals, 0);
};

const getGoalsOwn = (teamMatches: IMatch[], homeTeam: boolean) => {
  if (homeTeam) return teamMatches.reduce((acc, curr) => acc + curr.awayTeamGoals, 0);
  return teamMatches.reduce((acc, curr) => acc + curr.homeTeamGoals, 0);
};

const getEfficiency = (teamMatches: IMatch[], homeTeam: boolean) => {
  const totalGames = getTotalGames(teamMatches);
  const totalPoints = getTotalPoints(teamMatches, homeTeam);
  return ((totalPoints / (totalGames * 3)) * 100).toFixed(2);
};

const getLeaderboard = (matches: IMatch[], homeOrAway: string) => {
  const result = matches.reduce((acc: any, curr: any) => {
    const currentTeam = curr[homeOrAway].teamName;
    if (acc.every((team: any) => team.name !== currentTeam)) {
      const teamMatches = matches.filter((team: any) => team[homeOrAway].teamName === currentTeam);
      const homeTeam = homeOrAway === 'teamHome';
      acc.push({
        name: curr[homeOrAway].teamName,
        totalPoints: getTotalPoints(teamMatches, homeTeam),
        totalGames: getTotalGames(teamMatches),
        totalVictories: getTotalVictories(teamMatches, homeTeam),
        totalLosses: getTotalLosses(teamMatches, homeTeam),
        totalDraws: getTotalDraws(teamMatches),
        goalsFavor: getGoalsFavor(teamMatches, homeTeam),
        goalsOwn: getGoalsOwn(teamMatches, homeTeam),
        goalsBalance: getGoalsFavor(teamMatches, homeTeam) - getGoalsOwn(teamMatches, homeTeam),
        efficiency: Number(getEfficiency(teamMatches, homeTeam)),
      });
    }
    return acc;
  }, []);
  return result;
};

const utils = {
  sortLeaderboards,
  getLeaderboard,
};

export default utils;
