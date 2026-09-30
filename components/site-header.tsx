import { Camera, Mail, MessageCircle, Sigma } from 'lucide-react'

const links = [
  { label: 'home', href: '/' },
  { label: 'events', href: '/events' },
  { label: 'board', href: '/board' },
  { label: 'archives', href: '/archives' },
  { label: 'contact', href: '/contact' },
]

export function SiteHeader() {
  return (
    <header className="border-b border-[#d5dfd2] bg-[#f7f8f4]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 font-bold tracking-tight" aria-label="Greenwood Math Club home">
            <span className="flex size-9 items-center justify-center rounded-xl bg-[#1b5e3c] text-white shadow-[0_4px_0_#b7d9b2]"><Sigma /></span>
            <span className="text-base sm:text-lg">GREENWOOD<span className="text-[#1b5e3c]">/</span>MATH</span>
          </a>
          <div className="flex items-center gap-3 text-[#607064]" aria-label="Social links">
            <a href="https://instagram.com" aria-label="Instagram" className="transition-colors hover:text-[#1b5e3c]"><Camera className="size-4" /></a>
            <a href="https://discord.com" aria-label="Discord" className="transition-colors hover:text-[#1b5e3c]"><MessageCircle className="size-4" /></a>
            <a href="mailto:math@greenwood.edu" aria-label="Email the math club" className="transition-colors hover:text-[#1b5e3c]"><Mail className="size-4" /></a>
          </div>
        </div>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold" aria-label="Main navigation">
          {links.map((link) => <a key={link.href} href={link.href} className="transition-colors hover:text-[#1b5e3c]">{link.label}</a>)}
        </nav>
      </div>
    </header>
  )
}

export function SiteFooter() {
  return <footer className="border-t border-[#d5dfd2] px-6 py-7 lg:px-8"><div className="mx-auto flex max-w-6xl justify-between gap-4 text-sm text-[#607064]"><p>Greenwood Math Club · Room 204</p><a href="mailto:math@greenwood.edu" className="font-semibold hover:text-[#1b5e3c]">math@greenwood.edu</a></div></footer>
}

export const events = [
  { date: 'OCT 12', type: 'Competition', title: 'The Green Invitational', description: 'A fast-paced team competition for problem solvers of every level.', time: '3:30 PM — 6:00 PM', location: 'Room 204' },
  { date: 'NOV 03', type: 'Workshop', title: 'Proofs & Puzzles', description: 'Explore elegant proofs and the surprising ideas behind them.', time: 'Lunch period', location: 'Library commons' },
  { date: 'DEC 08', type: 'Social', title: 'Pi Night', description: 'Pizza, puzzles, and a celebration of everyone who loves math.', time: '6:00 PM — 8:00 PM', location: 'Student center' },
  { date: 'JAN 18', type: 'Competition', title: 'Winter Problem Set', description: 'Work together through a set of satisfying olympiad-style problems.', time: '3:30 PM — 5:00 PM', location: 'Room 204' },
]

export const board = [
  { initials: 'AR', name: 'Avery Rivera', role: 'President' },
  { initials: 'JK', name: 'Jordan Kim', role: 'Vice President' },
  { initials: 'MS', name: 'Maya Shah', role: 'Events Director' },
]

export function EventCard({ event }: { event: (typeof events)[number] }) {
  return <article className="overflow-hidden rounded-2xl border border-[#cbd8c8] bg-white"><div className="flex aspect-[16/6] items-center justify-center bg-[#e8f0e5] text-xs font-bold uppercase tracking-[0.2em] text-[#789078]">Event image</div><div className="p-6"><h2 className="text-2xl font-bold text-[#101510]">{event.title}</h2><p className="mt-3 text-sm leading-relaxed text-[#4a554b]">{event.description}</p></div></article>
}

export function BoardCards() {
  return <div className="grid gap-3 sm:grid-cols-3">{board.map((person) => <div key={person.name} className="rounded-2xl border border-[#cbd8c8] bg-white p-5"><div className="mb-10 flex size-12 items-center justify-center rounded-full bg-[#dcebd7] font-bold text-[#1b5e3c]">{person.initials}</div><p className="font-bold">{person.name}</p><p className="mt-1 text-sm text-[#607064]">{person.role}</p></div>)}</div>
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return <main className="min-h-screen bg-[#f7f8f4] text-[#101510]"><SiteHeader />{children}<SiteFooter /></main>
}

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <div className="mx-auto max-w-6xl px-6 pb-12 pt-16 lg:px-8"><p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#1b5e3c]">{eyebrow}</p><h1 className="text-5xl font-black tracking-[-0.06em] sm:text-6xl">{title}</h1><p className="mt-5 max-w-xl text-lg leading-relaxed text-[#4a554b]">{description}</p></div>
}
