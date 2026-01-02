"use client";

import { motion } from "framer-motion";

export default function FloralBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {/* Layer 1: Main Pattern - Slow Drift Right - ALWAYS VISIBLE */}
      <motion.div
        initial={{ opacity: 0, x: 0, y: 0 }}
        animate={{
          opacity: [0.08, 0.12, 0.08],
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/floral-pattern.jpg)",
          backgroundSize: "800px 800px",
          backgroundRepeat: "repeat",
          filter:
            "sepia(0.3) hue-rotate(-10deg) brightness(0.95) saturate(0.9)",
          mixBlendMode: "multiply",
        }}
      />

      {/* Layer 2: Pattern Overlay - Slow Drift Left - ALWAYS VISIBLE */}
      <motion.div
        initial={{ opacity: 0, x: 0, y: 0 }}
        animate={{
          opacity: [0.06, 0.1, 0.06],
          x: [0, -80, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/floral-pattern.jpg)",
          backgroundSize: "700px 700px",
          backgroundRepeat: "repeat",
          filter:
            "sepia(0.25) hue-rotate(-5deg) brightness(0.98) saturate(0.85)",
          mixBlendMode: "multiply",
        }}
      />

      {/* Layer 3: Pattern Overlay - Vertical Drift - ALWAYS VISIBLE */}
      <motion.div
        initial={{ opacity: 0, x: 0, y: 0 }}
        animate={{
          opacity: [0.05, 0.09, 0.05],
          x: [0, 60, 0],
          y: [0, -60, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 10,
        }}
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/floral-pattern.jpg)",
          backgroundSize: "900px 900px",
          backgroundRepeat: "repeat",
          filter:
            "sepia(0.35) hue-rotate(-12deg) brightness(0.92) saturate(0.88)",
          mixBlendMode: "multiply",
        }}
      />

      {/* Layer 4: Large Pattern - Slow Rotation - DESKTOP ONLY */}
      <motion.div
        initial={{ opacity: 0, scale: 1, rotate: 0 }}
        animate={{
          opacity: [0.04, 0.08, 0.04],
          scale: [1, 1.08, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 15,
        }}
        className="absolute inset-0 hidden lg:block"
        style={{
          backgroundImage: "url(/floral-pattern.jpg)",
          backgroundSize: "1000px 1000px",
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
          filter:
            "sepia(0.28) hue-rotate(-8deg) brightness(1.0) saturate(0.82)",
          mixBlendMode: "multiply",
        }}
      />

      {/* Layer 5: Focused Corner Accent - Top Right - DESKTOP ONLY */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: [0.1, 0.14, 0.1],
          scale: [1, 1.1, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
          rotate: [0, 3, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        className="absolute -top-20 -right-20 w-[600px] h-[600px] hidden lg:block"
        style={{
          backgroundImage: "url(/floral-pattern.jpg)",
          backgroundSize: "600px 600px",
          backgroundRepeat: "no-repeat",
          filter:
            "sepia(0.32) hue-rotate(-6deg) brightness(0.96) saturate(0.86)",
          mixBlendMode: "multiply",
        }}
      />

      {/* Layer 6: Focused Corner Accent - Bottom Left - DESKTOP ONLY */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: [0.11, 0.15, 0.11],
          scale: [1, 1.12, 1],
          x: [0, -25, 0],
          y: [0, 25, 0],
          rotate: [0, -4, 0],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 7,
        }}
        className="absolute -bottom-20 -left-20 w-[650px] h-[650px] hidden lg:block"
        style={{
          backgroundImage: "url(/floral-pattern.jpg)",
          backgroundSize: "650px 650px",
          backgroundRepeat: "no-repeat",
          filter:
            "sepia(0.3) hue-rotate(-9deg) brightness(0.94) saturate(0.87)",
          mixBlendMode: "multiply",
        }}
      />

      {/* Layer 7: Accent - Center Right - DESKTOP ONLY */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.07, 0.11, 0.07],
          x: [0, 20, 0],
          y: [0, -30, 0],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 38,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 12,
        }}
        className="absolute top-1/3 -right-10 w-[500px] h-[500px] hidden lg:block"
        style={{
          backgroundImage: "url(/floral-pattern.jpg)",
          backgroundSize: "500px 500px",
          backgroundRepeat: "no-repeat",
          filter:
            "sepia(0.27) hue-rotate(-7deg) brightness(0.97) saturate(0.84)",
          mixBlendMode: "multiply",
        }}
      />

      {/* Layer 8: Accent - Center Left - DESKTOP ONLY */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.09, 0.12, 0.09],
          x: [0, -18, 0],
          y: [0, 28, 0],
          scale: [1, 1.07, 1],
        }}
        transition={{
          duration: 36,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 18,
        }}
        className="absolute top-1/2 -left-10 w-[550px] h-[550px] hidden lg:block"
        style={{
          backgroundImage: "url(/floral-pattern.jpg)",
          backgroundSize: "550px 550px",
          backgroundRepeat: "no-repeat",
          filter:
            "sepia(0.31) hue-rotate(-11deg) brightness(0.93) saturate(0.89)",
          mixBlendMode: "multiply",
        }}
      />

      {/* Soft Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-linen/10 via-transparent to-linen/10 pointer-events-none" />
    </div>
  );
}
