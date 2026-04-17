'use client';

import React from 'react';
import PantheonHero from '@/components/architecture/PantheonHero';
import VestaTerminal from '@/components/architecture/VestaTerminal';
import CaelumCloud from '@/components/architecture/CaelumCloud';
import MercuryGateway from '@/components/architecture/MercuryGateway';
import TellusKernel from '@/components/architecture/TellusKernel';

export default function ArchitecturePage() {
  return (
    <div className="relative min-h-screen w-full bg-transparent">
      {/* ========================================= */}
      {/* GLOBAL PAGE BACKGROUNDS                   */}
      {/* ========================================= */}

      {/* FIX 1: -z-10 puts this BEHIND the footer, preventing the dimming effect.
        FIX 2: Removed backdrop-blur so the NeuralField WebGL canvas can actually render. 
      */}
      <div className="bg-background/30 pointer-events-none fixed inset-0 -z-10" />

      {/* Tactical Grid Overlay */}
      <div className="pointer-events-none fixed inset-0 -z-10 [background-image:linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [background-size:40px_40px] opacity-10" />

      {/* ========================================= */}
      {/* THE ARCHITECTURE STACK                    */}
      {/* ========================================= */}
      <div className="relative z-10 flex flex-col">
        {/* 1. The Interactive Node Map */}
        <PantheonHero />

        {/* 2. Ground Control (Mission Compiler) */}
        <VestaTerminal />

        {/* 3. Global Telemetry (RaaS Backend) */}
        <CaelumCloud />

        {/* 4. Air-Gapped Mesh (The Mud Boundary) */}
        <MercuryGateway />

        {/* 5. Edge OS (Sub-Millisecond Execution) */}
        <TellusKernel />
      </div>
    </div>
  );
}
