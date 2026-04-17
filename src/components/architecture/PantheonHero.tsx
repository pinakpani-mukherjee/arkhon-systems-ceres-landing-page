'use client';

import React, { useRef, forwardRef } from 'react';
import { motion } from 'motion/react';
import { Badge } from '@/components/ui/badge';
import { Code2, Cloud, ShieldAlert, HardDrive, Zap } from 'lucide-react';
import { AnimatedBeam } from '@/components/ui/animated-beam';
import { cn } from '@/lib/utils';

// --- REUSABLE NODE COMPONENT ---
const NetworkNode = forwardRef<
  HTMLDivElement,
  { icon: React.ElementType; title: string; subtitle: string; className?: string }
>(({ icon: Icon, title, subtitle, className }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'hover:border-primary/40 relative z-10 flex flex-col items-center justify-center gap-2 rounded-sm border border-white/10 bg-[#0a0a0a] p-6 shadow-2xl transition-all hover:bg-white/[0.02]',
        className,
      )}
    >
      {/* Corner Accents */}
      <div className="absolute top-0 left-0 h-2 w-2 border-t border-l border-white/20" />
      <div className="absolute top-0 right-0 h-2 w-2 border-t border-r border-white/20" />
      <div className="absolute bottom-0 left-0 h-2 w-2 border-b border-l border-white/20" />
      <div className="absolute right-0 bottom-0 h-2 w-2 border-r border-b border-white/20" />

      <div className="flex h-12 w-12 items-center justify-center rounded border border-white/5 bg-white/5">
        <Icon className="text-primary h-6 w-6" />
      </div>
      <div className="text-center">
        <h3 className="text-foreground font-mono text-sm font-bold tracking-widest uppercase">
          {title}
        </h3>
        <p className="text-muted-foreground mt-1 font-mono text-[9px] tracking-widest uppercase">
          {subtitle}
        </p>
      </div>
    </div>
  );
});
NetworkNode.displayName = 'NetworkNode';

export default function PantheonHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const vestaRef = useRef<HTMLDivElement>(null);
  const caelumRef = useRef<HTMLDivElement>(null);
  const mercuryRef = useRef<HTMLDivElement>(null);
  const tellusRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative flex min-h-[90vh] w-full flex-col items-center justify-center overflow-hidden bg-transparent px-6 pt-32 pb-20">
      <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <Badge
            variant="outline"
            className="border-primary/30 bg-primary/5 text-primary mb-6 px-4 py-1 font-mono text-[10px] tracking-[0.4em] uppercase"
          >
            System_Architecture // The Pantheon Grid
          </Badge>
          <h1 className="text-foreground text-5xl font-black tracking-tighter sm:text-7xl">
            Intent to <span className="text-primary">Execution.</span>
          </h1>
          <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg">
            A deterministic visual representation of the Arkhon orchestration layer. Demonstrating
            asymmetric telemetry routing from the mud boundary to global ground control.
          </p>
        </motion.div>

        {/* --- THE BEAM NETWORK CONTAINER --- */}
        <div
          ref={containerRef}
          className="relative mx-auto flex w-full max-w-4xl flex-col items-center gap-16 rounded-sm border border-white/5 bg-[#050505]/50 p-10 backdrop-blur-sm md:p-20"
        >
          {/* Row 1: Vesta & Caelum */}
          <div className="flex w-full flex-col justify-between gap-10 sm:flex-row">
            <NetworkNode
              ref={vestaRef}
              icon={Code2}
              title="Vesta"
              subtitle="Mission Compiler"
              className="w-full sm:w-64"
            />
            <NetworkNode
              ref={caelumRef}
              icon={Cloud}
              title="Caelum"
              subtitle="Global Telemetry"
              className="w-full sm:w-64"
            />
          </div>

          {/* Row 2: Mercury (The Gateway) */}
          <div className="flex w-full justify-center">
            <NetworkNode
              ref={mercuryRef}
              icon={ShieldAlert}
              title="Mercury"
              subtitle="Air-Gapped Mesh Gateway"
              className="border-primary/20 bg-primary/5 w-full shadow-[0_0_30px_rgba(255,87,34,0.1)] sm:w-72"
            />
          </div>

          {/* Row 3: Tellus (The Hardware Edge) */}
          <div className="flex w-full justify-center">
            <NetworkNode
              ref={tellusRef}
              icon={HardDrive}
              title="Tellus"
              subtitle="Rust Edge Kernel"
              className="w-full sm:w-72"
            />
          </div>

          {/* --- THE ANIMATED BEAMS (ASYMMETRIC BIDIRECTIONAL) --- */}

          {/* VESTA <-> CAELUM (50/50 Split) */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={vestaRef}
            toRef={caelumRef}
            curvature={-30}
            pathWidth={2}
            duration={3}
            pathOpacity={0.15}
            gradientStartColor="#ff5722"
            gradientStopColor="#ffffff"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={vestaRef}
            toRef={caelumRef}
            curvature={30}
            pathWidth={2}
            duration={3}
            reverse
            pathOpacity={0.15}
            gradientStartColor="#ffffff"
            gradientStopColor="#ff5722"
          />

          {/* MERCURY <-> VESTA (Mostly Upstream) */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={vestaRef}
            toRef={mercuryRef}
            curvature={30}
            pathWidth={1}
            duration={4} // Slow, faint command trickle
            pathOpacity={0.05}
            gradientStartColor="#ffffff"
            gradientStopColor="#ff5722"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={vestaRef}
            toRef={mercuryRef}
            curvature={-20}
            pathWidth={3}
            duration={2} // Fast, heavy telemetry push
            reverse
            pathOpacity={0.3}
            gradientStartColor="#ff5722"
            gradientStopColor="#ff5722"
          />

          {/* MERCURY <-> CAELUM (Mostly Upstream) */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={caelumRef}
            toRef={mercuryRef}
            curvature={-30}
            pathWidth={1}
            duration={4} // Slow, faint command trickle
            pathOpacity={0.05}
            gradientStartColor="#ffffff"
            gradientStopColor="#ff5722"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={caelumRef}
            toRef={mercuryRef}
            curvature={20}
            pathWidth={3}
            duration={2} // Fast, heavy telemetry push
            reverse
            pathOpacity={0.3}
            gradientStartColor="#ff5722"
            gradientStopColor="#ffffff"
          />

          {/* TELLUS <-> MERCURY (Extremely Heavy Upstream) */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={mercuryRef}
            toRef={tellusRef}
            curvature={20}
            pathWidth={1}
            duration={3} // Command DAGs going down to the robot
            pathOpacity={0.1}
            gradientStartColor="#ffffff"
            gradientStopColor="#ff5722"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={mercuryRef}
            toRef={tellusRef}
            curvature={-20}
            pathWidth={4} // Thickest path
            duration={1.5} // Fastest execution
            reverse
            pathOpacity={0.4} // Brightest path
            gradientStartColor="#ff5722"
            gradientStopColor="#ff5722"
          />
        </div>

        {/* Live Status Indicator */}
        <div className="text-primary mt-8 flex flex-col items-center justify-center gap-2 font-mono text-[10px] font-bold tracking-widest uppercase sm:flex-row sm:gap-4">
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 animate-pulse" />
            Asymmetric Telemetry Active
          </div>
          <span className="hidden text-white/20 sm:inline">|</span>
          <div className="text-muted-foreground">Upstream Load: 92% // Downstream Commands: 8%</div>
        </div>
      </div>
    </div>
  );
}
