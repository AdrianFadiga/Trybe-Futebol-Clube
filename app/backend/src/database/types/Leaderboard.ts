type Leaderboard = {
  name?: string,
  id?: number,
  totalPoints: number,
  totalGames: number,
  totalVictories: number,
  totalLosses: number,
  totalDraws: number,
  goalsFavor: number,
  goalsOwn: number,
  goalsBalance: number,
  efficiency: number,
};

export default Leaderboard;
