import EvaluationFormBuilder from '@/components/admin/evaluation/EvaluationFormBuilder';
import { eventService } from '@/services/event-service';

export default async function EventEvaluationBuilderPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const event = await eventService.getEvent(id);

  return <EvaluationFormBuilder eventId={event.id} eventTitle={event.title} />;
}
