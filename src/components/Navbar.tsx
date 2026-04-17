'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { LogoHorizontal } from '@/components/LogoHorizontal';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

// Data identifying the core Ceres software pillars
const ARCHITECTURE_LINKS = [
  {
    title: 'Vesta // Compiler',
    href: '/architecture#vesta',
    description: 'Ground control IDE. Compiles intent into deterministic DAGs.',
  },
  {
    title: 'Caelum // Cloud',
    href: '/architecture#caelum',
    description: 'Enterprise RaaS backend for global fleet telemetry.',
  },
  {
    title: 'Mercury // Gateway',
    href: '/architecture#mercury',
    description: 'Air-gapped edge layer. Throttles data at the Mud Boundary.',
  },
  {
    title: 'Tellus // Edge',
    href: '/architecture#tellus',
    description: 'Rust-based distributed OS running on-robot for sub-ms safety.',
  },
];

export function Navbar() {
  return (
    <header className="bg-background/80 fixed top-0 z-50 w-full border-b border-white/5 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Brand Identity for Arkhon Systems */}
        <Link href="/" className="group flex items-center">
          <LogoHorizontal className="text-primary h-8 w-auto transition-all group-hover:drop-shadow-[0_0_8px_rgba(255,87,34,0.6)]" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              {/* Product Link: Ceres */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={`${navigationMenuTriggerStyle()} text-muted-foreground hover:text-foreground bg-transparent font-mono text-[10px] font-bold tracking-widest uppercase transition-colors hover:bg-white/5`}
                >
                  <Link href="/ceres">Ceres</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Architecture Dropdown with tactical layout fixes */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-muted-foreground hover:text-foreground data-[state=open]:text-foreground bg-transparent font-mono text-[10px] font-bold tracking-widest uppercase transition-colors hover:bg-white/5 data-[state=open]:bg-white/5">
                  Architecture
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[450px] gap-4 rounded-sm border border-white/10 bg-[#0a0a0a] p-6 shadow-2xl md:w-[600px] md:grid-cols-2">
                    {ARCHITECTURE_LINKS.map((component) => (
                      <li key={component.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={component.href}
                            className="group block space-y-2 rounded-sm border border-transparent p-4 leading-none no-underline transition-all outline-none select-none hover:border-white/10 hover:bg-white/5"
                          >
                            <div className="flex items-start gap-3">
                              {/* Tactical Marker Dot */}
                              <div className="bg-primary mt-1 h-1.5 w-1.5 shrink-0 opacity-50 group-hover:animate-pulse group-hover:opacity-100" />

                              <div className="space-y-2">
                                {/* Title Split Logic */}
                                <div className="text-primary font-mono text-[10px] leading-tight font-bold tracking-[0.2em] uppercase">
                                  {component.title.split(' // ').map((line, i) => (
                                    <span key={i} className="block">
                                      {line} {i === 0 ? '//' : ''}
                                    </span>
                                  ))}
                                </div>
                                <p className="text-muted-foreground/70 group-hover:text-foreground text-[11px] leading-relaxed transition-colors">
                                  {component.description}
                                </p>
                              </div>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}

                    {/* View Full Stack Footer Link */}
                    <li className="mt-4 border-t border-white/5 pt-4 md:col-span-2">
                      <NavigationMenuLink asChild>
                        <Link
                          href="/architecture"
                          onClick={() => {
                            // If already on the architecture page, force a smooth scroll to the top
                            if (window.location.pathname === '/architecture') {
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                              // Pass 'null' instead of an empty string to avoid the Next.js state mutation bug
                              window.history.pushState(null, '', window.location.pathname);
                            }
                          }}
                          className="text-muted-foreground hover:text-primary flex w-full items-center justify-center p-2 font-mono text-[10px] tracking-[0.3em] uppercase transition-colors"
                        >
                          [ View Full Architecture ]
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Roadmap Link */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={`${navigationMenuTriggerStyle()} text-muted-foreground hover:text-foreground bg-transparent font-mono text-[10px] font-bold tracking-widest uppercase transition-colors hover:bg-white/5`}
                >
                  <Link href="/roadmap">Roadmap</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* About Link */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={`${navigationMenuTriggerStyle()} text-muted-foreground hover:text-foreground bg-transparent font-mono text-[10px] font-bold tracking-widest uppercase transition-colors hover:bg-white/5`}
                >
                  <Link href="/about">About Arkhon</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Tactical Node Status for Tokyo Node */}
        <div className="hidden items-center gap-6 md:flex">
          <div className="bg-primary/5 border-primary/20 text-primary flex items-center gap-2 rounded border px-3 py-1.5 font-mono text-[9px] font-bold tracking-widest">
            <span className="bg-terminal h-1.5 w-1.5 animate-pulse rounded-full" />
            JP_TYO_NODE // ACTIVE
          </div>
          <Button
            asChild
            variant="outline"
            className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground h-9 rounded-none text-xs tracking-widest"
          >
            <Link href="/contact">UPLINK</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-primary">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="border-l-white/10 bg-black/95 p-6 backdrop-blur-xl"
            >
              <SheetHeader className="mb-8 text-left">
                <SheetTitle className="text-primary font-mono text-xs tracking-[0.3em] uppercase">
                  System_Menu
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-8">
                <div className="flex flex-col space-y-6">
                  <Link
                    href="/ceres"
                    className="text-foreground hover:text-primary text-xl font-bold tracking-tight uppercase transition-colors"
                  >
                    Ceres
                  </Link>

                  <div className="flex flex-col space-y-3">
                    <Link
                      href="/architecture"
                      className="text-foreground hover:text-primary text-xl font-bold tracking-tight uppercase transition-colors"
                    >
                      Architecture
                    </Link>
                    <div className="flex flex-col space-y-2 border-l border-white/10 pl-4">
                      {ARCHITECTURE_LINKS.map((link) => (
                        <Link
                          key={link.title}
                          href={link.href}
                          className="text-muted-foreground hover:text-foreground font-mono text-[10px] tracking-widest uppercase transition-colors"
                        >
                          {link.title}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/roadmap"
                    className="text-foreground hover:text-primary text-xl font-bold tracking-tight uppercase transition-colors"
                  >
                    Roadmap
                  </Link>
                  <Link
                    href="/about"
                    className="text-foreground hover:text-primary text-xl font-bold tracking-tight uppercase transition-colors"
                  >
                    About Arkhon
                  </Link>
                </div>
                <div className="h-px w-full bg-white/5" />
                <div className="flex flex-col space-y-4">
                  <Link
                    href="/contact"
                    className="text-primary hover:text-primary/80 text-lg font-bold tracking-tight uppercase transition-colors"
                  >
                    Uplink / Contact
                  </Link>
                </div>
                <div className="mt-auto pt-10">
                  <div className="bg-primary/5 border-primary/20 text-primary inline-flex items-center gap-2 rounded border px-3 py-2 font-mono text-[9px]">
                    <span className="bg-terminal h-1 w-1 animate-pulse rounded-full" />
                    JP_TYO_NODE // ACTIVE
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
