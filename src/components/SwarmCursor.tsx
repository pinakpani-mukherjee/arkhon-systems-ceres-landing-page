'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

const PARTICLE_COUNT = 12; // Increased for a denser swarm
const FADE_DELAY = 500; // Faster fade-away (0.5 seconds)

export function SwarmCursor() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Increased stiffness for a more "responsive" leader
  const springConfig = { damping: 30, stiffness: 400 };
  const mainX = useSpring(mouseX, springConfig);
  const mainY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      if (timerRef.current) clearTimeout(timerRef.current);

      timerRef.current = setTimeout(() => {
        setIsVisible(false);
      }, FADE_DELAY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-9999">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }} // Snappier exit
          >
            {/* The Leader Node (Safety Orange) */}
            <motion.div
              style={{ x: mainX, y: mainY }}
              className="bg-accent1 absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_0_20px_rgba(255,87,34,0.9)]"
            />

            {/* High-Density Swarm Trail */}
            {[...Array(PARTICLE_COUNT)].map((_, i) => (
              <Follower key={i} index={i} leaderX={mainX} leaderY={mainY} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Follower({ index, leaderX, leaderY }: { index: number; leaderX: any; leaderY: any }) {
  // Proportional lag: Further particles are "heavier"
  const x = useSpring(leaderX, {
    stiffness: 200 - index * 15,
    damping: 30 + index * 2,
  });
  const y = useSpring(leaderY, {
    stiffness: 200 - index * 15,
    damping: 30 + index * 2,
  });

  return (
    <motion.div
      style={{
        x,
        y,
        scale: 1 - index * 0.06,
        opacity: 0.6 - index * 0.04,
      }}
      className="bg-accent1/50 absolute h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
    />
  );
}
