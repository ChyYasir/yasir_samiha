"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const [particles, setParticles] = useState<
    Array<{ id: number; left: string; delay: number; duration: number }>
  >([]);

  useEffect(() => {
    // Generate particles
    const particleArray = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 15,
      duration: 15 + Math.random() * 10,
    }));
    setParticles(particleArray);
  }, []);

  return (
    <>
      {/* Base Gradient Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="fixed inset-0 bg-gradient-to-br from-emerald-dark via-emerald to-emerald-dark -z-50"
      />

      {/* Animated Gradient Overlay */}
      <motion.div
        className="fixed inset-0 -z-40"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(201, 169, 97, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(201, 169, 97, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 80%, rgba(201, 169, 97, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(201, 169, 97, 0.15) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Islamic Pattern Overlay */}
      <div className="fixed inset-0 islamic-pattern opacity-30 -z-30" />

      {/* Floating Particles */}
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
              x: [0, Math.sin(particle.id) * 50],
              opacity: [0, 1, 1, 0],
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

      {/* Vignette Effect */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-emerald-dark/50" />
      </div>
    </>
  );
}
