import { ArrowUpRight, ChevronRight, Globe2, Mail, Menu, Sigma } from 'lucide-react'

const events = [
  {
    date: 'OCT 12',
    type: 'Competition',
    title: 'The Green Invitational',
    description: 'A fast-paced team competition for problem solvers of every level.',
    time: '3:30 PM — 6:00 PM',
    location: 'Room 204',
  },
  {
    date: 'NOV 03',
    type: 'Workshop',
    title: 'Proofs & Puzzles',
    description: 'Explore elegant proofs and the surprising ideas behind them.',
    time: 'Lunch period',
    location: 'Library commons',
  },
  {
    date: 'DEC 08',
    type: 'Social',
    title: 'Pi Night',
    description: 'Pizza, puzzles, and a celebration of everyone who loves math.',
    time: '6:00 PM — 8:00 PM',
    location: 'Student center',
  },
]

const board = [
  { initials: 'AR', name: 'Avery Rivera', role: 'President' },
  { initials: 'JK', name: 'Jordan Kim', role: 'Vice President' },
  { initials: 'MS', name: 'Maya Shah', role: 'Events Director' },
]

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f8f4] text-[#101510]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-8" aria-label="Main navigation">
        <a href="#home" className="flex items-center gap-3 font-bold tracking-tight" aria-label="Greenwood Math Club home">
          <span className="flex size-10 items-center justify-center rounded-xl bg-[#1b5e3c] text-white shadow-[0_5px_0_#b7d9b2]"><Sigma /></span>
          <span className="text-lg">GREENWOOD<span className="text-[#1b5e3c]">/</span>MATH</span>
        </a>
        <div className="hidden items-center gap-8 text-sm font-semibold md:flex">
          <a className="text-[#1b5e3c]" href="#home">home</a>
          <a className="transition-colors hover:text-[#1b5e3c]" href="#events">events</a>
          <a className="transition-colors hover:text-[#1b5e3c]" href="#board">board</a>
        </div>
        <a href="#events" className="hidden items-center gap-2 rounded-full border border-[#101510] px-4 py-2 text-sm font-semibold transition-colors hover:bg-[#101510] hover:text-white sm:flex">Join an event <ArrowUpRight className="size-4" /></a>
        <button className="rounded-lg p-2 md:hidden" aria-label="Open navigation menu"><Menu /></button>
      </nav>

      <section id="home" className="mx-auto grid max-w-6xl gap-12 px-6 pb-24 pt-14 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:px-8 lg:pt-20">
        <div>
          <p className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#1b5e3c]"><span className="size-2 rounded-full bg-[#8ac47c]" /> Est. 2018 · Greenwood High</p>
          <h1 className="max-w-3xl text-6xl font-black leading-[.92] tracking-[-0.07em] sm:text-7xl lg:text-[6.8rem]">THINK<br /><span className="text-[#1b5e3c]">BIGGER.</span></h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-[#4a554b]">A community for curious minds. We solve hard problems, ask better questions, and have a lot of fun along the way.</p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#events" className="group flex items-center gap-3 rounded-full bg-[#1b5e3c] px-6 py-3.5 text-sm font-bold text-white shadow-[0_4px_0_#b7d9b2] transition-transform hover:-translate-y-0.5">See what&apos;s next <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" /></a>
            <a href="#board" className="text-sm font-bold underline decoration-[#8ac47c] decoration-2 underline-offset-4">Meet the board</a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md lg:justify-self-end">
          <div className="aspect-square rounded-[2.5rem] bg-[#dcebd7] p-7 shadow-[12px_12px_0_#101510]">
            <div className="flex h-full flex-col justify-between rounded-[1.8rem] border-2 border-[#1b5e3c] bg-[#f7f8f4] p-6">
              <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-[#1b5e3c]"><span>Problem 01</span><span>∎ ∎</span></div>
              <div className="text-center font-serif text-7xl font-bold text-[#1b5e3c] sm:text-8xl">∑<span className="block text-4xl tracking-normal">curiosity</span></div>
              <div className="border-t border-[#b7d9b2] pt-4 text-sm font-semibold text-[#4a554b]">There is always another way<br />to look at a problem.</div>
            </div>
          </div>
          <span className="absolute -right-3 -top-6 rotate-6 rounded-full bg-[#101510] px-4 py-2 text-xs font-bold text-white">MAKE IT MAKE SENSE</span>
        </div>
      </section>

      <section id="events" className="bg-[#101510] px-6 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#8ac47c]">Mark your calendar</p><h2 className="text-4xl font-black tracking-[-0.04em] sm:text-5xl">What&apos;s happening</h2></div><p className="max-w-xs text-sm leading-relaxed text-[#b5c0b5]">Bring a friend, bring a pencil, bring your best question.</p></div>
          <div className="grid gap-4 lg:grid-cols-3">
            {events.map((event) => <article key={event.title} className="group flex flex-col rounded-2xl border border-[#354638] bg-[#17231a] p-6 transition-colors hover:border-[#8ac47c]"><div className="flex items-start justify-between"><span className="rounded-full bg-[#dcebd7] px-3 py-1 text-xs font-black text-[#1b5e3c]">{event.type}</span><span className="text-sm font-bold text-[#8ac47c]">{event.date}</span></div><h3 className="mt-12 text-2xl font-bold">{event.title}</h3><p className="mt-3 min-h-12 text-sm leading-relaxed text-[#b5c0b5]">{event.description}</p><div className="mt-8 flex gap-4 border-t border-[#354638] pt-4 text-xs font-semibold text-[#b5c0b5]"><span>{event.time}</span><span>{event.location}</span></div></article>)}
          </div>
        </div>
      </section>

      <section id="board" className="mx-auto max-w-6xl px-6 py-20 lg:px-8"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center"><div><p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#1b5e3c]">The people behind the problems</p><h2 className="text-4xl font-black tracking-[-0.04em] sm:text-5xl">Meet the<br />board.</h2><p className="mt-5 max-w-sm leading-relaxed text-[#4a554b]">We&apos;re students who believe math is more than answers. It&apos;s a language for seeing the world differently.</p></div><div className="grid gap-3 sm:grid-cols-3">{board.map((person) => <div key={person.name} className="rounded-2xl border border-[#cbd8c8] bg-white p-5"><div className="mb-10 flex size-12 items-center justify-center rounded-full bg-[#dcebd7] font-bold text-[#1b5e3c]">{person.initials}</div><p className="font-bold">{person.name}</p><p className="mt-1 text-sm text-[#607064]">{person.role}</p></div>)}</div></div></section>

      <footer className="border-t border-[#d5dfd2] px-6 py-8 lg:px-8"><div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-sm text-[#607064] sm:flex-row sm:items-center"><p>Greenwood Math Club · Room 204</p><div className="flex gap-4"><a href="mailto:math@greenwood.edu" aria-label="Email the math club" className="transition-colors hover:text-[#1b5e3c]"><Mail className="size-5" /></a><a href="#home" aria-label="Math club Instagram" className="transition-colors hover:text-[#1b5e3c]"><Globe2 className="size-5" /></a></div></div></footer>
    </main>
  )
}

