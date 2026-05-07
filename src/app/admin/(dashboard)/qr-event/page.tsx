import { eventService } from '@/services/event-service';
import QrEventClient from '@/components/admin/attendance/QrEventClient';

export default async function QrEventPage() {
  const events = await eventService.getEvents();

  return <QrEventClient initialEvents={events} />;
}
