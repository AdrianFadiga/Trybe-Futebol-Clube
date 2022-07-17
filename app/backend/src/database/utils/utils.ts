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

const getTotalPoints = (teamMatches: IMatch[]) => {
  let totalPoints = 0;
  teamMatches.forEach((match) => {
    if (match.homeTeamGoals > match.awayTeamGoals) totalPoints += 3;
    if (match.homeTeamGoals === match.awayTeamGoals) totalPoints += 1;
  });
  return totalPoints;
};

const getTotalGames = (matches: IMatch[]) => matches.length;

const getTotalVictories = (teamMatches: IMatch[]) => teamMatches
  .filter((team) => team.homeTeamGoals > team.awayTeamGoals).length;

const getTotalLosses = (teamMatches: IMatch[]) => teamMatches
  .filter((team) => team.awayTeamGoals > team.homeTeamGoals).length;

const getTotalDraws = (teamMatches: IMatch[]) => teamMatches
  .filter((team) => team.awayTeamGoals === team.homeTeamGoals).length;

const getGoalsFavor = (teamMatches: IMatch[]) => teamMatches
  .reduce((acc, curr) => acc + curr.homeTeamGoals, 0);

const getGoalsOwn = (teamMatches: IMatch[]) => teamMatches
  .reduce((acc, curr) => acc + curr.awayTeamGoals, 0);

const getEfficiency = (teamMatches: IMatch[]) => {
  const totalGames = getTotalGames(teamMatches);
  const totalPoints = getTotalPoints(teamMatches);
  return ((totalPoints / (totalGames * 3)) * 100).toFixed(2);
};

const getLeaderboard = (matches: IMatch[]) => {
  const result = matches.reduce((acc: any, curr: any) => {
    const currentTeam = curr.teamHome.teamName;
    if (acc.every((team: any) => team.name !== currentTeam)) {
      const teamMatches = matches.filter((team: any) => team.teamHome.teamName === currentTeam);
      acc.push({
        name: curr.teamHome.teamName,
        totalPoints: getTotalPoints(teamMatches),
        totalGames: getTotalGames(teamMatches),
        totalVictories: getTotalVictories(teamMatches),
        totalLosses: getTotalLosses(teamMatches),
        totalDraws: getTotalDraws(teamMatches),
        goalsFavor: getGoalsFavor(teamMatches),
        goalsOwn: getGoalsOwn(teamMatches),
        goalsBalance: getGoalsFavor(teamMatches) - getGoalsOwn(teamMatches),
        efficiency: Number(getEfficiency(teamMatches)),
      });
    }
    return acc;
  }, []);
  return result;
};

// const generateLeaderboards = (
//   teamsArray: Leaderboard[],
//   matches: IMatch[],
//   homeOrAway: homeOrAwayType,
// ) => (homeOrAway === 'homeTeam' ? generateHomeLeaderboards(teamsArray, matches)
//   : generateAwayLeaderboards(teamsArray, matches));

const utils = {
  sortLeaderboards,
  getLeaderboard,
  // generateLeaderboards,
};

export default utils;
