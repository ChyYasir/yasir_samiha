"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const [particles, setParticles] = useState<
    Array<{ id: number; left: string; delay: number; duration: number }>
  >([]);

  useEffect(() => {
    // Generate particles
    const particleArray = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 15,
      duration: 15 + Math.random() * 10,
    }));
    setParticles(particleArray);
  }, []);

  return (
    <>
      {/* Base Ivory Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="fixed inset-0 bg-ivory -z-50"
      />

      {/* Subtle Linen Gradient Overlay */}
      <motion.div
        className="fixed inset-0 -z-40"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(243, 239, 231, 0.4) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(243, 239, 231, 0.4) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 80%, rgba(243, 239, 231, 0.4) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(243, 239, 231, 0.4) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Champagne Accent Overlay */}
      <motion.div
        className="fixed inset-0 -z-35"
        animate={{
          background: [
            "radial-gradient(circle at 30% 30%, rgba(212, 199, 180, 0.08) 0%, transparent 40%)",
            "radial-gradient(circle at 70% 70%, rgba(212, 199, 180, 0.08) 0%, transparent 40%)",
            "radial-gradient(circle at 30% 30%, rgba(212, 199, 180, 0.08) 0%, transparent 40%)",
          ],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Particles (Gold) */}
      <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="particle absolute"
            style={{
              left: particle.left,
            }}
            animate={{
              y: [1000, -1000],
              x: [0, Math.sin(particle.id) * 30],
              opacity: [0, 0.3, 0.3, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Soft Vignette Effect */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-linen/30" />
      </div>
    </>
  );
}
