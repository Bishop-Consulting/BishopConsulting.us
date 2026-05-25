import Image from 'next/image';
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

const navItems = ['About', 'Solutions', 'Insights', 'Contact'];

const inputs = [
  { label: 'Documents', icon: FileText },
  { label: 'Messages', icon: MessageSquareText },
  { label: 'Spreadsheets', icon: Table2 }
];

const outcomes = ['Faster approvals', 'Cleaner reporting', 'Lower manual cost'];

const workflowSteps = [
  {
    title: 'Map the existing operation',
    body: 'Find the repetitive work, handoffs, approvals, and reporting loops that slow the business down.',
    icon: MousePointer2
  },
  {
    title: 'Build the AI operating layer',
    body: 'Connect data, documents, systems, and team rules into practical automation your people can actually use.',
    icon: BrainCircuit
  },
  {
    title: 'Measure the time returned',
    body: 'Track cycle time, rework, throughput, and savings so leadership sees where efficiency is compounding.',
    icon: BarChart3
  }
];

const systemNodes = [
  { label: 'CRM', x: '7%', y: '25%' },
  { label: 'Email', x: '18%', y: '70%' },
  { label: 'Files', x: '39%', y: '18%' },
  { label: 'ERP', x: '58%', y: '74%' },
  { label: 'Reports', x: '78%', y: '30%' },
  { label: 'Team', x: '88%', y: '66%' }
];

const savings = [
  { value: '20-40%', label: 'less repetitive admin drag', icon: Clock3 },
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

const footerLinks = ['About', 'Solutions', 'Insights'];

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

        <header className="relative z-20 mx-auto grid h-20 max-w-[1500px] grid-cols-[1fr_auto_1fr] items-center gap-5 px-5 sm:px-8">
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
        </header>

        <div className="relative z-10 mx-0 flex min-h-[calc(100vh-80px)] w-full min-w-0 max-w-[390px] flex-col items-center px-5 pb-12 pt-12 text-center sm:mx-auto sm:max-w-[1320px] sm:px-8 sm:pt-16">
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

          <div className="mt-10 flex w-full max-w-[280px] flex-col justify-center gap-4 sm:w-auto sm:max-w-none sm:flex-row">
            <a
              href="#contact"
              className="inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-[0.98rem] font-semibold text-black transition hover:bg-[#dcecff]"
            >
              Book a Consultation
            </a>
            <a
              href="#solutions"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/34 px-8 text-[0.98rem] font-semibold text-white transition hover:border-[#2d8cff] hover:text-[#9fc9ff]"
            >
              <Play className="h-4 w-4 fill-current" />
              See How It Works
            </a>
          </div>

          <div className="workflow-stage mt-14 w-full min-w-0 max-w-[350px] sm:max-w-[1070px]">
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
              <span>Core</span>
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
        <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <h2 className="max-w-[560px] text-[2.7rem] font-semibold leading-[1.02] tracking-[-0.04em] sm:text-[4.5rem]">
              Existing businesses already have the data. The problem is the drag.
            </h2>
            <p className="mt-7 max-w-[540px] text-lg leading-8 text-white/58">
              We start with the systems you already run, then design the AI architecture that removes repeat work, shortens response time, and gives leaders better visibility.
            </p>
          </div>

          <div className="signal-panel">
            <div className="panel-topline">
              <span>Manual Workload</span>
              <span>AI Operating Layer</span>
            </div>
            <div className="timeline-bars">
              {['Intake', 'Review', 'Routing', 'Reporting', 'Follow-up'].map((item, index) => (
                <div key={item} className="timeline-row">
                  <span>{item}</span>
                  <div>
                    <i style={{ width: `${92 - index * 10}%` }} />
                    <b style={{ width: `${36 + index * 8}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="panel-result">
              <Sparkles className="h-5 w-5 text-[#2d8cff]" />
              <span>Less rework, faster handoffs, cleaner decisions.</span>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="relative overflow-hidden bg-white px-5 py-24 text-black sm:px-8 lg:py-32">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#2d8cff] to-transparent" />
        <div className="mx-auto max-w-[1220px]">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <h2 className="text-[2.7rem] font-semibold leading-[1.02] tracking-[-0.04em] sm:text-[4.3rem]">
                Simple systems. Visible savings.
              </h2>
              <p className="mt-6 max-w-[470px] text-lg leading-8 text-black/58">
                The work is not about adding a shiny tool. It is about changing the operating model so teams spend less time moving information and more time acting on it.
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

      <section id="insights" className="bg-[#050505] px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto grid max-w-[1380px] gap-16 lg:grid-cols-[1.18fr_0.82fr] lg:items-center">
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

      <section id="contact" className="relative bg-[#050505] px-5 py-24 text-white sm:px-8 lg:py-32">
        <div className="mx-auto max-w-[1100px] text-center">
          <Image src={logoSrc} alt="Bishop Consulting" width={4280} height={432} className="mx-auto h-auto w-[260px] sm:w-[360px]" />
          <h2 className="mx-auto mt-12 max-w-[880px] text-[2.9rem] font-semibold leading-[1] tracking-[-0.04em] sm:text-[5.2rem]">
            Build the AI layer your business can measure.
          </h2>
          <p className="mx-auto mt-7 max-w-[690px] text-lg leading-8 text-white/58">
            Bring us an existing workflow, department, or operating bottleneck. We will map the savings opportunity and design the system around measurable output.
          </p>
          <a
            href="mailto:hello@bishopconsulting.us"
            className="mt-10 inline-flex h-14 items-center justify-center gap-3 rounded-full bg-white px-8 text-[0.98rem] font-semibold text-black transition hover:bg-[#dcecff]"
          >
            Start the Conversation
            <ArrowRight className="h-5 w-5" />
          </a>
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
            <a href="mailto:hello@bishopconsulting.us" className="text-sm font-semibold text-white transition hover:text-[#9fc9ff]">
              hello@bishopconsulting.us
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
