'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  Cpu,
  Settings2,
  Thermometer,
  BatteryCharging,
  Layers,
  ArrowRight,
  Eye,
  Wrench,
  ShieldCheck,
  Lock,
  PowerOff,
  Radio,
} from 'lucide-react';
import Link from 'next/link';

// --- SECTION 1: THE CURRENT PROTOTYPE ---
const ALPHA_SPECS = [
  {
    id: 'SYS_01',
    icon: Cpu,
    title: 'Edge-Compute Core',
    value: 'Tellus Kernel V0.1',
    description:
      'Currently stress-testing our Rust and C++23 orchestration kernel on local compute nodes. Demonstrating sub-millisecond safety lockouts independent of cloud connectivity.',
  },
  {
    id: 'SYS_02',
    icon: Eye,
    title: 'Perception Rig',
    value: 'Stereoscopic Vision',
    description:
      'Prototyping depth-estimation models specifically trained on dense canopy environments. Currently validating identification rates for the upcoming specialty grape harvest.',
  },
  {
    id: 'SYS_03',
    icon: Wrench,
    title: 'Actuation Control',
    value: 'Custom End-Effectors',
    description:
      'Iterating on delicate manipulation hardware. Developing the mechanical baseline to pick, prune, and handle fragile fruit without bruising or vine damage.',
  },
];

// --- SECTION 2: THE DESIGN TARGETS ---
const PRODUCTION_TARGETS = [
  {
    metric: 'IP67 Target',
    label: 'Ingress Protection',
    desc: 'Engineering the chassis for total seal against mud, dust, and chemical spray.',
  },
  {
    metric: '-10° to 45°C',
    label: 'Thermal Tolerance',
    desc: 'Design requirement for operating from winter pruning to peak summer harvest.',
  },
  {
    metric: '< 15 Min',
    label: 'Modular Swap Time',
    desc: 'Target time for a single operator to switch physical payload interfaces in the field.',
  },
  {
    metric: '100%',
    label: 'Off-Grid Capable',
    desc: 'Maintaining full execution logic without active 5G/LTE.',
  },
];

// --- SECTION 3: SECURITY PROTOCOLS ---
const SECURITY_PROTOCOLS = [
  {
    icon: PowerOff,
    title: 'Digital & Physical Kill Switches',
    description:
      'Redundant, air-gapped hardware interrupts. Any anomaly in the sub-millisecond control loop triggers an instant, un-overrideable mechanical brake and actuator lock.',
  },
  {
    icon: Radio,
    title: 'Encrypted P2P Mesh',
    description:
      'Swarm agents communicate via a localized, high-performance backplane (Zenoh). Data does not route through vulnerable public internet channels while executing field logic.',
  },
  {
    icon: Lock,
    title: 'Zero-Trust Perimeter',
    description:
      'Even with physical access to the machine, the Tellus kernel rejects unauthorized peripheral connections. Fleet data remains cryptographically fenced.',
  },
];

export default function CeresPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-transparent px-6 pt-32 pb-32">
      {/* Background Dimmer for global NeuralField */}
      <div className="bg-background/90 absolute inset-0 z-0 backdrop-blur-[2px]" />

      {/* Tactical Grid Overlay */}
      <div className="absolute inset-0 z-0 [background-image:linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [background-size:40px_40px] opacity-10" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ========================================= */}
        {/* HERO SECTION                              */}
        {/* ========================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-32 max-w-4xl"
        >
          <Badge
            variant="outline"
            className="border-primary/30 bg-primary/5 text-primary mb-6 px-4 py-1 font-mono text-[10px] tracking-[0.4em] uppercase"
          >
            Hardware_Manifest // Ceres Architecture
          </Badge>
          <h1 className="text-foreground text-5xl leading-[1.1] font-black tracking-tighter sm:text-7xl">
            Infinite Bodies. <br />
            <span className="text-primary">One Intelligence.</span>
          </h1>
          <p className="text-muted-foreground mt-8 text-xl leading-relaxed">
            We are not building a single-use tractor. We are engineering the physical intelligence
            layer capable of piloting any modular agricultural hardware. Currently stress-testing
            the Alpha payload for the Q3 2026 deployment.
          </p>
        </motion.div>

        {/* ========================================= */}
        {/* SECTION 1: ALPHA RIG (THE HONEST PROTOTYPE)*/}
        {/* ========================================= */}
        <div className="mb-32">
          <div className="mb-12 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="bg-primary h-px w-8"></span>
              <span className="bg-primary h-1.5 w-1.5 animate-pulse rounded-full"></span>
            </div>
            <h2 className="text-primary font-mono text-[10px] font-bold tracking-[0.3em] uppercase">
              Current_State // Alpha Prototype
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {ALPHA_SPECS.map((spec, index) => {
              const Icon = spec.icon;
              return (
                <motion.div
                  key={spec.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-sm border border-white/10 bg-[#0a0a0a] p-8 transition-colors hover:border-white/20 hover:bg-white/[0.02]"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded border border-white/5 bg-white/5">
                    <Icon className="text-primary h-6 w-6" />
                  </div>

                  <div className="text-muted-foreground mb-2 font-mono text-[10px] font-bold tracking-widest uppercase">
                    {spec.id} // {spec.title}
                  </div>
                  <h3 className="text-foreground mb-4 text-xl font-bold tracking-tight">
                    {spec.value}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {spec.description}
                  </p>

                  <div className="bg-primary absolute bottom-0 left-0 h-px w-0 transition-all duration-500 group-hover:w-full" />
                </motion.div>
              );
            })}
          </div>
        </div>

        <Separator className="mx-auto my-24 max-w-7xl bg-white/10" />

        {/* ========================================= */}
        {/* SECTION 2: PRODUCTION TARGETS (THE VISION)*/}
        {/* ========================================= */}
        <div className="mb-32 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 flex items-center gap-2">
              <span className="bg-muted-foreground/50 h-px w-8"></span>
              <span className="text-muted-foreground/80 font-mono text-[10px] font-bold tracking-[0.3em] uppercase">
                Design_Intent // Commercial V1
              </span>
            </div>
            <h2 className="text-foreground mb-6 text-4xl font-extrabold tracking-tighter sm:text-5xl">
              Engineering the <span className="text-primary">Universal Interface</span>.
            </h2>
            <div className="text-muted-foreground space-y-6 text-lg leading-relaxed">
              <p>
                Our commercial thesis relies on maximum hardware utilization. A dedicated harvesting
                robot sits idle 10 months a year. Ceres is being designed as a standardized
                mechanical and data linkage.
              </p>
              <p>
                By engineering a universal edge-compute node, our V1 commercial fleet will allow
                operators to swap from stereoscopic harvesters to high-density sprayers directly in
                the field, maximizing asset uptime and ROI.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {PRODUCTION_TARGETS.map((item, i) => (
              <div
                key={i}
                className="flex flex-col justify-center rounded-sm border border-white/5 bg-black/40 p-6 backdrop-blur-md"
              >
                <div className="text-foreground mb-2 text-2xl font-black">{item.metric}</div>
                <div className="text-primary mb-2 font-mono text-[10px] font-bold tracking-widest uppercase">
                  {item.label}
                </div>
                <p className="text-muted-foreground text-xs">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <Separator className="mx-auto my-24 max-w-7xl bg-white/10" />

        {/* ========================================= */}
        {/* SECTION 3: KINETIC & CYBER SECURITY       */}
        {/* ========================================= */}
        <div className="mb-32 grid grid-cols-1 gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-last lg:order-first"
          >
            <div className="space-y-4">
              {SECURITY_PROTOCOLS.map((protocol, i) => {
                const Icon = protocol.icon;
                return (
                  <div
                    key={i}
                    className="group hover:border-primary/30 flex items-start gap-4 rounded-sm border border-white/5 bg-[#0a0a0a] p-6 transition-colors"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded border border-white/10 bg-white/5">
                      <Icon className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-foreground mb-1 text-base font-bold">{protocol.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {protocol.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="mb-6 flex items-center gap-2">
              <span className="h-px w-8 bg-red-500/50"></span>
              <span className="font-mono text-[10px] font-bold tracking-[0.3em] text-red-500/80 uppercase">
                Threat_Mitigation // Zero-Trust
              </span>
            </div>
            <h2 className="text-foreground mb-6 text-4xl font-extrabold tracking-tighter sm:text-5xl">
              Kinetic Risk. <br /> <span className="text-primary">Contained.</span>
            </h2>
            <div className="text-muted-foreground space-y-6 text-lg leading-relaxed">
              <p>
                We treat autonomous hardware as a potential kinetic threat. A compromised or
                malfunctioning heavy machine is a catastrophic liability.
              </p>
              <p>
                The Ceres architecture utilizes strict zero-trust principles. By air-gapping the
                primary execution layer from the cloud and implementing redundant physical kill
                switches, we guarantee that the swarm cannot be hijacked remotely or run amok
                locally.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ========================================= */}
        {/* SECTION 4: DEPLOYMENT ECONOMICS (RaaS)    */}
        {/* ========================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-primary/20 bg-primary/5 relative overflow-hidden rounded-sm border p-12 text-center md:p-20"
        >
          <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(255,87,34,0.15)_0%,transparent_70%)]" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <Layers className="text-primary mx-auto mb-6 h-12 w-12 opacity-80" />
            <h2 className="text-foreground mb-6 text-3xl font-extrabold tracking-tighter sm:text-5xl">
              Zero CapEx. Deterministic Yield.
            </h2>
            <p className="text-muted-foreground mb-10 text-lg">
              Hardware modularity enables our Robotics-as-a-Service (RaaS) model. Farmers do not buy
              depreciating metal; they pay for guaranteed harvest execution. We align our
              operational incentives directly with the biology of the crop.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group border-primary bg-primary text-primary-foreground hover:bg-primary/90 flex h-14 items-center justify-center gap-3 border px-8 font-mono text-xs font-bold tracking-widest uppercase transition-all"
              >
                Initiate Pilot Uplink
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/architecture"
                className="group text-foreground flex h-14 items-center justify-center gap-3 border border-white/20 bg-transparent px-8 font-mono text-xs font-bold tracking-widest uppercase transition-all hover:border-white/40 hover:bg-white/5"
              >
                View Software Architecture
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
