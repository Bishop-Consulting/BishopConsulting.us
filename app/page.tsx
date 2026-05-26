import Image from 'next/image';
import ConsultationModal from './consultation-modal';
import {
  ArrowRight,
  BarChart3,
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
  X,
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

const truckBoxes = [
  { label: 'Calls', delay: '0s' },
  { label: 'Invoices', delay: '1.1s' },
  { label: 'Jobs', delay: '2.2s' },
  { label: 'Reports', delay: '3.3s' }
];

const savings = [
  {
    value: '5-15',
    metric: 'hrs/week',
    label: 'time returned',
    detail: 'reclaimed from repetitive admin, scheduling, intake, reporting, and follow-up',
    icon: Clock3
  },
  {
    value: '30-60%',
    metric: 'faster',
    label: 'cycle time',
    detail: 'typical response and handoff opportunity across quotes, approvals, updates, and routing',
    icon: Zap,
    compact: true
  },
  {
    value: '$1k-$10k+',
    metric: '/mo',
    label: 'savings opportunity',
    detail: 'avoidable drag we look for in missed follow-up, duplicate entry, and slow workflow movement',
    icon: ShieldCheck,
    compact: true
  }
];

const solutionRows = [
  'Missed or delayed follow-ups after calls, quotes, or form submissions',
  'Manual data entry between email, CRM, invoices, spreadsheets, and job systems',
  'Reports, summaries, and status updates that take hours to prepare',
  'Bottlenecks where work waits on one person to move information'
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
  { label: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/bishopconsultingllc/' },
  { label: 'Facebook', icon: Facebook, href: '#contact' },
  { label: 'X', icon: X, href: 'https://x.com/bishopITconsult' },
  { label: 'LinkedIn', icon: Linkedin, href: '#contact' },
  { label: 'YouTube', icon: Youtube, href: '#contact' }
];

const microsoftLogo =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='%23fff' d='M3 3h12v12H3zM17 3h12v12H17zM3 17h12v12H3zM17 17h12v12H17z'/%3E%3C/svg%3E";
const excelLogo =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='%23fff' d='M4 5h15v22H4z'/%3E%3Cpath fill='%23050505' d='m8 11 3 5-3.4 5h3.2l1.8-3.1 1.8 3.1h3.3L14.2 16l3.2-5h-3.1l-1.6 2.8L11.1 11z'/%3E%3Cpath fill='%23fff' d='M20 7h8v4h-8zm0 6h8v4h-8zm0 6h8v4h-8z'/%3E%3C/svg%3E";
const jobberLogo =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='%23fff' d='M7 6h18v14.5c0 4-2.9 7-7 7h-2.5v-5H18c1.1 0 2-.8 2-2V11H7z'/%3E%3Cpath fill='%23fff' d='M7 21h5v5H7z'/%3E%3C/svg%3E";

const trustedBrands = [
  { name: 'Microsoft 365', logo: microsoftLogo },
  { name: 'Excel', logo: excelLogo },
  { name: 'Google Workspace', logo: 'https://cdn.simpleicons.org/google/FFFFFF' },
  { name: 'QuickBooks', logo: 'https://cdn.simpleicons.org/quickbooks/FFFFFF' },
  { name: 'HubSpot', logo: 'https://cdn.simpleicons.org/hubspot/FFFFFF' },
  { name: 'Zapier', logo: 'https://cdn.simpleicons.org/zapier/FFFFFF' },
  { name: 'Jobber', logo: jobberLogo }
];

const trustedCarouselBrands = [...trustedBrands, ...trustedBrands];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <section className="hero-grid relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(40,132,255,0.16),transparent_34%),radial-gradient(circle_at_50%_95%,rgba(39,124,255,0.16),transparent_36%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0)_0%,rgba(5,5,5,0.42)_71%,#050505_100%)]" />

        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050505]/72 backdrop-blur-xl">
          <div className="mx-auto grid h-24 max-w-[1640px] grid-cols-[1fr_auto_1fr] items-center gap-6 px-5 sm:px-10">
            <nav className="hidden items-center gap-10 text-[0.86rem] font-semibold uppercase tracking-[0.08em] text-white/84 lg:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-white">
                {item}
              </a>
            ))}
            </nav>

            <a href="#" aria-label="Bishop Consulting home" className="justify-self-start lg:justify-self-center">
              <Image src={logoSrc} alt="Bishop Consulting" width={4280} height={432} className="h-auto w-[220px] sm:w-[305px]" priority />
            </a>

            <div className="hidden justify-end gap-7 text-white/90 md:flex">
              <a
                href="https://www.instagram.com/bishopconsultingllc/"
                aria-label="Instagram"
                className="transition hover:text-[#2d8cff]"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram className="h-[18px] w-[18px]" />
              </a>
              <a href="#contact" aria-label="Facebook" className="transition hover:text-[#2d8cff]">
                <Facebook className="h-[18px] w-[18px]" />
              </a>
              <a
                href="https://x.com/bishopITconsult"
                aria-label="X"
                className="transition hover:text-[#2d8cff]"
                target="_blank"
                rel="noreferrer"
              >
                <X className="h-[18px] w-[18px]" />
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

        <div className="relative z-10 mx-0 flex min-h-screen w-full min-w-0 max-w-[430px] flex-col items-center px-5 pb-12 pt-44 text-center sm:mx-auto sm:max-w-[1560px] sm:px-8 sm:pt-52 lg:pt-56">
          <h1 className="w-full min-w-0 max-w-[360px] text-[2.35rem] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:max-w-[860px] sm:text-[4.65rem] sm:leading-[0.98] md:max-w-[980px] md:text-[5.35rem] lg:max-w-[1080px] lg:text-[6.05rem] xl:max-w-[1160px] xl:text-[6.75rem]">
            <span className="block">Make operations</span>
            <span className="block">
              more <span className="text-[#2d8cff]">efficient</span> with
            </span>
            <span className="block">AI.</span>
          </h1>
          <p className="mt-7 max-w-[350px] text-[1rem] leading-7 text-white/66 sm:max-w-[760px] sm:text-[1.25rem] sm:leading-8 lg:text-[1.34rem]">
            Bishop Consulting helps existing businesses reduce manual work, connect fragmented workflows, and create faster output with practical AI systems.
          </p>

          <div className="mt-14 flex w-full max-w-[340px] flex-col justify-center gap-4 sm:w-auto sm:max-w-none sm:flex-row sm:gap-5">
            <ConsultationModal className="inline-flex h-[70px] items-center justify-center rounded-full bg-white px-12 text-[1.16rem] font-semibold text-black shadow-[0_0_38px_rgba(255,255,255,0.16)] transition hover:bg-[#dcecff] sm:min-w-[285px]" />
            <a
              href="#solutions"
              className="inline-flex h-[70px] items-center justify-center gap-3 rounded-full border border-white/34 px-12 text-[1.16rem] font-semibold text-white transition hover:border-[#2d8cff] hover:text-[#9fc9ff] sm:min-w-[285px]"
            >
              <Play className="h-5 w-5 fill-current" />
              See How It Works
            </a>
          </div>

          <div className="trusted-strip" aria-label="Trusted tools businesses already use">
            <p>Built around 9,000+ Applications</p>
            <div className="trusted-carousel">
              <div className="trusted-brand-row">
                {trustedCarouselBrands.map((brand, index) => (
                  <span key={`${brand.name}-${index}`} className="trusted-logo-item">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={brand.logo} alt={brand.name} />
                    <span>{brand.name}</span>
                  </span>
                ))}
              </div>
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

      <section id="location" className="location-section relative overflow-hidden bg-[#050505] px-5 py-24 text-white sm:px-8 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_48%,rgba(45,140,255,0.16),transparent_34%),radial-gradient(circle_at_38%_62%,rgba(62,237,123,0.08),transparent_30%)]" />
        <div className="mx-auto grid max-w-[1380px] gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div className="relative z-10">
            <h2 className="text-[2.7rem] font-semibold leading-[1.02] tracking-[-0.04em] sm:text-[4.4rem]">
              Service Map
            </h2>
            <p className="mt-7 max-w-[540px] text-lg leading-8 text-white/58">
              We physically serve businesses near Johnson City, Tennessee and Brownwood, Texas, with remote workflow support available wherever your team operates.
            </p>
            <div className="location-proof">
              <span>Johnson City area: 60 mile radius</span>
              <span>Brownwood area: 100 mile radius</span>
              <span>Digital service: available beyond both regions</span>
            </div>
          </div>

          <div className="state-service-map" aria-label="Digital map showing Tennessee and Texas service circles for Johnson City and Brownwood">
            <svg className="state-map-svg" viewBox="0 0 920 560" aria-hidden="true">
              <defs>
                <linearGradient id="stateGlow" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#1a75ff" stopOpacity="0.28" />
                  <stop offset="100%" stopColor="#3eed7b" stopOpacity="0.12" />
                </linearGradient>
              </defs>
              <path className="map-road map-road-one" d="M58 426 C180 334 298 316 420 348 C560 386 690 326 858 190" />
              <path className="map-road map-road-two" d="M118 128 C264 210 388 174 512 112 C638 50 746 82 858 144" />
              <path className="map-road map-road-three" d="M74 292 C238 238 364 254 486 300 C620 350 744 322 884 242" />
              <g transform="translate(40 20) scale(0.86)">
                <path className="state-outline texas-outline" d="M206.5 51.5 L266.5 51.5 L266.5 136.4 L269.1 135.9 L276.5 144.3 L280.5 142.8 L291.0 143.3 L293.4 151.7 L300.1 151.2 L307.4 155.1 L313.9 154.6 L316.6 158.2 L320.8 154.1 L327.2 156.0 L329.9 160.8 L334.6 161.5 L337.1 167.5 L342.9 161.8 L350.7 165.1 L353.6 168.7 L357.5 167.0 L360.2 172.6 L368.5 162.7 L370.9 167.8 L378.1 167.8 L385.0 170.9 L387.6 174.7 L394.1 168.0 L401.2 165.8 L404.5 168.2 L412.3 163.9 L414.1 166.3 L422.6 166.6 L424.8 162.7 L433.3 167.0 L436.6 172.1 L449.3 176.9 L452.7 181.0 L459.3 178.8 L464.0 180.7 L464.0 204.0 L464.0 248.8 L471.3 258.4 L471.4 268.0 L480.5 285.8 L481.1 295.1 L477.6 306.4 L474.3 310.9 L475.4 316.9 L473.1 321.5 L475.6 329.9 L467.8 345.5 L470.7 349.8 L465.3 350.0 L448.0 356.0 L441.9 352.7 L440.8 345.5 L436.4 350.5 L433.3 349.3 L431.7 355.5 L435.1 358.2 L435.7 366.3 L429.5 375.0 L419.5 385.8 L399.6 397.3 L397.6 395.3 L391.6 398.2 L391.4 395.6 L383.2 397.5 L379.4 392.0 L377.1 393.2 L385.8 404.5 L379.4 408.1 L373.4 405.9 L372.5 413.8 L365.1 422.0 L357.5 437.1 L352.6 452.9 L348.9 451.7 L348.0 457.5 L351.8 456.0 L350.0 467.5 L347.5 468.0 L347.3 474.5 L350.4 478.1 L351.3 491.3 L354.9 495.8 L355.8 504.2 L358.7 511.7 L348.6 516.2 L344.4 510.5 L336.6 508.3 L326.2 508.8 L317.4 501.6 L310.6 500.9 L305.6 495.1 L298.7 493.2 L293.9 487.7 L290.9 474.5 L284.9 466.6 L285.6 459.9 L282.9 452.7 L283.8 446.4 L279.6 439.5 L276.2 438.8 L270.5 432.5 L268.7 424.6 L263.8 417.4 L256.7 411.4 L253.3 398.2 L250.0 394.6 L245.7 384.1 L244.2 375.4 L240.0 369.2 L233.0 363.7 L231.3 359.9 L224.8 356.5 L219.7 346.9 L205.2 344.7 L196.5 345.2 L189.0 341.9 L187.4 346.4 L179.4 347.9 L173.4 357.0 L169.8 371.6 L167.8 371.8 L163.3 380.5 L157.8 380.7 L149.7 374.0 L129.1 363.2 L125.2 357.5 L117.2 351.9 L111.5 339.5 L111.2 328.2 L105.6 319.1 L104.3 311.2 L100.7 306.1 L87.8 298.7 L80.9 288.6 L75.2 285.0 L69.3 276.4 L60.9 271.8 L55.1 260.3 L50.2 257.9 L46.4 252.9 L47.3 248.6 L164.9 248.6 L164.9 204.7 L165.6 160.3 L165.8 51.5 L167.1 51.5 L206.5 51.5 Z" />
              </g>
              <g transform="translate(-310 155) scale(1.35)">
                <path className="state-outline tennessee-outline" d="M662.4 51.7 L661.8 43.8 L669.1 45.7 L710.8 44.7 L747.5 46.4 L754.0 45.9 L778.7 47.4 L807.0 47.9 L807.5 47.1 L873.6 47.6 L872.2 57.9 L866.0 60.1 L861.8 68.2 L855.8 66.6 L842.8 75.0 L841.8 70.6 L837.3 73.5 L830.1 83.4 L821.5 85.8 L813.4 92.5 L804.3 92.7 L796.1 99.2 L793.6 106.4 L787.0 107.3 L786.1 117.6 L743.5 117.9 L685.4 117.2 L657.5 117.4 L648.6 117.4 L587.6 117.4 L590.9 116.2 L594.1 108.5 L593.6 98.0 L599.7 90.8 L600.8 84.1 L605.7 81.7 L606.8 73.5 L613.4 62.5 L613.2 51.7 L615.0 51.7 L617.2 51.7 L621.2 51.2 L662.4 51.7 Z" />
              </g>
            </svg>

            <div className="state-region texas-region">
              <span className="state-name">Texas</span>
              <span className="state-radius texas-radius" />
              <span className="state-radius state-radius-soft texas-radius-soft" />
              <div className="map-city-pin brownwood-pin">
                <span className="pin-pulse" />
                <MapPin className="h-8 w-8" />
                <strong>Brownwood</strong>
                <small>100 mile radius</small>
              </div>
            </div>

            <div className="state-region tennessee-region">
              <span className="state-name">Tennessee</span>
              <span className="state-radius tennessee-radius" />
              <span className="state-radius state-radius-soft tennessee-radius-soft" />
              <div className="map-city-pin johnson-pin">
                <span className="pin-pulse" />
                <MapPin className="h-8 w-8" />
                <strong>Johnson City</strong>
                <small>60 mile radius</small>
              </div>
            </div>

            <div className="digital-reach">
              <Sparkles className="h-5 w-5 text-[#2d8cff]" />
              <span>Digital service beyond both circles</span>
            </div>
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

            <div className="truck-automation" aria-label="Animation showing repetitive work boxes moving into an automated service truck">
              <div className="warehouse-grid" aria-hidden="true" />
              <div className="box-lane">
                {truckBoxes.map((box) => (
                  <span key={box.label} className="work-box" style={{ animationDelay: box.delay }} />
                ))}
              </div>

              <div className="truck-scene">
                <div className="truck-bed">
                  <div className="loaded-box box-a" />
                  <div className="loaded-box box-b" />
                  <div className="loaded-box box-c" />
                  <div className="loaded-box box-d" />
                </div>
                <div className="truck-cab">
                  <span className="truck-window" />
                  <span className="truck-grille" />
                </div>
                <span className="truck-wheel wheel-one" />
                <span className="truck-wheel wheel-two" />
              </div>
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
        <div className="insights-layout mx-auto">
          <div className="savings-grid">
            {savings.map(({ value, metric, label, detail, icon: Icon, compact }) => (
              <div key={label} className={`saving-card${compact ? ' saving-card-compact' : ''}`}>
                <Icon className="h-6 w-6 text-[#2d8cff]" />
                <strong>
                  {value}
                  <em>{metric}</em>
                </strong>
                <span>{label}</span>
                <p>{detail}</p>
              </div>
            ))}
          </div>

          <div className="insights-copy">
            <h2 className="text-[2.7rem] font-semibold leading-[1.02] tracking-[-0.04em] sm:text-[4.2rem]">
              Efficiency should be visible in the numbers.
            </h2>
            <p className="mt-6 max-w-[620px] text-lg leading-8 text-white/58">
              We map your current workflow first, then estimate the time, cost, and response-time savings before building.
            </p>
            <div className="mt-8 space-y-4">
              {solutionRows.map((row) => (
                <div key={row} className="solution-row">
                  <CheckCircle2 className="h-5 w-5 text-[#2d8cff]" />
                  <span>{row}</span>
                </div>
              ))}
            </div>
            <ConsultationModal
              label="Book a Workflow Assessment"
              showArrow
              className="mt-8 inline-flex h-14 items-center justify-center gap-3 rounded-full bg-white px-7 text-[0.98rem] font-semibold text-black transition hover:bg-[#dcecff]"
            />
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
              {socialLinks.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/14 text-white/72 transition hover:border-[#2d8cff] hover:text-[#2d8cff]"
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
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
