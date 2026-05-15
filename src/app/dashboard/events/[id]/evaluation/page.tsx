import React from 'react';
import EvaluationClient from '@/components/user/evaluation/EvaluationClient';

export default async function EvaluationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <EvaluationClient eventId={id} />;
}
