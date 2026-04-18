'use client';

import {
  Terminal,
  Cpu,
  RefreshCw,
  MapPin,
  Code2,
  Cloud,
  HardDrive,
  ShieldAlert,
} from 'lucide-react';

export function PantheonGrid() {
  return (
    <section className="relative w-full border-t border-white/5 bg-transparent py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="bg-primary h-px w-8"></span>
            <span className="bg-primary h-1.5 w-1.5 animate-pulse rounded-full"></span>
          </div>
          <h2 className="text-primary font-mono text-[10px] font-bold tracking-[0.3em] uppercase">
            Architecture // The Pantheon Grid
          </h2>
        </div>

        {/* The Asymmetrical Bento Box Grid */}
        <div className="grid h-auto grid-cols-1 gap-4 md:h-[600px] md:grid-cols-3 md:grid-rows-2">
          {/* BOX 1: The Software Stack (Wide: 2 Cols x 1 Row) - WITH HOVER SPLIT */}
          <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a] p-8 transition-colors hover:border-white/20 hover:bg-white/[0.02] md:col-span-2 md:row-span-1">
            <div className="from-primary/10 absolute inset-0 bg-gradient-to-br via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* DEFAULT STATE: Fades out and blurs on hover */}
            <div className="relative z-10 flex h-full flex-col justify-between transition-all duration-500 group-hover:-translate-y-4 group-hover:scale-95 group-hover:opacity-0 group-hover:blur-md">
              <div>
                <Terminal className="text-primary mb-6 h-8 w-8" />
                <h3 className="text-foreground mb-3 font-mono text-[14px] font-bold tracking-widest uppercase">
                  Intent to Execution // Software Stack
                </h3>
                <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
                  Our distributed OS converts high-level agricultural intent into deterministic,
                  sub-millisecond DAG execution. A tractor company bends metal; we build the
                  intelligence layer.
                </p>
              </div>
              <div className="border-primary/20 bg-primary/10 text-primary mt-6 inline-flex w-fit items-center rounded border px-3 py-1 font-mono text-[10px] font-bold uppercase">
                <span className="bg-primary mr-2 h-1.5 w-1.5 animate-pulse rounded-full" />
                Hover to Unpack Stack
              </div>
            </div>

            {/* HOVER STATE: The 4 smaller software boxes reveal */}
            <div className="pointer-events-none absolute inset-0 z-20 grid translate-y-8 grid-cols-2 grid-rows-2 gap-2 p-4 opacity-0 transition-all duration-500 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
              <div className="hover:border-primary/40 flex flex-col justify-center rounded-lg border border-white/5 bg-black/80 p-4 backdrop-blur-md transition-colors">
                <Code2 className="text-primary mb-2 h-5 w-5" />
                <div className="text-foreground font-mono text-[10px] font-bold tracking-widest uppercase">
                  Vesta // Compiler
                </div>
                <p className="text-muted-foreground mt-1 text-[10px]">
                  Ground control IDE compiling intent to DAGs.
                </p>
              </div>
              <div className="hover:border-primary/40 flex flex-col justify-center rounded-lg border border-white/5 bg-black/80 p-4 backdrop-blur-md transition-colors">
                <HardDrive className="text-primary mb-2 h-5 w-5" />
                <div className="text-foreground font-mono text-[10px] font-bold tracking-widest uppercase">
                  Tellus // Edge OS
                </div>
                <p className="text-muted-foreground mt-1 text-[10px]">
                  Rust-based kernel for sub-ms safety on-robot.
                </p>
              </div>
              <div className="hover:border-primary/40 flex flex-col justify-center rounded-lg border border-white/5 bg-black/80 p-4 backdrop-blur-md transition-colors">
                <ShieldAlert className="text-primary mb-2 h-5 w-5" />
                <div className="text-foreground font-mono text-[10px] font-bold tracking-widest uppercase">
                  Mercury // Gateway
                </div>
                <p className="text-muted-foreground mt-1 text-[10px]">
                  Air-gapped mesh routing at the mud boundary.
                </p>
              </div>
              <div className="hover:border-primary/40 flex flex-col justify-center rounded-lg border border-white/5 bg-black/80 p-4 backdrop-blur-md transition-colors">
                <Cloud className="text-primary mb-2 h-5 w-5" />
                <div className="text-foreground font-mono text-[10px] font-bold tracking-widest uppercase">
                  Caelum // Cloud
                </div>
                <p className="text-muted-foreground mt-1 text-[10px]">
                  Global fleet telemetry and RaaS backend.
                </p>
              </div>
            </div>
          </div>

          {/* BOX 2: Plug & Play Hardware (Tall: 1 Col x 2 Rows) */}
          <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a] p-8 transition-colors hover:border-white/20 hover:bg-white/[0.02] md:col-span-1 md:row-span-2">
            <div className="from-primary/5 to-primary/5 absolute inset-0 bg-gradient-to-b via-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative z-10 flex h-full flex-col">
              <Cpu className="text-primary mb-6 h-8 w-8" />
              <h3 className="text-foreground mb-3 font-mono text-[14px] font-bold tracking-widest uppercase">
                Hardware Agnostic // Plug & Play
              </h3>
              <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                One intelligence layer, infinite physical bodies. Our edge-compute node seamlessly
                interfaces with modular end-effectors—swapping instantly from stereoscopic grape
                harvesters to high-density canopy sprayers based on seasonal needs.
              </p>

              {/* The Replaced Image Block */}
              <div className="mt-auto flex w-full items-center justify-center pt-6">
                <img
                  src="/robot_agnostic.png"
                  alt="Arkhon Hardware Agnostic Platform"
                  className="h-auto w-full object-contain opacity-70 drop-shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                />
              </div>
            </div>
          </div>

          {/* BOX 3: RaaS (Square: 1 Col x 1 Row) */}
          <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a] p-8 transition-colors hover:border-white/20 hover:bg-white/[0.02] md:col-span-1 md:row-span-1">
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <RefreshCw className="text-foreground/70 group-hover:text-primary mb-4 h-6 w-6 transition-colors" />
                <h3 className="text-foreground mb-2 font-mono text-[12px] font-bold tracking-widest uppercase">
                  Industrial RaaS Economics
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Zero CapEx friction. Robotics-as-a-Service aligns our incentives directly with the
                  harvest. Farmers pay for reliable, deterministic yield generation, not
                  depreciating metal.
                </p>
              </div>
            </div>
          </div>

          {/* BOX 4: The Farmer Connection (Square: 1 Col x 1 Row) */}
          <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a] p-8 transition-colors hover:border-white/20 hover:bg-white/[0.02] md:col-span-1 md:row-span-1">
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <MapPin className="text-foreground/70 group-hover:text-primary mb-4 h-6 w-6 transition-colors" />
                <h3 className="text-foreground mb-2 font-mono text-[12px] font-bold tracking-widest uppercase">
                  Grounded in Japan
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Built on direct, sustained connections with the farmers actively facing
                  demographic collapse. From field data to our upcoming pilots all over Japan, we
                  engineer for the dirt, not the lab.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
