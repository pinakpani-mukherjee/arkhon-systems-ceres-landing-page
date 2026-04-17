'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Network, Activity, Terminal, Globe, MapPin, ShieldAlert } from 'lucide-react';

// --- DATA: NODE MANIFEST ---
const NODES = [
  {
    id: 'JP_TYO',
    location: 'TOKYO, JAPAN',
    designation: 'COMMAND_NODE // BUNKYO-KU',
    status: 'ACTIVE',
    ping: '12ms',
    icon: Globe,
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
    icon: MapPin,
    role: 'Commercial Scaling & Accelerator',
    description:
      'The operational bridgehead for our Q3 2026 Y Combinator accelerator batch. Ground zero for demonstrating platform stability to global investors and scaling the RaaS payload to agricultural partners.',
  },
];

// --- DATA: FOUNDING UNIT ---
const founders = [
  {
    id: 'CEO_NODE',
    name: 'Pinakpani Mukherjee',
    title: 'Co-Founder & CEO',
    image: '/pinak.jpg',
    roleBadge: 'Systems Architect // Tokyo',
    bio: 'A seasoned Sr. Engineer based in Tokyo with a relentless drive for zero-to-one innovation. Pinak holds a deep passion for architecting novel, scalable solutions that challenge the status quo. At Arkhon, he translates theoretical ambition into deployed reality, leading the charge to build the foundational infrastructure for the next generation of decentralized physical intelligence.',
    accent: 'text-primary',
    border: 'border-primary/50',
    glow: 'shadow-primary/20',
  },
  {
    id: 'CTO_NODE',
    name: 'Romulo Silva Chaves',
    title: 'Co-Founder & CTO',
    image: '/romulo.jpg',
    roleBadge: 'PhD Candidate, UTokyo // Computer Vision',
    bio: "Operating at the bleeding edge of robotics research at the University of Tokyo, Romulo brings a meticulous, data-driven approach to building systems that perceive and act with precision. With extensive work in agricultural robotics, he is dedicated to addressing Japan's aging population crisis through autonomous systems that augment human capability.",
    accent: 'text-secondary', // Assumes you have a secondary color defined in Tailwind
    border: 'border-secondary/50',
    glow: 'shadow-secondary/20',
  },
];

// --- COMPONENTS ---
function Portrait({ image, border, glow }: { image: string; border: string; glow: string }) {
  return (
    <div className="bg-background group relative h-[450px] w-full overflow-hidden rounded-sm">
      {/* Tactical Frame Overlay */}
      <div
        className={`absolute inset-4 z-30 border-2 ${border} pointer-events-none transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(0,0,0,0.5)]`}
      >
        {/* Corner Accents */}
        <div className={`absolute -top-1 -left-1 h-4 w-4 border-t-4 border-l-4 ${border}`} />
        <div className={`absolute -top-1 -right-1 h-4 w-4 border-t-4 border-r-4 ${border}`} />
        <div className={`absolute -bottom-1 -left-1 h-4 w-4 border-b-4 border-l-4 ${border}`} />
        <div className={`absolute -right-1 -bottom-1 h-4 w-4 border-r-4 border-b-4 ${border}`} />
      </div>

      {/* Portrait Image */}
      <div className="absolute inset-0 z-10 h-full w-full">
        <Image
          src={image}
          alt="Founder Portrait"
          fill
          className="scale-105 object-cover grayscale transition-all duration-700 group-hover:scale-100 group-hover:grayscale-0"
          priority
        />
        {/* Subtle Scanline Effect */}
        <div className="absolute inset-0 z-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,118,0.06))] bg-[length:100%_2px,3px_100%] opacity-10" />
      </div>
    </div>
  );
}

// --- MAIN PAGE ---
export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-transparent px-6 pt-32 pb-20">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 z-0 [background-image:linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ========================================= */}
        {/* SECTION 1: THE MANIFESTO & NODE NETWORK   */}
        {/* ========================================= */}
        <div className="mb-32 grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          {/* Left Column: The Manifesto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="outline"
              className="border-primary/30 bg-primary/5 text-primary mb-6 px-4 py-1 font-mono text-[10px] tracking-[0.4em] uppercase"
            >
              Manifesto // Core Directive
            </Badge>
            <h1 className="text-foreground mb-8 text-5xl leading-[1.1] font-extrabold tracking-tighter sm:text-7xl">
              Engineering the <br />
              <span className="text-primary">Deterministic</span> Harvest.
            </h1>

            <div className="text-muted-foreground space-y-6 text-lg leading-relaxed">
              <p>
                Arkhon Systems was not founded to build novelties. We are operating at ground zero
                of a global structural collapse. In Japan, the average age of a farmer exceeds 68
                years. The workforce is not just shrinking; it is actively disappearing.
              </p>
              <p>
                Human labor has become agriculture's single greatest point of failure. Fragile visa
                systems, skyrocketing wages, and unpredictable seasonal availability mean that
                specialty crops are left to rot on the vine while global demand accelerates.
              </p>
              <p>
                <strong className="text-foreground font-bold">We are the failsafe.</strong> By
                replacing unpredictable human hands with a decentralized, hardware-agnostic swarm,
                we guarantee the harvest. Zero CapEx friction. Sub-millisecond execution. Infinite
                scalability.
              </p>
            </div>

            <div className="border-primary/50 mt-12 flex items-center gap-4 border-l-2 pl-4">
              <ShieldAlert className="text-primary h-6 w-6" />
              <p className="text-foreground font-mono text-xs font-bold tracking-widest uppercase">
                Failure is an engineering problem. <br />
                <span className="text-muted-foreground">We are deploying the solution.</span>
              </p>
            </div>
          </motion.div>

          {/* Right Column: Node Manifest */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="from-primary/20 to-primary/5 relative rounded-sm bg-gradient-to-br via-transparent p-1"
          >
            <div className="rounded-sm border border-white/10 bg-[#050505] p-8 shadow-2xl md:p-12">
              <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <h3 className="text-foreground font-mono text-[14px] font-bold tracking-widest uppercase">
                    Node_Manifest
                  </h3>
                  <p className="text-muted-foreground mt-1 font-mono text-[10px] tracking-widest uppercase">
                    Global Network Status
                  </p>
                </div>
                <Network className="text-primary h-5 w-5 opacity-80" />
              </div>

              <div className="space-y-6">
                {NODES.map((node) => {
                  const Icon = node.icon;
                  return (
                    <div
                      key={node.id}
                      className="group relative border border-white/5 bg-[#0a0a0a] p-6 transition-colors hover:border-white/20 hover:bg-white/[0.02]"
                    >
                      {/* Node Header */}
                      <div className="mb-4 flex items-start justify-between border-b border-white/5 pb-4">
                        <div className="flex items-start gap-4">
                          <Icon className="text-primary mt-1 h-5 w-5" />
                          <div>
                            <div className="text-muted-foreground mb-1 font-mono text-[10px] font-bold tracking-widest uppercase">
                              {node.designation}
                            </div>
                            <div className="text-foreground font-bold tracking-tight">
                              {node.location}
                            </div>
                          </div>
                        </div>

                        {/* Status */}
                        <div className="flex flex-col items-end">
                          <div
                            className={`flex items-center gap-1.5 font-mono text-[9px] font-bold tracking-widest uppercase ${node.status === 'ACTIVE' ? 'text-primary' : 'text-muted-foreground'}`}
                          >
                            {node.status === 'ACTIVE' && (
                              <Activity className="h-3 w-3 animate-pulse" />
                            )}
                            {node.status}
                          </div>
                          <div className="text-muted-foreground/50 mt-1 font-mono text-[9px]">
                            PING: {node.ping}
                          </div>
                        </div>
                      </div>

                      {/* Node Details */}
                      <div className="text-primary mb-3 flex items-center gap-2 font-mono text-[10px] font-bold tracking-widest uppercase">
                        <Terminal className="h-3.5 w-3.5" />
                        {node.role}
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {node.description}
                      </p>

                      {/* Accent Line */}
                      <div className="bg-primary absolute bottom-0 left-0 h-px w-0 transition-all duration-500 group-hover:w-full" />
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        <Separator className="mx-auto my-20 max-w-7xl bg-white/10" />

        {/* ========================================= */}
        {/* SECTION 2: THE FOUNDING UNIT              */}
        {/* ========================================= */}
        <section className="relative z-10 mx-auto max-w-7xl pt-10">
          <div className="mb-16 flex flex-col items-center text-center">
            <Badge
              variant="outline"
              className="border-primary/30 bg-primary/5 text-primary mb-6 px-4 py-1 font-mono text-[10px] tracking-[0.4em] uppercase"
            >
              Mission_Log // The Architects
            </Badge>
            <h2 className="text-foreground text-4xl font-extrabold tracking-tighter sm:text-6xl">
              The <span className="text-primary">Founding</span> Unit
            </h2>
            <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg font-medium">
              Arkhon Systems is a Tokyo-based collective engineering the decentralized nervous
              system for autonomous machines.
            </p>
          </div>

          <div className="flex flex-col gap-32">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-12 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Portrait Column */}
                <div className={`lg:col-span-5 ${index % 2 !== 0 ? 'lg:order-last' : ''}`}>
                  <Portrait image={founder.image} border={founder.border} glow={founder.glow} />
                </div>

                {/* Bio Column */}
                <div className="flex flex-col lg:col-span-7">
                  <div className="mb-4 flex items-center space-x-3">
                    <span
                      className={`h-2 w-2 animate-pulse rounded-full bg-current ${founder.accent}`}
                    />
                    <span
                      className={`font-mono text-xs font-bold tracking-widest uppercase ${founder.accent}`}
                    >
                      {founder.id}
                    </span>
                  </div>
                  <h3 className="text-foreground mb-1 text-4xl font-bold tracking-tight">
                    {founder.name}
                  </h3>
                  <p className={`text-xl font-bold ${founder.accent} mb-6`}>{founder.title}</p>
                  <Badge className="text-muted-foreground mb-8 w-fit rounded-none border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase">
                    {founder.roleBadge}
                  </Badge>
                  <div className="relative border-l-2 border-white/5 pl-8">
                    <p className="text-muted-foreground text-lg leading-relaxed italic">
                      "{founder.bio}"
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
