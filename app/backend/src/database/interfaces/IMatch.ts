import Match from '../models/Match';
import TeamHome from '../types/TeamHome';
import TeamAway from '../types/TeamAway';

interface IMatch extends Match {
  id: number;
  homeTeam: number;
  homeTeamGoals: number;
  awayTeam: number;
  awayTeamGoals: number;
  inProgress: boolean;
  teamHome: TeamHome;
  teamAway: TeamAway;
}

export default IMatch;
