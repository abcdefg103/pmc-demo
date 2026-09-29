import { Mail } from 'lucide-react'
import { PageIntro, PageShell } from '@/components/site-header'

export default function ContactPage() {
  return <PageShell><PageIntro eyebrow="Questions welcome" title="Contact us" description="Want to join, collaborate, or suggest an event? We would love to hear from you." /><section className="mx-auto max-w-3xl px-6 pb-24 lg:px-8"><a href="mailto:math@greenwood.edu" className="flex items-center gap-4 rounded-2xl border border-[#cbd8c8] bg-white p-6 font-bold hover:border-[#1b5e3c]"><span className="flex size-11 items-center justify-center rounded-full bg-[#dcebd7] text-[#1b5e3c]"><Mail /></span><span><span className="block text-sm font-normal text-[#607064]">Email the club</span>math@greenwood.edu</span></a><p className="mt-8 text-sm leading-relaxed text-[#607064]">You can also find us in Room 204 during lunch on Wednesdays.</p></section></PageShell>
}
