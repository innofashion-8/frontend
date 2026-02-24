import { eventService } from '@/services/event-service';
import EventClient from './EventClient';

export default async function ManageEventPage() {
  const events = await eventService.getEvents();

  return <EventClient initialEvents={events} />;
}
