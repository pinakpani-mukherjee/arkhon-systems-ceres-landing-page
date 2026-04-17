'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Badge } from '@/components/ui/badge';
import { Layers, Workflow, Video, Network, Activity, ChevronRight, Box, Cpu } from 'lucide-react';

const VESTA_FEATURES = [
  {
    icon: Workflow,
    title: 'Two-Tier DAG Compilation',
    description:
      'Enforces the Compilation-Execution Divide. Vesta translates macro-intent (40-acre polygons) into a Macro-DAG for logistics, and a Micro-DAG for tight kinematic execution and contingency routing.',
  },
  {
    icon: Box,
    title: 'Mutable-Ref Digital Twin',
    description:
      "Bypasses standard React state to maintain 60FPS WebGL performance. Ingests 10Hz WebSocket telemetry to smoothly render robot odometry and joint kinematics without melting the field laptop's CPU.",
  },
  {
    icon: Video,
    title: 'Asynchronous HITL via WebRTC',
    description:
      'If a robot encounters a semantic exception, Vesta negotiates a sub-200ms WebRTC peer-to-peer connection. It streams an RTSP video feed with overlaid bounding boxes for instant operator resolution.',
  },
];

export default function VestaTerminal() {
  return (
    <section id="vesta" className="relative z-10 w-full bg-transparent py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="bg-primary h-px w-8"></span>
            <span className="bg-primary h-1.5 w-1.5 animate-pulse rounded-full"></span>
          </div>
          <h2 className="text-primary font-mono text-[10px] font-bold tracking-[0.3em] uppercase">
            Layer_01 // The Brain
          </h2>
        </div>

        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left Column: Narrative (Backed by the Docs) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-foreground mb-6 text-4xl font-extrabold tracking-tighter sm:text-5xl">
              Vesta <br />
              <span className="text-primary">Mission Compiler & GCS.</span>
            </h3>
            <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
              Autonomy is fundamentally decoupled from physical hardware. Vesta absorbs all
              geometric complexity, generating deterministic JSON Execution Graphs so the edge
              hardware never has to "think" in the mud.
            </p>

            <div className="space-y-6">
              {VESTA_FEATURES.map((feature, i) => {
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

          {/* Right Column: Simulated Tauri / WebGL App UI */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex flex-col overflow-hidden rounded-sm border border-white/10 bg-[#050505]/80 shadow-2xl backdrop-blur-md"
          >
            {/* Top Bar: Tauri Local Node */}
            <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-3">
              <div className="flex items-center gap-3">
                <Cpu className="text-primary h-4 w-4" />
                <span className="text-muted-foreground font-mono text-[10px] font-bold tracking-widest uppercase">
                  Vesta_Local // Tauri Desktop
                </span>
              </div>
              <div className="text-primary flex items-center gap-2 font-mono text-[9px] tracking-widest uppercase">
                <Activity className="h-3 w-3 animate-pulse" />
                10Hz WebSocket Sync
              </div>
            </div>

            <div className="relative flex h-[400px] w-full">
              {/* Left Panel: The DAG Compiler View */}
              <div className="w-1/3 flex-shrink-0 border-r border-white/10 bg-[#000000] p-4 font-mono">
                <div className="text-muted-foreground mb-4 flex items-center gap-2 text-[9px] tracking-widest uppercase">
                  <Network className="h-3 w-3" /> Micro-DAG
                </div>

                {/* Simulated DAG Logic */}
                <div className="relative space-y-4 pl-2 text-[10px]">
                  <div className="absolute top-2 bottom-6 left-3.5 w-[1px] bg-white/10" />

                  <div className="relative z-10 flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-white/40" />
                    <span className="text-foreground">ALIGN_CHASSIS</span>
                  </div>

                  <div className="relative z-10 flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-white/40" />
                    <span className="text-foreground">EXTEND_ARM</span>
                  </div>

                  <div className="relative z-10 flex items-center gap-2">
                    <div className="bg-primary h-1.5 w-1.5 rounded-full shadow-[0_0_8px_rgba(255,87,34,0.8)]" />
                    <span className="text-primary font-bold">FIRE_NOZZLE</span>
                  </div>

                  <div className="relative z-10 flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-white/10" />
                    <span className="text-muted-foreground">ON_FAIL_VISION</span>
                  </div>

                  <div className="relative z-10 flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-red-500/50" />
                    <span className="text-muted-foreground">STOW_AND_ABORT</span>
                  </div>
                </div>
              </div>

              {/* Right Panel: The 3D Digital Twin Simulation */}
              <div className="relative h-full flex-grow overflow-hidden bg-[#0a0a0a]">
                {/* Local Metric Grid Projection */}
                <div className="absolute inset-0 [transform-origin:center_top] [transform:rotateX(60deg)_scale(1.5)] [background-image:linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] [background-size:30px_30px] opacity-20" />

                {/* The "Virtual Tube" (Macro-DAG path) */}
                <div className="border-primary/30 bg-primary/5 absolute bottom-0 left-1/2 h-[80%] w-16 [transform-origin:center_bottom] -translate-x-1/2 [transform:rotateX(60deg)_scale(1.5)] border-x border-dashed" />

                {/* Tellus Robot Marker */}
                <div className="absolute top-[40%] left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                  <div className="border-primary bg-primary/20 h-6 w-6 rounded border backdrop-blur-sm" />
                  <div className="text-primary mt-1 font-mono text-[8px] tracking-widest">
                    UUID_104
                  </div>
                </div>

                {/* Exception HITL Overlay (Simulated WebRTC) */}
                <div className="absolute right-4 bottom-4 rounded border border-red-500/30 bg-black/80 p-3 backdrop-blur-md">
                  <div className="mb-2 flex items-center gap-2 font-mono text-[9px] tracking-widest text-red-400 uppercase">
                    <Video className="h-3 w-3" />
                    RTSP Link Ready
                  </div>
                  <button className="flex w-full items-center justify-center gap-2 border border-red-500/50 bg-red-500/10 px-3 py-1.5 font-mono text-[9px] font-bold tracking-widest text-red-400 uppercase transition-colors hover:bg-red-500 hover:text-white">
                    Request HITL Video
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Footer: Data Dispatch */}
            <div className="flex items-center justify-between border-t border-white/10 bg-white/5 p-4">
              <div className="text-muted-foreground font-mono text-[9px] tracking-widest uppercase">
                Validation: <span className="text-green-500">Tarjan Acyclic Passed</span>
              </div>
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-2 px-4 py-2 font-mono text-[10px] font-bold tracking-widest uppercase transition-all">
                Push JSON to Mercury <ChevronRight className="h-3 w-3" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
