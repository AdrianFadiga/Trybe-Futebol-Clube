import Team from '../models/Team';

interface ITeam extends Team {
  id: number;
  teamName: string
}

export default ITeam;
