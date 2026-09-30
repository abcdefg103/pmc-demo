import { EventCard, events, PageIntro, PageShell } from '@/components/site-header'

export default function EventsPage() {
  return <PageShell><PageIntro eyebrow="Mark your calendar" title="Events" description="Bring a friend, bring a pencil, bring your best question. There is always something happening at Greenwood Math Club." /><section className="px-6 py-10 lg:px-8"><div className="mx-auto max-w-3xl"><div className="grid gap-5">{events.map((event) => <EventCard key={event.title} event={event} />)}</div></div></section></PageShell>
}
