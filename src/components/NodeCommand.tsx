'use client';

import Link from 'next/link';
import { ArrowRight, Network, Activity, Terminal } from 'lucide-react';

const NODES = [
  {
    id: 'JP_TYO',
    location: 'TOKYO, JAPAN',
    designation: 'COMMAND_NODE // BUNKYO-KU',
    status: 'ACTIVE',
    ping: '12ms',
    role: 'Core Architecture & Swarm Logic',
    description:
      'Anchored in the academic heart of Tokyo. Led by a team of international scholars and decentralized systems engineers. Ground zero for the Tellus kernel development, Vesta mission compilation, and hardware integration.',
  },
  {
    id: 'US_SFO',
    location: 'SAN FRANCISCO, CA',
    designation: 'DEPLOY_NODE // BAY AREA',
    status: 'STAGING',
    ping: 'STANDBY',
    role: 'Commercial Scaling & Accelerator',
    description:
      'The operational bridgehead for our Q3 2026 Y Combinator accelerator batch. Ground zero for demonstrating platform stability to global investors and scaling the RaaS payload to agricultural partners.',
  },
];

export function NodeCommand() {
  return (
    <section className="relative w-full overflow-hidden border-t border-white/5 bg-transparent py-32">
      {/* Background Dimmer */}
      <div className="bg-background/90 absolute inset-0 -z-10 backdrop-blur-[2px]" />

      <div className="mx-auto max-w-5xl px-6">
        {/* Section Header */}
        <div className="mb-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="bg-primary h-px w-8"></span>
              <span className="bg-primary h-1.5 w-1.5 animate-pulse rounded-full"></span>
            </div>
            <h2 className="text-primary font-mono text-[10px] font-bold tracking-[0.3em] uppercase">
              Global_Network // Arkhon Systems
            </h2>
          </div>

          {/* Tactical Network Icon */}
          <Network className="h-6 w-6 text-white/10" />
        </div>

        {/* The Node Grid (Now 2 Columns) */}
        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Subtle background connecting line for desktop */}
          <div className="absolute top-1/2 left-0 -z-10 hidden h-px w-full -translate-y-1/2 bg-white/5 md:block" />

          {NODES.map((node) => (
            <div
              key={node.id}
              className="group relative flex flex-col justify-between border border-white/10 bg-[#0a0a0a] p-10 transition-all hover:border-white/20 hover:bg-white/[0.02]"
            >
              <div>
                {/* Node Header Row */}
                <div className="mb-8 flex items-start justify-between border-b border-white/5 pb-6">
                  <div>
                    <div className="text-muted-foreground mb-2 font-mono text-[10px] font-bold tracking-widest uppercase">
                      {node.designation}
                    </div>
                    <div className="text-foreground text-2xl font-bold tracking-tight">
                      {node.location}
                    </div>
                  </div>

                  {/* Status Indicator */}
                  <div className="flex flex-col items-end">
                    <div
                      className={`flex items-center gap-2 font-mono text-[10px] font-bold tracking-widest uppercase ${node.status === 'ACTIVE' ? 'text-primary' : 'text-muted-foreground'}`}
                    >
                      {node.status === 'ACTIVE' && (
                        <Activity className="h-3.5 w-3.5 animate-pulse" />
                      )}
                      {node.status}
                    </div>
                    <div className="text-muted-foreground/50 mt-2 font-mono text-[10px]">
                      PING: {node.ping}
                    </div>
                  </div>
                </div>

                {/* Node Role & Description */}
                <div className="text-primary mb-4 flex items-center gap-2 font-mono text-[11px] font-bold tracking-widest uppercase">
                  <Terminal className="h-3.5 w-3.5" />
                  {node.role}
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">{node.description}</p>
              </div>

              {/* Bottom Accent */}
              <div className="bg-primary absolute bottom-0 left-0 h-px w-0 transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* Access Node Manifest CTA */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/about"
            className="group text-foreground hover:border-primary hover:bg-primary/10 hover:text-primary relative flex h-14 items-center justify-center gap-3 overflow-hidden border border-white/20 bg-white/5 px-10 font-mono text-xs font-bold tracking-widest uppercase transition-all"
          >
            <span className="relative z-10 flex items-center gap-2">
              Access Node Manifest // About Us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
