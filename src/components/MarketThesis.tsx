'use client';

import { AlertTriangle, TrendingUp, Globe, ExternalLink, FileWarning } from 'lucide-react';

// Brutalist Data Grid with verifiable institutional sources
const METRICS = [
  {
    id: '01',
    icon: Globe,
    stat: '68.4',
    label: 'Avg. Age (Japan)',
    description:
      'Over 60% of the Japanese farming workforce is 65+. Total demographic collapse is driving mass land abandonment.',
    sourceLabel: 'MAFF Japan',
    sourceUrl: 'https://www.maff.go.jp/e/data/stat/',
  },
  {
    id: '02',
    icon: FileWarning,
    stat: '370k+',
    label: 'H-2A Visa Reliance',
    description:
      'US agriculture relies entirely on fragile seasonal visas. Bureaucratic bottlenecks create instant operational failure.',
    sourceLabel: 'USDA ERS',
    sourceUrl: 'https://www.ers.usda.gov/topics/farm-economy/farm-labor/',
  },
  {
    id: '03',
    icon: TrendingUp,
    stat: '+22%',
    label: 'Labor Cost Inflation',
    description:
      'Skyrocketing minimum wages and housing requirements for manual harvest roles are actively destroying farm margins.',
    sourceLabel: 'American Farm Bureau',
    sourceUrl: 'https://www.fb.org/market-intel/farm-labor-shortages-and-rising-wages',
  },
  {
    id: '04',
    icon: AlertTriangle,
    stat: '$3.1B',
    label: 'Annual Crop Waste',
    description:
      'Estimated value of specialty crops left to rot globally on the vine annually, solely due to manual labor unavailability.',
    sourceLabel: 'AgFunder Research',
    sourceUrl: 'https://agfunder.com/research/',
  },
];

export function MarketThesis() {
  return (
    <section className="relative w-full overflow-hidden border-t border-white/5 bg-transparent py-32">
      {/* Subtle Background Glow */}
      <div className="bg-primary/5 pointer-events-none absolute top-0 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full opacity-20 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="bg-primary h-px w-8"></span>
            <span className="bg-primary h-1.5 w-1.5 animate-pulse rounded-full"></span>
          </div>
          <h2 className="text-primary font-mono text-[10px] font-bold tracking-[0.3em] uppercase">
            Market_Thesis // The Global Labor Collapse
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-x-16 gap-y-16 lg:grid-cols-12">
          {/* The Manifesto Narrative - Now Sticky */}
          <div className="lg:sticky lg:top-32 lg:col-span-5 lg:h-fit">
            <h3 className="text-foreground mb-8 text-4xl leading-[1.1] font-extrabold tracking-tighter sm:text-5xl">
              Human labor is agriculture's single greatest point of failure.
            </h3>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed font-medium">
              From the demographic cliff of Japan to the fragile H-2A visa dependency in the United
              States, manual workforces are shrinking, expensive, and entirely unpredictable.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed font-medium">
              <strong className="text-foreground font-bold">Ceres</strong> replaces unpredictable
              human hands with deterministic, untiring fleet orchestration. We don't just pick
              crops; we guarantee the harvest.
            </p>
          </div>

          {/* The Brutalist Data Grid - Contains ONLY the 4 Metrics */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            {METRICS.map((metric) => {
              const Icon = metric.icon;
              return (
                <a
                  key={metric.id}
                  href={metric.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col justify-between border border-white/10 bg-white/[0.02] p-8 transition-all hover:border-white/20 hover:bg-white/[0.04]"
                >
                  <div className="text-muted-foreground/30 group-hover:text-primary/80 absolute top-4 right-4 flex items-center gap-2 font-mono text-[10px] font-bold tracking-widest transition-colors">
                    // {metric.id}
                    <ExternalLink className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>

                  <div>
                    <Icon className="text-primary mb-6 h-6 w-6 opacity-80" />
                    <div className="text-foreground mb-2 text-5xl font-black tracking-tighter">
                      {metric.stat}
                    </div>
                    <div className="text-foreground/80 mb-4 font-mono text-xs font-bold tracking-[0.2em] uppercase">
                      {metric.label}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    {metric.description}
                  </p>

                  <div className="text-muted-foreground/50 group-hover:text-primary/70 mt-auto font-mono text-[9px] tracking-widest uppercase transition-colors">
                    [ Source: {metric.sourceLabel} ]
                  </div>

                  <div className="bg-primary absolute bottom-0 left-0 h-px w-0 transition-all duration-500 group-hover:w-full" />
                </a>
              );
            })}
          </div>

          {/* The Impact Anchor Card - Now Spans Full 12 Columns */}
          <div className="border-primary/20 bg-primary/5 flex flex-col justify-center border p-10 md:p-12 lg:col-span-12">
            <div className="text-primary mb-4 font-mono text-[10px] font-bold tracking-[0.2em] uppercase">
              System_Impact
            </div>
            <div className="text-foreground max-w-4xl text-2xl font-bold tracking-tight md:text-3xl">
              Hardware-agnostic fleet orchestration eliminates reliance on aging populations and
              fragile immigration policies, permanently stabilizing op-ex.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
