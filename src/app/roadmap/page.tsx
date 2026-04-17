'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Badge } from '@/components/ui/badge';
import {
  Timer,
  Target,
  MapPin,
  Box,
  Droplets,
  Scissors,
  PackageOpen,
  Leaf,
  Activity,
} from 'lucide-react';

/**
 * MISSION DATA ARRAY
 * Fully modular quarter-by-quarter agricultural cycles.
 */
const MILESTONES = [
  {
    id: 'Q3_2026',
    date: 'Q3 2026',
    title: 'Accelerator Staging & Late Summer Harvest',
    description:
      'Strategic relocation of the core team to the Bay Area for Y Combinator. Simultaneously executing supervised field pilots for late-summer specialty harvests.',
    status: 'ACTIVE',
    icon: Timer,
    location: 'SAN FRANCISCO / YAMANASHI',
    isCurrent: true,
    protocols: [
      {
        action: 'Harvesting',
        target: 'Specialty Grapes',
        region: 'Yamanashi, JP',
        icon: PackageOpen,
      },
      { action: 'Harvesting', target: 'Late Peaches', region: 'Fukushima, JP', icon: PackageOpen },
    ],
  },
  {
    id: 'Q4_2026',
    date: 'Q4 2026',
    title: 'Winter Operations & Hardware Iteration',
    description:
      'Post-accelerator hardware revisions. Deploying the swarm for winter pruning and final seasonal harvests, stress-testing end-effectors in dropping temperatures.',
    status: 'STAGING',
    icon: Scissors,
    location: 'EHIME / AOMORI',
    isCurrent: false,
    protocols: [
      { action: 'Harvesting', target: 'Citrus / Mikan', region: 'Ehime, JP', icon: PackageOpen },
      { action: 'Winter Pruning', target: 'Apple Orchards', region: 'Aomori, JP', icon: Scissors },
    ],
  },
  {
    id: 'Q1_2027',
    date: 'Q1 2027',
    title: 'Dormant Season Prep & Chemical Application',
    description:
      'Transitioning payload to high-density canopy sprayers. Executing dormant spraying protocols and mapping vineyard topography before spring foliage growth.',
    status: 'LOCKED',
    icon: Droplets,
    location: 'NAGANO / YAMANASHI',
    isCurrent: false,
    protocols: [
      {
        action: 'Dormant Spraying',
        target: 'Peaches & Apples',
        region: 'Nagano, JP',
        icon: Droplets,
      },
      { action: 'Topo-Mapping', target: 'Vineyards', region: 'Yamanashi, JP', icon: Activity },
    ],
  },
  {
    id: 'Q2_2027',
    date: 'Q2 2027',
    title: 'Spring Canopy Management',
    description:
      'Critical yield-defining operations. Deploying advanced computer vision models to identify and execute precision blossom and fruit thinning.',
    status: 'SCHEDULED',
    icon: Leaf,
    location: 'AOMORI / FUKUSHIMA',
    isCurrent: false,
    protocols: [
      {
        action: 'Blossom Thinning',
        target: 'Apple Orchards',
        region: 'Aomori, JP',
        icon: Scissors,
      },
      { action: 'Fruit Thinning', target: 'Peaches', region: 'Fukushima, JP', icon: Scissors },
    ],
  },
  {
    id: 'Q3_2027',
    date: 'Q3 2027',
    title: 'Multi-Agent Harvest Execution',
    description:
      'Full-scale stress test of the decentralized swarm orchestration. Multiple robotic agents operating concurrently to guarantee the perishable specialty harvest.',
    status: 'SCHEDULED',
    icon: Target,
    location: 'YAMANASHI / CHIBA',
    isCurrent: false,
    protocols: [
      {
        action: 'Dense Harvest',
        target: 'Premium Grapes',
        region: 'Yamanashi, JP',
        icon: PackageOpen,
      },
      { action: 'Harvesting', target: 'Asian Pears', region: 'Chiba, JP', icon: PackageOpen },
    ],
  },
  {
    id: 'Q1_2028',
    date: 'Q1 2028',
    title: 'Commercial Delivery // V1 Fleet',
    description:
      'Formal delivery of production-grade Ceres units to initial RaaS partners. Transitioning from supervised deployment to fully autonomous commercial operations.',
    status: 'PLANNED',
    icon: Box,
    location: 'GLOBAL DEPLOYMENT',
    isCurrent: false,
    protocols: [
      { action: 'Fleet Handover', target: 'Cross-Crop Partners', region: 'Japan & USA', icon: Box },
    ],
  },
];

export default function RoadmapPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-transparent px-6 pt-32 pb-32">
      {/* Background Dimmer */}
      <div className="bg-background/90 absolute inset-0 z-0 backdrop-blur-[2px]" />

      {/* Tactical Grid Overlay */}
      <div className="absolute inset-0 z-0 [background-image:linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [background-size:40px_40px] opacity-10" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24 flex flex-col justify-between gap-8 md:flex-row md:items-end"
        >
          <div>
            <Badge
              variant="outline"
              className="border-primary/30 bg-primary/5 text-primary mb-6 px-4 py-1 font-mono text-[10px] tracking-[0.4em] uppercase"
            >
              System_Trajectory // Seasonal_Log
            </Badge>
            <h1 className="text-foreground text-6xl leading-none font-black tracking-tighter sm:text-8xl">
              THE <span className="text-primary">ROADMAP</span>
            </h1>
          </div>
          <div className="max-w-xs border-l-2 border-white/10 pb-2 pl-6">
            <p className="text-muted-foreground mb-2 font-mono text-[10px] font-bold tracking-widest uppercase">
              Operational_Pacing
            </p>
            <p className="text-muted-foreground text-sm">
              Hardware deployment strictly synchronized with biological harvest cycles across
              multiple Japanese prefectures.
            </p>
          </div>
        </motion.div>

        {/* Timeline Feed */}
        <div className="relative ml-4 md:ml-20">
          {/* Main Vertical Line with Glow */}
          <div className="from-primary absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b via-white/10 to-white/5">
            {/* Animated Progress Scanner */}
            <motion.div
              animate={{ top: ['0%', '30%', '0%'] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              className="bg-primary absolute -left-[1px] h-32 w-[3px] shadow-[0_0_15px_rgba(255,87,34,0.8)]"
            />
          </div>

          {MILESTONES.map((milestone, index) => {
            const Icon = milestone.icon;

            return (
              <motion.div
                key={milestone.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative mb-24 pl-12 md:pl-24"
              >
                {/* Node Connector */}
                <div
                  className={`border-background absolute top-4 -left-[6px] h-3 w-3 rounded-full border transition-all duration-500 group-hover:scale-150 ${milestone.isCurrent ? 'bg-primary ring-primary/20 scale-125 shadow-[0_0_15px_rgba(255,87,34,0.8)] ring-4' : 'bg-zinc-800'}`}
                />

                {/* Milestone Meta Data */}
                <div className="mb-6 flex flex-wrap items-center gap-6 font-mono text-[10px] font-bold tracking-[0.3em] uppercase">
                  <span className={milestone.isCurrent ? 'text-primary' : 'text-muted-foreground'}>
                    {milestone.date}
                  </span>
                  <span className="hidden text-white/10 md:inline">|</span>
                  <span className="text-muted-foreground/80 flex items-center gap-2">
                    <MapPin className="h-3 w-3" />
                    {milestone.location}
                  </span>
                  <div
                    className={`flex items-center gap-2 rounded border px-3 py-1 ${milestone.isCurrent ? 'border-primary/30 bg-primary/5 text-primary' : 'text-muted-foreground border-white/10 bg-white/5'}`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${milestone.isCurrent ? 'bg-primary animate-pulse' : 'bg-muted-foreground/30'}`}
                    />
                    {milestone.status}
                  </div>
                </div>

                {/* Tactical Content Card */}
                <div className="relative max-w-4xl overflow-hidden rounded-sm border border-white/10 bg-[#0a0a0a]/50 p-8 backdrop-blur-md transition-all hover:border-white/20 hover:bg-white/[0.04] md:p-10">
                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 h-4 w-4 border-t border-l border-white/20" />
                  <div className="absolute top-0 right-0 h-4 w-4 border-t border-r border-white/20" />
                  <div className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-white/20" />
                  <div className="absolute right-0 bottom-0 h-4 w-4 border-r border-b border-white/20" />

                  <div className="flex flex-col gap-8 md:flex-row md:items-start">
                    {/* Icon Block */}
                    <div className="shrink-0 rounded-sm border border-white/5 bg-white/5 p-4">
                      <Icon
                        className={`h-8 w-8 ${milestone.isCurrent ? 'text-primary' : 'text-muted-foreground/50'}`}
                      />
                    </div>

                    <div className="w-full">
                      <h3 className="text-foreground group-hover:text-primary mb-4 text-2xl font-bold tracking-tight transition-colors md:text-3xl">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground/90 mb-8 max-w-2xl text-sm leading-relaxed md:text-base">
                        {milestone.description}
                      </p>

                      {/* Sub-Tasks: Agricultural Protocols */}
                      <div className="grid grid-cols-1 gap-3 border-t border-white/5 pt-6 sm:grid-cols-2">
                        {milestone.protocols.map((protocol, i) => {
                          const ProtoIcon = protocol.icon;
                          return (
                            <div
                              key={i}
                              className="flex items-start gap-3 rounded border border-white/5 bg-black/40 p-3"
                            >
                              <ProtoIcon className="text-primary mt-0.5 h-4 w-4 opacity-80" />
                              <div>
                                <div className="text-muted-foreground mb-1 font-mono text-[10px] font-bold tracking-widest uppercase">
                                  {protocol.action} // {protocol.region}
                                </div>
                                <div className="text-foreground/90 text-sm font-medium">
                                  {protocol.target}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
