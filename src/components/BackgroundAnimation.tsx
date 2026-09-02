'use client';

import React, { useEffect, useRef } from 'react';

export const BackgroundAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Glowing Ambient Orbs for smooth, high-end, non-distracting background
    const orbs = [
      { x: canvas.width * 0.2, y: canvas.height * 0.25, radius: 280, vx: 0.3, vy: 0.2, color: 'rgba(120, 204, 109, 0.08)' },
      { x: canvas.width * 0.8, y: canvas.height * 0.75, radius: 340, vx: -0.25, vy: -0.35, color: 'rgba(15, 118, 110, 0.12)' },
      { x: canvas.width * 0.5, y: canvas.height * 0.5, radius: 240, vx: -0.2, vy: 0.3, color: 'rgba(52, 211, 153, 0.06)' },
      { x: canvas.width * 0.85, y: canvas.height * 0.2, radius: 220, vx: 0.15, vy: -0.2, color: 'rgba(120, 204, 109, 0.06)' }
    ];

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Move & render each soft glowing ambient orb
      orbs.forEach((orb) => {
        orb.x += orb.vx;
        orb.y += orb.vy;

        // Bounce gently off screen boundaries
        if (orb.x < -100 || orb.x > canvas.width + 100) orb.vx *= -1;
        if (orb.y < -100 || orb.y > canvas.height + 100) orb.vy *= -1;

        const gradient = ctx.createRadialGradient(
          orb.x,
          orb.y,
          0,
          orb.x,
          orb.y,
          orb.radius
        );

        gradient.addColorStop(0, orb.color);
        gradient.addColorStop(0.5, orb.color.replace('0.', '0.04'));
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-100 transition-opacity duration-1000"
    />
  );
};
