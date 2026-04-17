'use client';

import { Separator } from '@/components/ui/separator';
import { LogoVertical } from '@/components/LogoVertical';
import { FaTwitter, FaLinkedin, FaGithub, FaAt } from 'react-icons/fa';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-background w-full border-t border-white/5 pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* 1. Brand Identity */}
          <div className="flex flex-col items-start md:col-span-4">
            <LogoVertical className="text-primary mb-6 h-20 w-auto" />
            <p className="text-muted-foreground/60 max-w-xs font-mono text-[10px] leading-relaxed tracking-tighter uppercase">
              // Arkhon Systems <br />
              // Product_Deployment: Ceres <br />
              // Ops: TYO
            </p>
          </div>

          {/* 2. Architecture */}
          <div className="md:col-span-3">
            <h4 className="text-primary mb-8 font-mono text-[10px] font-bold tracking-[0.3em] uppercase">
              Architecture
            </h4>
            <ul className="space-y-6">
              <li>
                <Link href="/architecture#vesta" className="group block">
                  <span className="text-foreground group-hover:text-primary text-sm font-bold transition-colors">
                    Vesta
                  </span>
                  <span className="text-muted-foreground/50 mt-1 block font-mono text-[9px] tracking-tighter uppercase">
                    // Ground Control Compiler
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/architecture#caelum" className="group block">
                  <span className="text-foreground group-hover:text-secondary text-sm font-bold transition-colors">
                    Caelum
                  </span>
                  <span className="text-muted-foreground/50 mt-1 block font-mono text-[9px] tracking-tighter uppercase">
                    // Enterprise Cloud Engine
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/architecture#mercury" className="group block">
                  <span className="text-foreground group-hover:text-terminal text-sm font-bold transition-colors">
                    Mercury
                  </span>
                  <span className="text-muted-foreground/50 mt-1 block font-mono text-[9px] tracking-tighter uppercase">
                    // Air-Gapped Gateway
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/architecture#tellus" className="group block">
                  <span className="text-foreground group-hover:text-primary text-sm font-bold transition-colors">
                    Tellus
                  </span>
                  <span className="text-muted-foreground/50 mt-1 block font-mono text-[9px] tracking-tighter uppercase">
                    // Edge Orchestrator Kernel
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Operations & Deployment */}
          <div className="md:col-span-3">
            <h4 className="text-primary mb-8 font-mono text-[10px] font-bold tracking-[0.3em] uppercase">
              Operations
            </h4>
            <ul className="space-y-6">
              <li>
                <Link href="/roadmap" className="group block">
                  <span className="text-foreground group-hover:text-primary text-sm font-bold transition-colors">
                    Pilot Roadmap
                  </span>
                  <span className="text-muted-foreground/50 mt-1 block font-mono text-[9px] tracking-tighter uppercase">
                    // Seasonal Deployment Plan
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="group block">
                  <span className="text-foreground group-hover:text-primary text-sm font-bold transition-colors">
                    Tokyo Node
                  </span>
                  <span className="text-muted-foreground/50 mt-1 block font-mono text-[9px] tracking-tighter uppercase">
                    // Core Engineering Team
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="group block">
                  <span className="text-foreground group-hover:text-primary text-sm font-bold transition-colors">
                    Investor Uplink
                  </span>
                  <span className="text-muted-foreground/50 mt-1 block font-mono text-[9px] tracking-tighter uppercase">
                    // Enterprise Inquiries
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. Status & Comms */}
          <div className="flex flex-col md:col-span-2 md:items-end">
            <h4 className="text-primary mb-8 font-mono text-[10px] font-bold tracking-[0.3em] uppercase">
              Signal_Status
            </h4>
            <div className="bg-primary/5 border-primary/20 text-primary mb-8 flex items-center gap-2 rounded border px-3 py-2 font-mono text-[9px]">
              <span className="bg-terminal h-1 w-1 animate-pulse rounded-full" />
              UP-LINK: ACTIVE
            </div>
            <div className="flex flex-wrap gap-5 md:justify-end">
              <FaGithub className="text-muted-foreground hover:text-primary size-4 cursor-pointer transition-colors" />
              <FaLinkedin className="text-muted-foreground hover:text-primary size-4 cursor-pointer transition-colors" />
              <FaTwitter className="text-muted-foreground hover:text-primary size-4 cursor-pointer transition-colors" />
              <FaAt className="text-muted-foreground hover:text-primary size-4 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>

        <Separator className="mb-8 bg-white/5" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-muted-foreground font-mono text-[9px] tracking-[0.2em] uppercase">
            © 2026 ARKHON SYSTEMS // ALL RIGHTS RESERVED
          </p>
          <div className="text-muted-foreground flex space-x-8 font-mono text-[9px] tracking-[0.2em] uppercase">
            <span className="hover:text-foreground cursor-pointer transition-colors">
              Field Safety Protocols
            </span>
            <span className="hover:text-foreground cursor-pointer transition-colors">
              RaaS Compliance
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
