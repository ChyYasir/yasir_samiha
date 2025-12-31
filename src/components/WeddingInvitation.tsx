"use client";

import { motion } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";

export default function WeddingInvitation() {
  return (
    <div className="relative min-h-screen">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Main Content Container */}
      <div className="relative w-full min-h-screen flex items-center justify-center py-16 md:py-20 px-4">
        <div className="w-full max-w-6xl space-y-12 md:space-y-16 lg:space-y-20">
          {/* Section 1: Bismillah Opening */}
          <motion.section
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
            className="text-center space-y-6 pt-8"
          >
            {/* Top Decorative Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" }}
              className="h-px w-48 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent"
            />

            {/* Arabic Bismillah */}
            <motion.h1
              className="font-arabic text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-ivory leading-relaxed px-4"
              animate={{
                textShadow: [
                  "0 0 20px rgba(250, 248, 243, 0.3)",
                  "0 0 30px rgba(250, 248, 243, 0.5)",
                  "0 0 20px rgba(250, 248, 243, 0.3)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="text-ivory/70 text-sm md:text-base lg:text-lg font-light tracking-wider italic"
            >
              In the name of Almighty Allah
            </motion.p>

            {/* Bottom Decorative Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 1.8, ease: "easeInOut" }}
              className="h-px w-48 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent"
            />
          </motion.section>

          {/* Section 2: Invitation Message */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 2.5, ease: "easeOut" }}
            className="text-center px-4"
          >
            <p className="text-ivory text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed tracking-wide max-w-3xl mx-auto">
              I cordially request the pleasure of your gracious presence and
              blessings at our Wedding Ceremony
            </p>
          </motion.section>

          {/* Section 3: Couple Names */}
          <motion.section
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.5,
              delay: 3.8,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
            className="text-center space-y-8 relative py-8"
          >
            {/* Background Glow */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center -z-10"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1.5, opacity: 0.08 }}
              transition={{ duration: 2, delay: 4, ease: "easeOut" }}
            >
              <div className="w-96 h-96 bg-gold rounded-full blur-3xl" />
            </motion.div>

            {/* Names Container */}
            <div className="space-y-6">
              {/* Bride Name */}
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 4.5, ease: "easeOut" }}
                className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-ivory font-bold tracking-wide gold-glow"
              >
                Ishraq Samiha
              </motion.h2>

              {/* Decorative Divider with Ampersand */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 5.5, ease: "easeInOut" }}
                className="relative flex items-center justify-center py-6"
              >
                <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent via-gold to-transparent" />
                <motion.span
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 6, ease: "easeOut" }}
                  className="px-8 text-gold text-4xl md:text-5xl lg:text-6xl font-heading italic"
                >
                  &
                </motion.span>
                <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-gold via-gold to-transparent" />
              </motion.div>

              {/* Groom Name */}
              <motion.h2
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 6.5, ease: "easeOut" }}
                className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-ivory font-bold tracking-wide gold-glow"
              >
                Yasir Rahman
              </motion.h2>
            </div>
          </motion.section>

          {/* Section 4: Event Details - Elegant Layout */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 7.5, ease: "easeOut" }}
            className="space-y-10 py-8"
          >
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 8, ease: "easeOut" }}
              className="text-center space-y-4"
            >
              <h3 className="text-gold text-2xl md:text-3xl lg:text-4xl font-heading font-semibold tracking-widest uppercase">
                Wedding Ceremony
              </h3>
              <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent" />
            </motion.div>

            {/* Event Information - Centered Elegant Layout */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 8.5, ease: "easeOut" }}
              className="max-w-3xl mx-auto"
            >
              <div className="glass-card rounded-2xl p-8 md:p-12 lg:p-16 space-y-10">
                {/* Date Section */}
                <div className="text-center space-y-3 border-b border-gold/20 pb-8">
                  <p className="text-gold/80 text-sm md:text-base font-heading uppercase tracking-widest">
                    Date
                  </p>
                  <p className="text-ivory text-2xl md:text-3xl lg:text-4xl font-heading font-light">
                    Saturday
                  </p>
                  <p className="text-ivory text-xl md:text-2xl lg:text-3xl font-light tracking-wide">
                    17 January 2026
                  </p>
                </div>

                {/* Time Section */}
                <div className="text-center space-y-3 border-b border-gold/20 pb-8">
                  <p className="text-gold/80 text-sm md:text-base font-heading uppercase tracking-widest">
                    Time
                  </p>
                  <p className="text-ivory text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-wider">
                    08:30 PM
                  </p>
                </div>

                {/* Venue Section */}
                <div className="text-center space-y-4">
                  <p className="text-gold/80 text-sm md:text-base font-heading uppercase tracking-widest">
                    Venue
                  </p>
                  <div className="space-y-2">
                    <p className="text-ivory text-xl md:text-2xl lg:text-3xl font-heading font-light">
                      Shoronika Community Center
                    </p>
                    <p className="text-ivory/70 text-base md:text-lg lg:text-xl font-light">
                      Lovelane, Chattogram
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.section>

          {/* Section 5: Blessings Only Badge */}
          <motion.section
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 9.5, ease: "easeOut" }}
            className="flex justify-center pb-16"
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(201, 169, 97, 0.3)",
                  "0 0 30px rgba(201, 169, 97, 0.5)",
                  "0 0 20px rgba(201, 169, 97, 0.3)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="border-2 border-gold rounded-full px-10 py-4 backdrop-blur-sm bg-ivory/5"
            >
              <p className="text-gold text-lg md:text-xl lg:text-2xl font-heading font-semibold tracking-widest uppercase">
                Blessings Only
              </p>
            </motion.div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
