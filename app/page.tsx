import Image from 'next/image';
import ConsultationModal from './consultation-modal';
import {
  ArrowRight,
  BarChart3,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Clock3,
  Facebook,
  FileText,
  Instagram,
  Linkedin,
  MapPin,
  MessageSquareText,
  MousePointer2,
  Play,
  ShieldCheck,
  Sparkles,
  Table2,
  Twitter,
  Youtube,
  Zap
} from 'lucide-react';

const logoSrc = '/BishopConsulting - White.png';

const navItems = ['About', 'Solutions', 'Insights', 'Location', 'Contact'];

const inputs = [
  { label: 'Documents', icon: FileText },
  { label: 'Messages', icon: MessageSquareText },
  { label: 'Spreadsheets', icon: Table2 }
];

const outcomes = ['Faster approvals', 'Cleaner reporting', 'Lower manual cost'];

const painpointChecks = [
  'Manual work that slows the team down',
  'Data scattered across too many tools',
  'Follow-up and reporting that take too long'
];

const workflowSteps = [
  {
    title: 'Find the repeat work',
    body: 'Identify the calls, estimates, scheduling, invoicing, follow-up, and reporting that your team handles again and again.',
    icon: MousePointer2
  },
  {
    title: 'Build around your business',
    body: 'Connect the tools and rules you already use, whether you run a trade crew, local service company, office team, or growing operation.',
    icon: BrainCircuit
  },
  {
    title: 'Give the hours back',
    body: 'Reduce manual task work so people can spend more time serving customers, finishing jobs, and moving the business forward.',
    icon: BarChart3
  }
];

const systemNodes = [
  { label: 'Calls', x: '7%', y: '25%' },
  { label: 'Jobs', x: '18%', y: '70%' },
  { label: 'Invoices', x: '39%', y: '18%' },
  { label: 'Schedule', x: '58%', y: '74%' },
  { label: 'Reports', x: '78%', y: '30%' },
  { label: 'Team', x: '88%', y: '66%' }
];

const savings = [
  { value: '40%', label: 'less repetitive admin drag', icon: Clock3 },
  { value: '2-5x', label: 'faster workflow turnaround', icon: Zap },
  { value: '24/7', label: 'structured operational visibility', icon: ShieldCheck }
];

const solutionRows = [
  'Automated intake, routing, and follow-up',
  'AI-assisted reporting and executive summaries',
  'Internal knowledge systems for faster answers',
  'Workflow copilots that keep teams in motion'
];

const workflowPhrases = [
  'Real Estate Comps to Clients',
  'Lead Intake to Follow-Up',
  'Invoices to Approvals',
  'Daily Ops to Summary'
];

const workflowApps = [
  { label: 'Docs', icon: FileText, className: 'docs-node' },
  { label: 'Sheets', icon: Table2, className: 'sheets-node' },
  { label: 'CRM', icon: BarChart3, className: 'crm-node' },
  { label: 'Email', icon: MessageSquareText, className: 'email-node' }
];

const workflowOutputs = [
  { label: 'Client brief', icon: FileText, className: 'brief-node' },
  { label: 'Tasks', icon: CheckCircle2, className: 'task-node' },
  { label: 'Follow-up', icon: MessageSquareText, className: 'follow-node' }
];

const footerLinks = ['About', 'Solutions', 'Insights', 'Location'];

const socialLinks = [
  { label: 'Instagram', icon: Instagram },
  { label: 'Facebook', icon: Facebook },
  { label: 'X', icon: Twitter },
  { label: 'LinkedIn', icon: Linkedin },
  { label: 'YouTube', icon: Youtube }
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <section className="hero-grid relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(40,132,255,0.16),transparent_34%),radial-gradient(circle_at_50%_95%,rgba(39,124,255,0.16),transparent_36%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0)_0%,rgba(5,5,5,0.42)_71%,#050505_100%)]" />

        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050505]/72 backdrop-blur-xl">
          <div className="mx-auto grid h-20 max-w-[1500px] grid-cols-[1fr_auto_1fr] items-center gap-5 px-5 sm:px-8">
            <nav className="hidden items-center gap-8 text-[0.78rem] font-medium uppercase tracking-[0.08em] text-white/84 lg:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-white">
                {item}
              </a>
            ))}
            </nav>

            <a href="#" aria-label="Bishop Consulting home" className="justify-self-start lg:justify-self-center">
              <Image src={logoSrc} alt="Bishop Consulting" width={4280} height={432} className="h-auto w-[190px] sm:w-[255px]" priority />
            </a>

            <div className="hidden justify-end gap-6 text-white/90 md:flex">
              <a href="#contact" aria-label="Instagram" className="transition hover:text-[#2d8cff]">
                <Instagram className="h-[18px] w-[18px]" />
              </a>
              <a href="#contact" aria-label="Facebook" className="transition hover:text-[#2d8cff]">
                <Facebook className="h-[18px] w-[18px]" />
              </a>
              <a href="#contact" aria-label="X" className="transition hover:text-[#2d8cff]">
                <Twitter className="h-[18px] w-[18px]" />
              </a>
              <a href="#contact" aria-label="LinkedIn" className="transition hover:text-[#2d8cff]">
                <Linkedin className="h-[18px] w-[18px]" />
              </a>
              <a href="#contact" aria-label="YouTube" className="transition hover:text-[#2d8cff]">
                <Youtube className="h-[18px] w-[18px]" />
              </a>
            </div>
          </div>
        </header>

        <div className="relative z-10 mx-0 flex min-h-screen w-full min-w-0 max-w-[390px] flex-col items-center px-5 pb-12 pt-40 text-center sm:mx-auto sm:max-w-[1420px] sm:px-8 sm:pt-44 lg:pt-48">
          <h1 className="w-full min-w-0 max-w-[340px] text-[2.18rem] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:max-w-[900px] sm:text-[5.5rem] sm:leading-[0.98] lg:text-[6.55rem]">
            <span className="block">Make operations</span>
            <span className="block">
              more <span className="text-[#2d8cff]">efficient</span> with
            </span>
            <span className="block">AI.</span>
          </h1>
          <p className="mt-7 max-w-[320px] text-[0.98rem] leading-7 text-white/62 sm:max-w-[770px] sm:text-[1.35rem] sm:leading-8">
            Bishop Consulting helps existing businesses reduce manual work, connect fragmented workflows, and create faster output with practical AI systems.
          </p>

          <div className="mt-12 flex w-full max-w-[320px] flex-col justify-center gap-4 sm:w-auto sm:max-w-none sm:flex-row sm:gap-5">
            <ConsultationModal className="inline-flex h-16 items-center justify-center rounded-full bg-white px-10 text-[1.08rem] font-semibold text-black shadow-[0_0_38px_rgba(255,255,255,0.16)] transition hover:bg-[#dcecff] sm:min-w-[250px]" />
            <a
              href="#solutions"
              className="inline-flex h-16 items-center justify-center gap-3 rounded-full border border-white/34 px-10 text-[1.08rem] font-semibold text-white transition hover:border-[#2d8cff] hover:text-[#9fc9ff] sm:min-w-[250px]"
            >
              <Play className="h-5 w-5 fill-current" />
              See How It Works
            </a>
          </div>

          <div className="workflow-stage mt-28 w-full min-w-0 max-w-[350px] sm:max-w-[1240px]">
            <div className="workflow-row">
              <div className="flow-card input-card">
                <div className="icon-strip">
                  {inputs.map(({ label, icon: Icon }) => (
                    <div key={label} className="icon-unit" title={label}>
                      <Icon className="h-6 w-6" />
                    </div>
                  ))}
                </div>
                <p>1. Existing Workflow</p>
              </div>

              <div className="flow-line" />

              <div className="flow-card ai-card">
                <BrainCircuit className="mx-auto h-12 w-12 text-[#2d8cff]" strokeWidth={1.8} />
                <p>2. Artificial Intelligence Optimization</p>
              </div>

              <div className="flow-line" />

              <div className="flow-card output-card">
                <div className="check-strip">
                  {outcomes.map((item) => (
                    <span key={item} title={item}>
                      <CheckCircle2 className="h-7 w-7" />
                    </span>
                  ))}
                </div>
                <p>3. More Efficient Output</p>
              </div>
            </div>

            <div className="orbit-field" aria-hidden="true">
              <span className="orbit orbit-one" />
              <span className="orbit orbit-two" />
              <span className="orbit orbit-three" />
              <span className="pulse-dot dot-one" />
              <span className="pulse-dot dot-two" />
              <span className="pulse-dot dot-three" />
              <span className="pulse-dot dot-four" />
            </div>
          </div>

        </div>
      </section>

      <section id="agentic" className="relative overflow-hidden bg-[#050505] px-5 py-28 text-white sm:px-8 lg:py-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(45,140,255,0.16),transparent_35%),radial-gradient(circle_at_70%_68%,rgba(48,255,126,0.09),transparent_30%)]" />
        <div className="mx-auto grid max-w-[1420px] gap-10 xl:gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <div className="relative z-10">
            <h2 className="max-w-[760px] text-[3.05rem] font-semibold leading-[0.98] tracking-[-0.04em] sm:text-[4.55rem] lg:text-[5.45rem] xl:text-[5.85rem]">
              Agentic workflows for
              <span className="workflow-phrase" aria-label="Rotating workflow examples">
                {workflowPhrases.map((phrase) => (
                  <span key={phrase}>{phrase}</span>
                ))}
              </span>
            </h2>
            <p className="mt-8 max-w-[640px] text-lg leading-8 text-white/58 sm:text-xl">
              One request can pull context from docs, sheets, CRM, and email, then route the next output without your team moving every piece by hand.
            </p>
          </div>

          <div className="automation-web" aria-label="Animated automation workflow web">
            <svg viewBox="0 0 760 560" aria-hidden="true">
              <path className="web-line web-line-blue" d="M142 108 C226 108 260 238 350 258" />
              <path className="web-line web-line-green" d="M132 292 C225 292 262 290 350 278" />
              <path className="web-line web-line-white" d="M178 452 C246 416 266 338 352 300" />
              <path className="web-line web-line-blue" d="M364 168 C366 206 372 230 380 256" />
              <path className="web-line web-line-green" d="M430 276 C520 262 552 164 654 146" />
              <path className="web-line web-line-white" d="M428 296 C538 310 582 302 676 300" />
              <path className="web-line web-line-blue" d="M410 326 C496 405 542 444 648 452" />
            </svg>

            <div className="automation-core">
              <Zap className="h-10 w-10" />
              <span>AI Agent</span>
            </div>

            {workflowApps.map(({ label, icon: Icon, className }) => (
              <div key={label} className={`workflow-node input-workflow-node ${className}`}>
                <Icon className="h-6 w-6" />
                <span>{label}</span>
              </div>
            ))}

            {workflowOutputs.map(({ label, icon: Icon, className }) => (
              <div key={label} className={`workflow-node output-workflow-node ${className}`}>
                <Icon className="h-6 w-6" />
                <span>{label}</span>
              </div>
            ))}

            <div className="workflow-output-card">
              <span>Output</span>
              <strong>Comps packet sent</strong>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative bg-[#050505] px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto grid max-w-[1460px] gap-16 lg:grid-cols-[1.35fr_0.9fr] lg:items-center">
          <div className="outcome-shift" aria-label="Hours spent without AI compared to with AI">
            <div className="hours-column without-ai">
              <h3>Without AI</h3>
              <p>Hours spent</p>
              <div className="hour-blocks" aria-hidden="true">
                {Array.from({ length: 10 }).map((_, index) => (
                  <span key={index} />
                ))}
              </div>
            </div>

            <ArrowRight className="outcome-arrow" aria-hidden="true" />

            <div className="hours-column with-ai">
              <h3>With AI</h3>
              <p>Hours spent</p>
              <div className="hour-blocks" aria-hidden="true">
                {Array.from({ length: 10 }).map((_, index) => (
                  <span key={index} />
                ))}
              </div>
            </div>
          </div>

          <div className="text-right lg:justify-self-end">
            <h2 className="ml-auto max-w-[680px] text-[2.7rem] font-semibold leading-[1.02] tracking-[-0.04em] sm:text-[4.4rem] xl:text-[4.85rem]">
              What is your
              <span className="block text-[#2d8cff]">time worth?</span>
            </h2>
            <p className="ml-auto mt-8 max-w-[610px] text-lg leading-8 text-white/58 sm:text-xl sm:leading-9">
              Our AI systems eliminate repetitive work, reduce delays, and give your team back time to focus on what actually moves the needle.
            </p>
          </div>
        </div>
      </section>

      <section id="solutions" className="relative overflow-hidden bg-white px-5 py-24 text-black sm:px-8 lg:py-32">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#2d8cff] to-transparent" />
        <div className="mx-auto max-w-[1380px]">
          <div className="grid gap-16 lg:grid-cols-[0.95fr_1.25fr] lg:items-start">
            <div>
              <h2 className="max-w-[620px] text-[2.7rem] font-semibold leading-[1.02] tracking-[-0.04em] sm:text-[4.15rem] xl:text-[4.45rem]">
                AI is not just for tech companies.
              </h2>
              <p className="mt-6 max-w-[610px] text-lg leading-8 text-black/58">
                This technology is built for repetitive, task-based functions in any business, from electricians and plumbers to local service teams that need less admin drag and faster follow-up.
              </p>
            </div>

            <div className="architecture-map">
              <div className="system-core">
                <Bot className="h-12 w-12" />
                <span>AI Ops Core</span>
              </div>
              {systemNodes.map((node) => (
                <div key={node.label} className="system-node" style={{ left: node.x, top: node.y }}>
                  {node.label}
                </div>
              ))}
              <svg viewBox="0 0 720 390" aria-hidden="true">
                <path d="M360 194 C180 70 90 82 55 95" />
                <path d="M360 194 C210 220 128 282 118 314" />
                <path d="M360 194 C330 92 296 64 282 72" />
                <path d="M360 194 C442 253 429 312 421 326" />
                <path d="M360 194 C492 92 585 93 617 105" />
                <path d="M360 194 C532 224 618 272 650 296" />
              </svg>
            </div>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {workflowSteps.map(({ title, body, icon: Icon }) => (
              <article key={title} className="step-card">
                <Icon className="h-7 w-7 text-[#2d8cff]" />
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="painpoint-section relative overflow-hidden bg-[#050505] px-5 py-24 text-white sm:px-8 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(45,140,255,0.12),transparent_34%)]" />
        <div className="painpoint-panel mx-auto" aria-label="Top pain points checklist">
          <p className="painpoint-headline">
            Think of your top 3 biggest pain points.
            <span>We can fix them.</span>
          </p>
          <ul className="painpoint-checklist">
            {painpointChecks.map((item) => (
              <li key={item}>
                <span className="painpoint-check-icon" aria-hidden="true">
                  <CheckCircle2 className="h-5 w-5" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="insights" className="bg-[#050505] px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto grid max-w-[1480px] gap-16 lg:grid-cols-[1.38fr_0.82fr] lg:items-center">
          <div className="savings-grid">
            {savings.map(({ value, label, icon: Icon }) => (
              <div key={label} className="saving-card">
                <Icon className="h-6 w-6 text-[#2d8cff]" />
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-[2.7rem] font-semibold leading-[1.02] tracking-[-0.04em] sm:text-[4.2rem]">
              Efficiency should be visible in the numbers.
            </h2>
            <div className="mt-8 space-y-4">
              {solutionRows.map((row) => (
                <div key={row} className="solution-row">
                  <CheckCircle2 className="h-5 w-5 text-[#2d8cff]" />
                  <span>{row}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="location" className="location-section relative overflow-hidden bg-[#050505] px-5 py-24 text-white sm:px-8 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_48%,rgba(45,140,255,0.16),transparent_34%),radial-gradient(circle_at_38%_62%,rgba(62,237,123,0.08),transparent_30%)]" />
        <div className="location-stack mx-auto max-w-[1380px]">
          <div className="location-block grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            <div className="relative z-10">
              <h2 className="text-[2.7rem] font-semibold leading-[1.02] tracking-[-0.04em] sm:text-[4.4rem]">
                Headquarters
              </h2>
              <p className="mt-7 max-w-[520px] text-lg leading-8 text-white/58">
                Based in Johnson City, Tennessee. We physically serve businesses within a 40-mile radius although exceptions can be made and support digital workflow projects wherever your team operates.
              </p>
              <div className="location-proof">
                <span>Physical service radius: 40 miles</span>
                <span>Digital service: remote-first delivery</span>
              </div>
            </div>

            <div className="location-map" aria-label="Map showing Johnson City 40 mile service radius and digital service reach">
              <svg className="location-lines" viewBox="0 0 820 460" aria-hidden="true">
                <path className="map-road map-road-one" d="M48 310 C176 236 274 244 388 282 C512 323 628 284 774 170" />
                <path className="map-road map-road-two" d="M92 150 C234 206 342 188 454 122 C556 62 658 83 760 126" />
                <path className="map-road map-road-three" d="M180 414 C250 322 326 276 420 244 C536 206 632 222 746 272" />
                <path className="map-river" d="M36 224 C154 178 246 190 318 222 C402 260 494 250 586 206 C654 174 728 170 802 202" />
              </svg>

              <div className="service-radius" aria-hidden="true">
                <span className="radius-ring radius-ring-one" />
                <span className="radius-ring radius-ring-two" />
                <span className="radius-ring radius-ring-three" />
              </div>

              <div className="city-pin">
                <span className="pin-pulse" />
                <MapPin className="h-9 w-9" />
                <strong>Johnson City</strong>
                <small>40 mile radius</small>
              </div>

              <span className="map-label label-kingsport">Kingsport</span>
              <span className="map-label label-bristol">Bristol</span>
              <span className="map-label label-elizabeth">Elizabethton</span>
              <span className="map-label label-greeneville">Greeneville</span>

              <div className="digital-reach">
                <Sparkles className="h-5 w-5 text-[#2d8cff]" />
                <span>Digital service beyond the radius</span>
              </div>
            </div>
          </div>

          <div className="location-block grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            <div className="relative z-10">
              <h2 className="text-[2.7rem] font-semibold leading-[1.02] tracking-[-0.04em] sm:text-[4.4rem]">
                Texas Location
              </h2>
              <p className="mt-7 max-w-[520px] text-lg leading-8 text-white/58">
                Also serving from Brownwood, Texas with a 100-mile physical service radius and remote-first support for workflow automation projects beyond the local area.
              </p>
              <div className="location-proof">
                <span>Brownwood area service radius: 100 miles</span>
                <span>Digital service: available anywhere</span>
              </div>
            </div>

            <div className="location-map" aria-label="Map showing Brownwood Texas 100 mile service radius and digital service reach">
              <svg className="location-lines" viewBox="0 0 820 460" aria-hidden="true">
                <path className="map-road map-road-one" d="M56 250 C160 178 280 196 386 236 C516 286 612 246 776 116" />
                <path className="map-road map-road-two" d="M112 360 C218 298 312 310 426 268 C560 218 656 238 768 302" />
                <path className="map-road map-road-three" d="M122 118 C248 158 356 142 476 92 C588 46 686 66 778 126" />
                <path className="map-river" d="M42 316 C158 262 254 266 342 296 C452 334 552 294 656 246 C724 214 778 214 814 230" />
              </svg>

              <div className="service-radius" aria-hidden="true">
                <span className="radius-ring radius-ring-one" />
                <span className="radius-ring radius-ring-two" />
                <span className="radius-ring radius-ring-three" />
              </div>

              <div className="city-pin">
                <span className="pin-pulse" />
                <MapPin className="h-9 w-9" />
                <strong>Brownwood</strong>
                <small>100 mile radius</small>
              </div>

              <span className="map-label label-kingsport">Early</span>
              <span className="map-label label-bristol">Lake Brownwood</span>
              <span className="map-label label-elizabeth">Bangs</span>
              <span className="map-label label-greeneville">Coleman</span>

              <div className="digital-reach">
                <Sparkles className="h-5 w-5 text-[#2d8cff]" />
                <span>Digital service beyond the radius</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative bg-[#050505] px-5 py-24 text-white sm:px-8 lg:py-32">
        <div className="mx-auto max-w-[1100px] text-center">
          <Image src={logoSrc} alt="Bishop Consulting" width={4280} height={432} className="mx-auto h-auto w-[260px] sm:w-[360px]" />
          <h2 className="mx-auto mt-12 max-w-[880px] text-[2.9rem] font-semibold leading-[1] tracking-[-0.04em] sm:text-[5.2rem]">
            Build the AI layer your business can measure.
          </h2>
          <p className="mx-auto mt-7 max-w-[690px] text-lg leading-8 text-white/58">
            Bring us an existing workflow, department, or operating bottleneck. We will map the savings opportunity and design the system around measurable output.
          </p>
          <ConsultationModal
            label="Start the Conversation"
            showArrow
            className="mt-10 inline-flex h-14 items-center justify-center gap-3 rounded-full bg-white px-8 text-[0.98rem] font-semibold text-black transition hover:bg-[#dcecff]"
          />
        </div>
      </section>

      <footer className="relative border-t border-white/10 bg-[#050505] px-5 py-12 text-white sm:px-8">
        <div className="mx-auto grid max-w-[1380px] gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:items-start">
          <div>
            <a href="#" aria-label="Bishop Consulting home" className="inline-flex">
              <Image src={logoSrc} alt="Bishop Consulting" width={4280} height={432} className="h-auto w-[230px]" />
            </a>
            <p className="mt-5 max-w-[460px] text-sm leading-6 text-white/54">
              Practical AI systems for existing businesses that need faster workflows, lower manual cost, and clearer operating visibility.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="grid gap-3 text-sm font-semibold text-white/70">
            {footerLinks.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-white">
                {item}
              </a>
            ))}
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>

          <div>
            <a href="mailto:service@bishopconsulting.us" className="text-sm font-semibold text-white transition hover:text-[#9fc9ff]">
              service@bishopconsulting.us
            </a>
            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map(({ label, icon: Icon }) => (
                <a
                  key={label}
                  href="#contact"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/14 text-white/72 transition hover:border-[#2d8cff] hover:text-[#2d8cff]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-[1380px] flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/42 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 Bishop Consulting. All rights reserved.</p>
          <p>AI workflow optimization, automation, and operating systems.</p>
        </div>
      </footer>
    </main>
  );
}
