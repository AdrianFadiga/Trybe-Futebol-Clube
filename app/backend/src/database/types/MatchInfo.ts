type MatchInfo = {
  id?: string;
  homeTeam: number,
  awayTeam: number,
  homeTeamGoals?: number,
  awayTeamGoals?: number,
  inProgress?: boolean,
};

export default MatchInfo;
