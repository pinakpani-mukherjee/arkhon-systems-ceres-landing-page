'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Badge } from '@/components/ui/badge';
import {
  Database,
  ShieldAlert,
  CreditCard,
  Cloud,
  Activity,
  Server,
  Lock,
  TerminalSquare,
} from 'lucide-react';

const CAELUM_FEATURES = [
  {
    icon: Database,
    title: 'Dual-Database Architecture',
    description:
      'Separates relational business logic (PostgreSQL with strict Row-Level Security) from high-frequency machine telemetry (TimescaleDB Hypertables) for instant dashboard rendering.',
  },
  {
    icon: ShieldAlert,
    title: 'Cryptographic Kill Switch',
    description:
      'Caelum acts as the sovereign Certificate Authority. If a chassis is stolen, a single API call revokes its mTLS certificate, instantly bricking the hardware and shredding active mission data.',
  },
  {
    icon: CreditCard,
    title: 'Automated RaaS Metering',
    description:
      'Translates 1Hz physical telemetry into financial ledgers. Caelum automatically calculates payload deployment and kinematic usage, pushing idempotent usage records directly to the billing gateway.',
  },
];

// Simulated incoming gRPC telemetry stream
const MOCK_STREAM = [
  { time: '11:03:12.401', node: 'UUID_104', payload: 'gRPC [Telescope/Odometry] OK' },
  { time: '11:03:12.445', node: 'UUID_809', payload: 'gRPC [Tank/Fluid_Delta] OK' },
  { time: '11:03:12.510', node: 'UUID_104', payload: 'gRPC [Kinematics/Joints] OK' },
  { time: '11:03:12.602', node: 'UUID_212', payload: 'MQTT [Ping/Ack] OK' },
];

export default function CaelumCloud() {
  return (
    <section id="caelum" className="relative z-10 w-full bg-transparent py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="bg-primary h-px w-8"></span>
            <span className="bg-primary h-1.5 w-1.5 animate-pulse rounded-full"></span>
          </div>
          <h2 className="text-primary font-mono text-[10px] font-bold tracking-[0.3em] uppercase">
            Layer_02 // The Cloud Backend
          </h2>
        </div>

        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left Column: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-foreground mb-6 text-4xl font-extrabold tracking-tighter sm:text-5xl">
              Caelum <br />
              <span className="text-primary">Enterprise Engine.</span>
            </h3>
            <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
              We don't sell tractors; we sell guaranteed execution. Caelum is the strict
              multi-tenant SaaS backend that translates decentralized robotic labor into billable
              metrics, predictive maintenance alerts, and legally defensible compliance logs.
            </p>

            <div className="space-y-6">
              {CAELUM_FEATURES.map((feature, i) => {
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

          {/* Right Column: Simulated Cloud Ops Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex flex-col overflow-hidden rounded-sm border border-white/10 bg-[#050505]/80 shadow-2xl backdrop-blur-md"
          >
            {/* Top Bar: Cloud Environment */}
            <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-3">
              <div className="flex items-center gap-3">
                <Cloud className="text-primary h-4 w-4" />
                <span className="text-muted-foreground font-mono text-[10px] font-bold tracking-widest uppercase">
                  Caelum // Global_Fleet_Ops
                </span>
              </div>
              <div className="text-primary flex items-center gap-2 font-mono text-[9px] tracking-widest uppercase">
                <Activity className="h-3 w-3 animate-pulse" />
                AWS US-WEST // HEALTHY
              </div>
            </div>

            <div className="p-6">
              {/* Telemetry Ingestion Stats */}
              <div className="mb-6 grid grid-cols-3 gap-4">
                <div className="rounded border border-white/5 bg-black/40 p-4">
                  <div className="text-muted-foreground mb-1 font-mono text-[9px] tracking-widest uppercase">
                    Ingest Rate
                  </div>
                  <div className="text-foreground text-xl font-bold">
                    12.4k <span className="text-muted-foreground text-sm font-normal">req/s</span>
                  </div>
                </div>
                <div className="rounded border border-white/5 bg-black/40 p-4">
                  <div className="text-muted-foreground mb-1 font-mono text-[9px] tracking-widest uppercase">
                    Active Nodes
                  </div>
                  <div className="text-foreground text-xl font-bold">142</div>
                </div>
                <div className="rounded border border-white/5 bg-black/40 p-4">
                  <div className="text-muted-foreground mb-1 font-mono text-[9px] tracking-widest uppercase">
                    Queue Depth
                  </div>
                  <div className="text-xl font-bold text-green-500">0</div>
                </div>
              </div>

              {/* Database Architecture Visualizer */}
              <div className="mb-6 grid grid-cols-2 gap-4">
                {/* Relational DB */}
                <div className="relative overflow-hidden rounded border border-blue-500/20 bg-blue-500/5 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Database className="h-4 w-4 text-blue-400" />
                    <span className="font-mono text-[10px] font-bold tracking-widest text-blue-400 uppercase">
                      PostgreSQL (RLS)
                    </span>
                  </div>
                  <ul className="text-muted-foreground space-y-1 font-mono text-[9px]">
                    <li>• Tenant Mappings</li>
                    <li>• Hardware Registry</li>
                    <li>• Billing Ledgers</li>
                  </ul>
                </div>
                {/* Time-Series DB */}
                <div className="relative overflow-hidden rounded border border-purple-500/20 bg-purple-500/5 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Server className="h-4 w-4 text-purple-400" />
                    <span className="font-mono text-[10px] font-bold tracking-widest text-purple-400 uppercase">
                      TimescaleDB
                    </span>
                  </div>
                  <ul className="text-muted-foreground space-y-1 font-mono text-[9px]">
                    <li>• 1Hz Telemetry</li>
                    <li>• Sensor Hypertables</li>
                    <li>• 1Hr Aggregates</li>
                  </ul>
                </div>
              </div>

              {/* Simulated Live Terminal Feed */}
              <div className="rounded border border-white/10 bg-[#000000] p-4">
                <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-2">
                  <div className="text-muted-foreground flex items-center gap-2 font-mono text-[9px] tracking-widest uppercase">
                    <TerminalSquare className="h-3 w-3" /> gRPC Ingestion Stream
                  </div>
                </div>
                <div className="text-muted-foreground/70 space-y-2 font-mono text-[9px]">
                  {MOCK_STREAM.map((log, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <span className="w-16 flex-shrink-0 text-white/30">{log.time}</span>
                      <span className="text-primary/80 w-16 flex-shrink-0">{log.node}</span>
                      <span className="truncate text-green-400/80">{log.payload}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-2">
                    <span className="bg-primary h-1.5 w-1.5 animate-pulse rounded-full" />
                    <span className="text-white/30">Listening for multiplexed streams...</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Zero-Trust Footer */}
            <div className="flex items-center justify-between border-t border-red-500/20 bg-red-500/5 p-4">
              <div className="flex items-center gap-2 font-mono text-[9px] tracking-widest text-red-400 uppercase">
                <Lock className="h-4 w-4" />
                Zero-Trust Authority: <span className="text-white/70">mTLS Enforced</span>
              </div>
              <button className="flex items-center gap-2 border border-red-500/50 bg-red-500/10 px-4 py-2 font-mono text-[10px] font-bold tracking-widest text-red-500 uppercase transition-colors hover:bg-red-500 hover:text-white">
                Revoke Fleet Certs
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
