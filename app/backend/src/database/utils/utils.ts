import IMatch from '../interfaces/IMatch';
import Leaderboard from '../types/Leaderboard';

const sortLeaderboards = (leaderboards: Leaderboard[]): Leaderboard[] => leaderboards
  .sort((a, b) => b.totalPoints - a.totalPoints
|| b.totalVictories - a.totalVictories
|| b.goalsBalance - a.goalsBalance
|| b.goalsFavor - a.goalsFavor
|| a.goalsOwn - b.goalsOwn);

const getTotalPoints = (teamMatches: IMatch[], homeTeam: boolean): number => {
  let totalPoints = 0;
  teamMatches.forEach((match) => {
    if (homeTeam && match.homeTeamGoals > match.awayTeamGoals) totalPoints += 3;
    if (!homeTeam && match.homeTeamGoals < match.awayTeamGoals) totalPoints += 3;
    if (match.homeTeamGoals === match.awayTeamGoals) totalPoints += 1;
  });
  return totalPoints;
};

const getTotalGames = (matches: IMatch[]): number => matches.length;

const getTotalVictories = (teamMatches: IMatch[], homeTeam: boolean): number => {
  if (homeTeam) return teamMatches.filter((team) => team.homeTeamGoals > team.awayTeamGoals).length;
  return teamMatches.filter((team) => team.homeTeamGoals < team.awayTeamGoals).length;
};

const getTotalLosses = (teamMatches: IMatch[], homeTeam: boolean): number => {
  if (homeTeam) return teamMatches.filter((team) => team.awayTeamGoals > team.homeTeamGoals).length;
  return teamMatches.filter((team) => team.awayTeamGoals < team.homeTeamGoals).length;
};

const getTotalDraws = (teamMatches: IMatch[]): number => teamMatches
  .filter((team) => team.awayTeamGoals === team.homeTeamGoals).length;

const getGoalsFavor = (teamMatches: IMatch[], homeTeam: boolean): number => {
  if (homeTeam) return teamMatches.reduce((acc, curr) => acc + curr.homeTeamGoals, 0);
  return teamMatches.reduce((acc, curr) => acc + curr.awayTeamGoals, 0);
};

const getGoalsOwn = (teamMatches: IMatch[], homeTeam: boolean): number => {
  if (homeTeam) return teamMatches.reduce((acc, curr) => acc + curr.awayTeamGoals, 0);
  return teamMatches.reduce((acc, curr) => acc + curr.homeTeamGoals, 0);
};

const getEfficiency = (teamMatches: IMatch[], homeTeam: boolean): string => {
  const totalGames = getTotalGames(teamMatches);
  const totalPoints = getTotalPoints(teamMatches, homeTeam);
  return ((totalPoints / (totalGames * 3)) * 100).toFixed(2);
};

const generateTeamLeaderboard = (
  teamMatches: IMatch[],
  homeTeam: boolean,
  currentTeam: string,
) => ({
  name: currentTeam,
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

const getLeaderboard = (matches: IMatch[], homeTeam: boolean): Leaderboard[] => {
  const homeOrAway = homeTeam ? 'teamHome' : 'teamAway';
  return matches.reduce((acc: Leaderboard[], curr: IMatch) => {
    const currentTeam = curr[homeOrAway].teamName;
    if (acc.every((team) => team.name !== currentTeam)) {
      const teamMatches = matches.filter((team) => team[homeOrAway].teamName === currentTeam);
      const teamLeaderboard = generateTeamLeaderboard(teamMatches, homeTeam, currentTeam);
      acc.push(teamLeaderboard);
    }
    return acc;
  }, []);
};

const utils = {
  sortLeaderboards,
  getLeaderboard,
};

export default utils;
