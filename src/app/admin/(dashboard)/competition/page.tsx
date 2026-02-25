import { competitionService } from '@/services/competition-service';
import CompetitionClient from '@/components/admin/competition/CompetitionClient';

export default async function ManageCompetitionPage() {
  const competitions = await competitionService.getCompetitions();

  return <CompetitionClient initialCompetitions={competitions} />;
}