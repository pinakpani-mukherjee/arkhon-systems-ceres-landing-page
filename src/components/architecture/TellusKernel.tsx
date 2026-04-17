'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Badge } from '@/components/ui/badge';
import {
  HardDrive,
  Cpu,
  ShieldAlert,
  Activity,
  Terminal,
  Layers,
  Hexagon,
  Fingerprint,
  RefreshCcw,
  Network,
  Database,
} from 'lucide-react';

const TELLUS_FEATURES = [
  {
    icon: ShieldAlert,
    title: 'Isolated Blast Radius',
    description:
      'Monoliths fail in the mud. Tellus segregates volatile C++ hardware drivers from the immortal Rust orchestrator. If a camera driver segfaults, the OS kills it, but the robot survives and the Rust core instantly resurrects the process.',
  },
  {
    icon: Network,
    title: 'Zenoh Zero-Copy IPC',
    description:
      'Tellus bypasses standard ROS 2 network overhead. Massive data payloads (like 10MB point clouds) are written directly to shared RAM. Isolated processes pass microscopic pointers via Zenoh, achieving sub-millisecond local routing.',
  },
  {
    icon: Hexagon,
    title: 'The Semantic Bottleneck',
    description:
      "Raw sensor data never crosses the IPC boundary. C++ edge nodes violently filter 4K video through TensorRT, extracting only semantic intent. They transmit a microscopic 64-byte FlatBuffer (e.g., 'Target at XYZ') to the Rust brain.",
  },
  {
    icon: Layers,
    title: 'Hardware Agnosticism',
    description:
      "The Rust orchestrator calculates intent, not physics. It publishes a generic command ('Navigate to Coordinate'). Interchangeable C++ nodes translate that intent into Ackerman steering for a tractor or quadcopter flight dynamics.",
  },
];

export default function TellusKernel() {
  // Simulate the Rust Supervisor catching a C++ crash
  const [visionStatus, setVisionStatus] = useState<'ACTIVE' | 'SEGFAULT' | 'REBOOTING'>('ACTIVE');

  useEffect(() => {
    const crashLoop = setInterval(() => {
      setVisionStatus('SEGFAULT');
      setTimeout(() => setVisionStatus('REBOOTING'), 800);
      setTimeout(() => setVisionStatus('ACTIVE'), 2500);
    }, 8000); // Crash every 8 seconds for demonstration
    return () => clearInterval(crashLoop);
  }, []);

  return (
    <section id="tellus" className="relative z-10 w-full bg-transparent py-32 pb-40">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="bg-primary h-px w-8"></span>
            <span className="bg-primary h-1.5 w-1.5 animate-pulse rounded-full"></span>
          </div>
          <h2 className="text-primary font-mono text-[10px] font-bold tracking-[0.3em] uppercase">
            Layer_04 // The Edge Kernel
          </h2>
        </div>

        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left Column: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-last lg:order-first"
          >
            <h3 className="text-foreground mb-6 text-4xl font-extrabold tracking-tighter sm:text-5xl">
              Tellus <br />
              <span className="text-primary">Autonomous Edge OS.</span>
            </h3>
            <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
              A 10-ton machine running a monolithic workspace is a kinetic liability. Tellus is
              engineered as a strictly segregated, multi-process operating system that
              mathematically isolates failure, ensuring the robot survives the physical realities of
              the farm.
            </p>

            <div className="space-y-6">
              {TELLUS_FEATURES.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={i}
                    className="hover:border-primary/30 flex items-start gap-4 rounded-sm border border-white/5 bg-[#0a0a0a]/50 p-5 backdrop-blur-sm transition-colors"
                  >
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded border border-white/10 bg-white/5">
                      <Icon className="text-primary h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-foreground mb-1 font-mono text-sm font-bold tracking-widest uppercase">
                        {feature.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Simulated OS Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex flex-col overflow-hidden rounded-sm border border-white/10 bg-[#050505]/80 shadow-2xl backdrop-blur-md"
          >
            {/* Top Bar: OS Boot Status */}
            <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-3">
              <div className="flex items-center gap-3">
                <HardDrive className="text-primary h-4 w-4" />
                <span className="text-muted-foreground font-mono text-[10px] font-bold tracking-widest uppercase">
                  Tellus_OS // Kernel_v0.1
                </span>
              </div>
              <div className="text-primary flex items-center gap-2 font-mono text-[9px] tracking-widest uppercase">
                <Fingerprint className="h-3 w-3" />
                TPM Secure Boot Verified
              </div>
            </div>

            {/* Simulated 'htop' Process Monitor */}
            <div className="p-6">
              <div className="text-muted-foreground mb-4 flex items-center gap-2 border-b border-white/10 pb-2 font-mono text-[10px] font-bold tracking-widest uppercase">
                <Terminal className="h-3 w-3" /> Active Process Sandboxes
              </div>

              <div className="space-y-3 font-mono text-[10px]">
                {/* The Immortal Rust Core */}
                <div className="flex items-center justify-between rounded border border-purple-500/30 bg-purple-500/10 p-3">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-purple-400">PID 001</span>
                    <span className="text-foreground">tellus-core [RUST]</span>
                  </div>
                  <div className="flex items-center gap-2 text-purple-400">
                    <ShieldAlert className="h-3 w-3" /> IMMORTAL SUPERVISOR
                  </div>
                </div>

                {/* Volatile C++ Node (Motor) */}
                <div className="flex items-center justify-between rounded border border-white/5 bg-white/[0.02] p-3">
                  <div className="flex items-center gap-3">
                    <span className="text-muted-foreground">PID 402</span>
                    <span className="text-white/70">tellus-motor-bridge [C++]</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-500">
                    <Activity className="h-3 w-3" /> ACTIVE (VOLATILE)
                  </div>
                </div>

                {/* Volatile C++ Node (Vision) - WITH SIMULATED CRASH LOOP */}
                <div
                  className={`flex items-center justify-between rounded border p-3 transition-colors duration-300 ${
                    visionStatus === 'ACTIVE'
                      ? 'border-white/5 bg-white/[0.02]'
                      : visionStatus === 'SEGFAULT'
                        ? 'border-red-500/50 bg-red-500/20'
                        : 'border-yellow-500/50 bg-yellow-500/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-muted-foreground">
                      PID {visionStatus === 'REBOOTING' ? '---' : '405'}
                    </span>
                    <span
                      className={
                        visionStatus === 'ACTIVE'
                          ? 'text-white/70'
                          : 'text-white line-through opacity-80'
                      }
                    >
                      tellus-yolo-manipulation [C++]
                    </span>
                  </div>
                  <div
                    className={`flex items-center gap-2 font-bold ${
                      visionStatus === 'ACTIVE'
                        ? 'text-green-500'
                        : visionStatus === 'SEGFAULT'
                          ? 'text-red-500'
                          : 'text-yellow-500'
                    }`}
                  >
                    {visionStatus === 'ACTIVE' && (
                      <>
                        <Activity className="h-3 w-3" /> ACTIVE
                      </>
                    )}
                    {visionStatus === 'SEGFAULT' && (
                      <>
                        <ShieldAlert className="h-3 w-3 animate-pulse" /> SEGFAULT DETECTED
                      </>
                    )}
                    {visionStatus === 'REBOOTING' && (
                      <>
                        <RefreshCcw className="h-3 w-3 animate-spin" /> RUST RESURRECTING...
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* The Semantic Bottleneck Visualizer */}
            <div className="border-t border-white/10 bg-[#000000] p-6">
              <div className="text-primary mb-4 font-mono text-[9px] font-bold tracking-widest uppercase">
                Zenoh IPC // Semantic Bottleneck
              </div>

              <div className="flex items-center justify-between gap-4 font-mono text-[9px]">
                <div className="flex flex-col items-center rounded border border-red-500/20 bg-red-500/5 p-3 text-center">
                  <span className="mb-1 text-red-400">Raw Camera Input</span>
                  <span className="text-muted-foreground line-through">10.5 MB RGB Frame</span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="relative h-px w-12 bg-white/20">
                    <div className="text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black px-2">
                      FILTER
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center rounded border border-green-500/20 bg-green-500/5 p-3 text-center shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                  <span className="mb-1 text-green-400">FlatBuffer Target</span>
                  <span className="text-foreground">64 Bytes (XYZ_Datum)</span>
                </div>
              </div>
            </div>

            {/* Footer Local Ledger */}
            <div className="flex items-center justify-between border-t border-white/10 bg-white/5 px-4 py-3">
              <div className="text-muted-foreground flex items-center gap-2 font-mono text-[9px] tracking-widest uppercase">
                <Database className="h-3 w-3" />
                Spatial Ledger: <span className="text-foreground">Syncing to sled DB</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="bg-primary h-1.5 w-1.5 animate-pulse rounded-full" />
                <span className="bg-primary h-1.5 w-1.5 animate-pulse rounded-full delay-75" />
                <span className="bg-primary h-1.5 w-1.5 animate-pulse rounded-full delay-150" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
