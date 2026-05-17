import EvaluationResponsesClient from '@/components/admin/evaluation/EvaluationResponsesClient';

export default async function EvaluationResponsesPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <EvaluationResponsesClient eventId={id} />;
}
