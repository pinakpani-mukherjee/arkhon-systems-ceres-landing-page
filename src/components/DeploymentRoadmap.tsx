'use client';

import Link from 'next/link';
import { ArrowRight, MapPin, Target, PackageOpen } from 'lucide-react';

const MILESTONES = [
  {
    phase: '01',
    date: 'Q3 2026',
    location: 'SAN FRANCISCO, CA',
    title: 'Accelerator Staging // Y Combinator',
    description:
      'Relocating the core engineering node to the Bay Area. Demonstrating hardware-agnostic platform stability, sub-millisecond safety protocols, and Vesta mission compilation.',
    status: 'STAGING',
    statusPulse: true,
    icon: MapPin,
  },
  {
    phase: '02',
    date: 'SPRING 2027',
    location: 'YAMANASHI, JAPAN',
    title: 'Tactical Pilot // Field Testing',
    description:
      'Deploying the core stereoscopic vision system and modular hardware for dense canopy testing in Yamanashi. Stress-testing the Tellus edge-compute kernel at the mud boundary.',
    status: 'LOCKED',
    statusPulse: false,
    icon: Target,
  },
  {
    phase: '03',
    date: 'Q1 2028',
    location: 'COMMERCIAL DEPLOYMENT',
    title: 'Fleet Scaling // Prototype Delivery',
    description:
      'Delivering the first production-grade Ceres units to initial RaaS customers. Transitioning from supervised edge deployment to autonomous, multi-agent fleet orchestration.',
    status: 'SCHEDULED',
    statusPulse: false,
    icon: PackageOpen,
  },
];

export function DeploymentRoadmap() {
  return (
    <section className="relative w-full overflow-hidden border-t border-white/5 bg-transparent py-32">
      {/* Background Dimmer for NeuralField */}
      <div className="bg-background/90 absolute inset-0 -z-10 backdrop-blur-[2px]" />

      <div className="mx-auto max-w-4xl px-6">
        {/* Section Header */}
        <div className="mb-16 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="bg-primary h-px w-8"></span>
            <span className="bg-primary h-1.5 w-1.5 animate-pulse rounded-full"></span>
          </div>
          <h2 className="text-primary font-mono text-[10px] font-bold tracking-[0.3em] uppercase">
            Trajectory // Deployment Roadmap
          </h2>
        </div>

        {/* The Vertical Terminal Feed */}
        <div className="relative ml-3 space-y-12 border-l border-white/10 pb-12 md:ml-6">
          {MILESTONES.map((milestone, index) => {
            const Icon = milestone.icon;
            const isFirst = index === 0;

            return (
              <div key={milestone.phase} className="group relative pl-10 md:pl-16">
                {/* Node Indicator on the Line */}
                <div
                  className={`border-background bg-primary absolute top-1.5 -left-[5px] h-2.5 w-2.5 rounded-full border transition-all duration-500 group-hover:scale-150 ${isFirst ? 'shadow-[0_0_10px_rgba(255,87,34,0.8)]' : 'bg-white/20'}`}
                />

                {/* Tactical Meta Row */}
                <div className="mb-3 flex flex-col gap-2 font-mono text-[10px] font-bold tracking-widest uppercase sm:flex-row sm:items-center sm:gap-6">
                  <span className={isFirst ? 'text-primary' : 'text-muted-foreground'}>
                    PHASE_{milestone.phase}
                  </span>
                  <span className="hidden text-white/20 sm:inline">|</span>
                  <span className="text-foreground/80">{milestone.date}</span>
                  <span className="hidden text-white/20 sm:inline">|</span>
                  <span className="text-muted-foreground flex items-center gap-1.5">
                    <Icon className="h-3 w-3" />
                    {milestone.location}
                  </span>
                </div>

                {/* Main Content Box */}
                <div className="rounded-sm border border-white/10 bg-[#0a0a0a] p-6 transition-colors group-hover:border-white/20 group-hover:bg-white/[0.02]">
                  <div className="mb-4 flex items-start justify-between">
                    <h3 className="text-foreground text-xl font-bold tracking-tight md:text-2xl">
                      {milestone.title}
                    </h3>

                    {/* Status Badge */}
                    <div
                      className={`inline-flex items-center rounded border px-2 py-1 font-mono text-[9px] font-bold tracking-widest uppercase ${isFirst ? 'border-primary/30 bg-primary/10 text-primary' : 'text-muted-foreground border-white/10 bg-white/5'}`}
                    >
                      {milestone.statusPulse && (
                        <span className="bg-primary mr-1.5 h-1.5 w-1.5 animate-pulse rounded-full" />
                      )}
                      STATUS: {milestone.status}
                    </div>
                  </div>

                  <p className="text-muted-foreground max-w-2xl text-sm leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Massive CTA routing to the full roadmap page */}
        <div className="mt-8 flex justify-center md:justify-start md:pl-16">
          <Link
            href="/roadmap"
            className="group border-primary bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground relative flex h-14 items-center justify-center gap-3 overflow-hidden border px-8 font-mono text-xs font-bold tracking-widest uppercase transition-all"
          >
            <span className="relative z-10 flex items-center gap-2">
              Access Full Mission Log
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
