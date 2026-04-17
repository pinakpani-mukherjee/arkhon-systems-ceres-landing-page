'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Badge } from '@/components/ui/badge';
import {
  ShieldAlert,
  Wifi,
  Radio,
  Lock,
  Database,
  ArrowRightLeft,
  Server,
  Terminal,
  Cpu,
} from 'lucide-react';

const MERCURY_FEATURES = [
  {
    icon: ShieldAlert,
    title: 'Dual-NIC Air Gap',
    description:
      'Physical and OS-level isolation. IP forwarding is strictly disabled. The chaotic 50Hz local swarm network (NIC 1) can never physically route to the public cellular WAN (NIC 2).',
  },
  {
    icon: ArrowRightLeft,
    title: 'The Go Multiplexer',
    description:
      'A blazingly fast Golang daemon acts as the protocol translator. It ingests local UDP firehoses, handles backpressure by safely dropping packets, and pushes throttled 1Hz gRPC payloads to the cloud.',
  },
  {
    icon: Database,
    title: 'Crash-Safe Local Persistence',
    description:
      'Mercury survives brownouts. Mission DAGs are written to an ACID-compliant embedded B+ Tree (bbolt), while dropped WAN telemetry is cached in an LSM Tree (BadgerDB) for replay on boot.',
  },
  {
    icon: Lock,
    title: 'Zero-Trust TPM Envelope',
    description:
      'Mercury is a Subordinate CA. Cryptographic keys live exclusively in volatile RAM. If the chassis is tampered with, a hardware interrupt severs power, evaporating the keys and bricking the device.',
  },
];

export default function MercuryGateway() {
  return (
    <section id="mercury" className="relative z-10 w-full bg-transparent py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="bg-primary h-px w-8"></span>
            <span className="bg-primary h-1.5 w-1.5 animate-pulse rounded-full"></span>
          </div>
          <h2 className="text-primary font-mono text-[10px] font-bold tracking-[0.3em] uppercase">
            Layer_03 // The Mud Boundary
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
              Mercury <br />
              <span className="text-primary">Air-Gapped Mesh Gateway.</span>
            </h3>
            <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
              Direct-to-cloud robotics fail in the physical world. Mercury is our ruggedized Forward
              Operating Base (FOB). It translates, throttles, and cryptographically isolates the
              swarm, ensuring missions execute flawlessly even during total internet blackouts.
            </p>

            <div className="space-y-6">
              {MERCURY_FEATURES.map((feature, i) => {
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

          {/* Right Column: Simulated Network Topology UI */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex flex-col overflow-hidden rounded-sm border border-white/10 bg-[#050505]/80 shadow-2xl backdrop-blur-md"
          >
            {/* Top Bar: Hardware Status */}
            <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-3">
              <div className="flex items-center gap-3">
                <Server className="text-primary h-4 w-4" />
                <span className="text-muted-foreground font-mono text-[10px] font-bold tracking-widest uppercase">
                  Mercury_IPC // Edge_Node_01
                </span>
              </div>
              <div className="text-primary flex items-center gap-2 font-mono text-[9px] tracking-widest uppercase">
                <Lock className="h-3 w-3" />
                TPM Secure Enclave Active
              </div>
            </div>

            {/* The Air Gap Visualizer */}
            <div className="relative flex h-[320px] w-full items-center justify-between bg-[#0a0a0a] p-6">
              {/* NIC 1: Local LAN (Swarm) */}
              <div className="flex h-full w-1/3 flex-col justify-between rounded border border-green-500/20 bg-green-500/5 p-4 text-center">
                <div className="flex justify-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10 text-green-400">
                    <Radio className="h-5 w-5 animate-pulse" />
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[10px] font-bold tracking-widest text-green-400 uppercase">
                    NIC 1 // Local Mesh
                  </div>
                  <div className="text-muted-foreground mt-1 font-mono text-[8px]">
                    900MHz / IPv4
                  </div>
                </div>
                <div className="text-muted-foreground rounded bg-black/50 p-2 font-mono text-[9px]">
                  Ingesting 50Hz UDP <br /> <span className="text-green-500">ROS 2 Firehose</span>
                </div>
              </div>

              {/* The Barrier & Go Daemon */}
              <div className="relative flex h-full w-1/4 flex-col items-center justify-center">
                {/* Visual Air Gap Lines */}
                <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-red-500/50 [background-image:linear-gradient(to_bottom,transparent_50%,rgba(239,68,68,0.5)_50%)] [background-size:100%_8px]" />

                <div className="relative z-10 flex flex-col items-center gap-2 rounded border border-red-500/50 bg-black p-3 shadow-[0_0_20px_rgba(239,68,68,0.2)]">
                  <Cpu className="h-6 w-6 text-red-400" />
                  <div className="text-center font-mono text-[9px] font-bold tracking-widest text-red-400 uppercase">
                    OS Air Gap
                  </div>
                </div>

                <div className="border-primary/50 relative z-10 mt-6 flex flex-col items-center gap-2 rounded border bg-black p-3 shadow-[0_0_20px_rgba(255,87,34,0.1)]">
                  <ArrowRightLeft className="text-primary h-5 w-5" />
                  <div className="text-primary text-center font-mono text-[9px] font-bold tracking-widest uppercase">
                    Go Daemon
                  </div>
                </div>
              </div>

              {/* NIC 2: WAN (Cloud) */}
              <div className="flex h-full w-1/3 flex-col justify-between rounded border border-blue-500/20 bg-blue-500/5 p-4 text-center">
                <div className="flex justify-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                    <Wifi className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[10px] font-bold tracking-widest text-blue-400 uppercase">
                    NIC 2 // WAN Uplink
                  </div>
                  <div className="text-muted-foreground mt-1 font-mono text-[8px]">
                    Starlink / LTE
                  </div>
                </div>
                <div className="text-muted-foreground rounded bg-black/50 p-2 font-mono text-[9px]">
                  Egressing 1Hz gRPC <br /> <span className="text-blue-500">Compressed Auth</span>
                </div>
              </div>
            </div>

            {/* Daemon Log Terminal */}
            <div className="text-muted-foreground/80 border-t border-white/10 bg-[#000000] p-4 font-mono text-[9px]">
              <div className="text-primary mb-2 flex items-center gap-2">
                <Terminal className="h-3 w-3" />
                <span className="tracking-widest uppercase">System_Daemon_Logs</span>
              </div>
              <div className="space-y-1 pl-5">
                <div>
                  <span className="text-white/30">[11:04:12]</span>{' '}
                  <span className="text-yellow-500">WRN:</span> Telemetry channel full. Dropping
                  50Hz UDP packets to preserve RAM.
                </div>
                <div>
                  <span className="text-white/30">[11:04:14]</span>{' '}
                  <span className="text-green-500">INF:</span> bbolt Txn Committed:
                  Mission_DAG_Yamanashi_A.
                </div>
                <div>
                  <span className="text-white/30">[11:04:15]</span>{' '}
                  <span className="text-blue-400">SEC:</span> mTLS Client Handshake verified for
                  UUID_104. Routing granted.
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white/30">[11:04:16]</span>{' '}
                  <span className="text-primary">INF:</span> BadgerDB writing telemetry to WAL...{' '}
                  <span className="bg-primary h-1.5 w-1.5 animate-pulse" />
                </div>
              </div>
            </div>

            {/* Footer Anti-Tamper */}
            <div className="flex items-center justify-between border-t border-red-500/20 bg-red-500/5 px-4 py-3">
              <div className="font-mono text-[9px] font-bold tracking-widest text-red-500 uppercase">
                Anti-Tamper Envelope: <span className="text-white/70">Armed</span>
              </div>
              <div className="text-muted-foreground font-mono text-[9px] tracking-widest uppercase">
                Keys in Volatile RAM
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
