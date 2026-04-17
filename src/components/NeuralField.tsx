'use client';

import React, { useEffect, useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';

export function NeuralField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollYProgress } = useScroll();

  // Stretch particles based on scroll speed
  const scrollVelocity = useTransform(scrollYProgress, [0, 1], [1, 15]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: { x: number; y: number; size: number; speed: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = Array.from({ length: 150 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speed: 0.5 + Math.random() * 2,
      }));
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const velocity = scrollVelocity.get();

      // Arkhon Safety Orange
      ctx.fillStyle = 'rgba(255, 87, 34, 0.4)';

      particles.forEach((p) => {
        // Draw particle as a vertical "data streak"
        ctx.beginPath();
        ctx.roundRect(p.x, p.y, p.size, p.size * (1 + velocity), 2);
        ctx.fill();

        p.y += p.speed * (1 + velocity * 0.1);
        if (p.y > canvas.height) p.y = -20;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('resize', resize);
    resize();
    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [scrollVelocity]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-1] bg-[#030303]"
      style={{ filter: 'blur(0.5px)' }}
    />
  );
}
