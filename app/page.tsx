import Image from 'next/image';
import { ArrowRight, Binary, Bot, ChartNoAxesCombined, ShieldCheck } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    title: 'Operational AI Automation',
    description: 'Automate repetitive admin work, routing, reporting, and workflow orchestration across your stack.',
    icon: Bot
  },
  {
    title: 'AI Product Development',
    description: 'Launch internal or customer-facing AI tools with production architecture, guardrails, and analytics.',
    icon: Binary
  },
  {
    title: 'Decision Intelligence',
    description: 'Build dashboards and AI copilots that convert raw data into strategic recommendations in real-time.',
    icon: ChartNoAxesCombined
  }
];

const principles = ['Integrity in execution', 'Speed without chaos', 'Security by design', 'Built for measurable ROI'];

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="grid-overlay relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-x-0 top-[-160px] mx-auto h-[420px] w-[720px] rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="container relative z-10 px-6 py-8 md:py-10">
          <header className="mb-20 flex items-center justify-between">
            <Image src="/bishop-mark.svg" alt="Bishop Consulting" width={210} height={30} className="h-auto w-[180px] sm:w-[210px]" priority />
            <nav className="hidden gap-8 text-sm uppercase tracking-wider text-zinc-300 md:flex">
              <a href="#services" className="hover:text-white">
                Solutions
              </a>
              <a href="#approach" className="hover:text-white">
                Approach
              </a>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </nav>
          </header>

          <div className="mx-auto mb-20 max-w-4xl text-center">
            <Badge variant="accent" className="mx-auto mb-6">
              AI Consulting for Operators & Builders
            </Badge>
            <h1 className="mb-8 text-balance text-4xl font-semibold leading-tight sm:text-6xl md:text-7xl">
              AI systems that make your business <span className="text-cyan-300">faster</span>,
              <span className="block">smarter, and impossible to ignore.</span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-zinc-300 sm:text-xl">
              We partner with ambitious teams to optimize operations and build AI-powered products that ship quickly and
              perform in the real world.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="gap-2 rounded-full px-8" asChild>
                <a href="#contact">
                  Book a Strategy Call <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full border-zinc-500 px-8 text-zinc-100" asChild>
                <a href="#services">Explore Solutions</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="container px-6 py-20">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.24em] text-cyan-300">Core Capabilities</p>
            <h2 className="max-w-2xl text-3xl font-semibold sm:text-4xl">Purpose-built AI engagements, from first pilot to scale.</h2>
          </div>
          <ShieldCheck className="hidden h-10 w-10 text-cyan-300 md:block" />
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="group backdrop-blur-sm transition-colors hover:border-cyan-400/60">
              <CardContent className="space-y-4">
                <service.icon className="h-6 w-6 text-cyan-300" />
                <h3 className="text-xl font-medium">{service.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-300">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="approach" className="border-y border-border/60 bg-[#060a14]/70">
        <div className="container grid gap-10 px-6 py-20 md:grid-cols-[1.3fr_1fr] md:items-center">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.24em] text-cyan-300">How we operate</p>
            <h2 className="mb-6 text-3xl font-semibold sm:text-4xl">Military-grade clarity. Startup-level velocity.</h2>
            <p className="max-w-2xl text-zinc-300">
              Inspired by defense-tech rigor and product-first discipline, we work in tight execution cycles to deliver
              high-impact AI outcomes without bloated consulting overhead.
            </p>
          </div>
          <ul className="space-y-3 rounded-xl border border-border/70 bg-card/40 p-6">
            {principles.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-zinc-200">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact" className="container px-6 py-20">
        <Card className="overflow-hidden border-cyan-400/40 bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-transparent">
          <CardContent className="flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-12">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.24em] text-cyan-300">Let&apos;s build</p>
              <h2 className="text-3xl font-semibold">Ready to turn AI into your competitive advantage?</h2>
              <p className="mt-4 max-w-xl text-zinc-300">
                Tell us your bottleneck and we&apos;ll design an implementation roadmap built for your team, budget, and timeline.
              </p>
            </div>
            <Button size="lg" className="rounded-full px-8" asChild>
              <a href="mailto:hello@bishopconsulting.us">hello@bishopconsulting.us</a>
            </Button>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
