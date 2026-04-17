import { DeploymentRoadmap } from '@/components/DeploymentRoadmap';
import { Hero } from '@/components/Hero';
import { MarketThesis } from '@/components/MarketThesis';
import { NodeCommand } from '@/components/NodeCommand';
import { PantheonGrid } from '@/components/PantheonGrid';

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      <Hero />
      <MarketThesis />
      <PantheonGrid />
      <DeploymentRoadmap />
      <NodeCommand />
      {/* Additional sections like 'Use Cases' or 'Testimonials' can go here */}
    </div>
  );
}
