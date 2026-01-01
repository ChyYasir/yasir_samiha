"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AnimatedBackground from "./AnimatedBackground";
import FloralBackground from "./FloralBackground";

export default function WeddingInvitation() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [showSplitLayout, setShowSplitLayout] = useState(false);

  // Detect desktop screen size
  useEffect(() => {
    const checkDesktop = () => {
      const desktop = window.innerWidth >= 1024;
      setIsDesktop(desktop);
      if (!desktop) {
        setShowSplitLayout(false);
      }
    };

    checkDesktop();
    window.addEventListener("resize", checkDesktop);

    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  // Trigger split-screen animation after initial animations complete
  useEffect(() => {
    if (!isDesktop) return;

    const timer = setTimeout(() => {
      setShowSplitLayout(true);
    }, 7000);

    return () => clearTimeout(timer);
  }, [isDesktop]);

  // Intro content component
  const IntroContent = ({ isInitial = false }: { isInitial?: boolean }) => (
    <>
      {/* Bismillah */}
      <section className="text-center space-y-3 lg:space-y-3.5 xl:space-y-4 2xl:space-y-6">
        {!isInitial && (
          <div className="h-px w-32 lg:w-36 xl:w-40 2xl:w-48 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent" />
        )}

        <motion.h1
          initial={isInitial ? { opacity: 0, y: -30 } : false}
          animate={isInitial ? { opacity: 1, y: 0 } : undefined}
          transition={
            isInitial
              ? { duration: 0.8, delay: 0.2, ease: "easeOut" }
              : undefined
          }
          className="font-arabic text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-soft-gold leading-relaxed px-4"
          style={{
            textShadow:
              "0 2px 4px rgba(0, 0, 0, 0.15), 0 0 20px rgba(166, 124, 82, 0.3)",
          }}
        >
          بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </motion.h1>

        {isInitial ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-taupe/70 text-xs lg:text-xs xl:text-sm 2xl:text-base font-normal tracking-wider italic"
            style={{ fontWeight: 500 }}
          >
            In the name of Almighty Allah
          </motion.p>
        ) : (
          <p
            className="text-taupe/70 text-xs lg:text-xs xl:text-sm 2xl:text-base font-normal tracking-wider italic"
            style={{ fontWeight: 500 }}
          >
            In the name of Almighty Allah
          </p>
        )}

        {!isInitial && (
          <div className="h-px w-32 lg:w-36 xl:w-40 2xl:w-48 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent" />
        )}
      </section>

      {/* Invitation Message */}
      <section className="text-center px-4">
        {isInitial ? (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
            className="text-elegant-dark text-base lg:text-base xl:text-lg 2xl:text-xl font-normal leading-relaxed tracking-wide"
            style={{
              fontWeight: 500,
            }}
          >
            I cordially request the pleasure of your gracious presence and
            blessings at our Wedding Ceremony
          </motion.p>
        ) : (
          <p
            className="text-elegant-dark text-base lg:text-base xl:text-lg 2xl:text-xl font-normal leading-relaxed tracking-wide"
            style={{ fontWeight: 500 }}
          >
            I cordially request the pleasure of your gracious presence and
            blessings at our Wedding Ceremony
          </p>
        )}
      </section>

      {/* Couple Names */}
      <section className="text-center space-y-3 lg:space-y-3.5 xl:space-y-4 2xl:space-y-6 py-6 lg:py-8 xl:py-10 2xl:py-12">
        {isInitial ? (
          <>
            {/* Yasir Rahman - Character by Character */}
            <div className="min-h-[4rem] lg:min-h-[4.5rem] xl:min-h-[5rem] 2xl:min-h-[6rem] flex items-center justify-center">
              <h2
                className="font-names text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-elegant-dark"
                style={{
                  textShadow:
                    "0 2px 8px rgba(43, 24, 16, 0.25), 0 4px 16px rgba(43, 24, 16, 0.15)",
                  fontWeight: 400,
                  letterSpacing: "0.02em",
                }}
              >
                {"Yasir Rahman".split("").map((char, index) => (
                  <motion.span
                    key={`yasir-${index}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.1,
                      delay: 2.5 + index * 0.12,
                    }}
                    style={{
                      display: "inline-block",
                      minWidth: char === " " ? "0.3em" : "auto",
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </h2>
            </div>

            {/* Ampersand */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 4.2, ease: "easeInOut" }}
              className="relative flex items-center justify-center py-2 lg:py-2.5 xl:py-3 2xl:py-4"
            >
              <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent via-gold to-transparent" />
              <motion.span
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: 4.4, ease: "easeOut" }}
                className="px-4 lg:px-4.5 xl:px-5 2xl:px-6 text-gold text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-heading italic"
              >
                &
              </motion.span>
              <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-gold via-gold to-transparent" />
            </motion.div>

            {/* Ishraq Samiha - Character by Character */}
            <div className="min-h-[4rem] lg:min-h-[4.5rem] xl:min-h-[5rem] 2xl:min-h-[6rem] flex items-center justify-center">
              <h2
                className="font-names text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-elegant-dark"
                style={{
                  textShadow:
                    "0 2px 8px rgba(43, 24, 16, 0.25), 0 4px 16px rgba(43, 24, 16, 0.15)",
                  fontWeight: 400,
                  letterSpacing: "0.02em",
                }}
              >
                {"Ishraq Samiha".split("").map((char, index) => (
                  <motion.span
                    key={`ishraq-${index}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.1,
                      delay: 5.0 + index * 0.12,
                    }}
                    style={{
                      display: "inline-block",
                      minWidth: char === " " ? "0.3em" : "auto",
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </h2>
            </div>
          </>
        ) : (
          <>
            <h2
              className="font-names text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-elegant-dark"
              style={{
                textShadow:
                  "0 2px 8px rgba(43, 24, 16, 0.25), 0 4px 16px rgba(43, 24, 16, 0.15)",
                fontWeight: 400,
                letterSpacing: "0.02em",
              }}
            >
              Yasir Rahman
            </h2>

            <div className="relative flex items-center justify-center py-2 lg:py-2.5 xl:py-3 2xl:py-4">
              <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent via-gold to-transparent" />
              <span className="px-4 lg:px-4.5 xl:px-5 2xl:px-6 text-gold text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-heading italic">
                &
              </span>
              <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-gold via-gold to-transparent" />
            </div>

            <h2
              className="font-names text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-elegant-dark"
              style={{
                textShadow:
                  "0 2px 8px rgba(43, 24, 16, 0.25), 0 4px 16px rgba(43, 24, 16, 0.15)",
                fontWeight: 400,
                letterSpacing: "0.02em",
              }}
            >
              Ishraq Samiha
            </h2>
          </>
        )}
      </section>
    </>
  );

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <FloralBackground />

      <div className="relative w-full min-h-screen flex items-center justify-center py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8 z-20">
        {isDesktop ? (
          showSplitLayout ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-7xl flex items-center gap-6 lg:gap-7 xl:gap-8 2xl:gap-12"
            >
              {/* Left Section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
                className="w-[45%] space-y-4 lg:space-y-5 xl:space-y-6 2xl:space-y-8"
              >
                <IntroContent />
              </motion.div>

              {/* Vertical Divider */}
              <motion.div
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="flex items-center gap-1.5 lg:gap-1.5 xl:gap-2 h-full py-8 lg:py-10 xl:py-12 2xl:py-16"
              >
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "80px" }}
                  transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                  className="w-px bg-gradient-to-b from-transparent via-taupe-gold to-transparent lg:h-[90px] xl:h-[100px] 2xl:h-[120px]"
                />

                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "140px" }}
                  transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                  className="w-px bg-gradient-to-b from-transparent via-gold to-transparent lg:h-[155px] xl:h-[170px] 2xl:h-[200px]"
                />

                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "80px" }}
                  transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
                  className="w-px bg-gradient-to-b from-transparent via-taupe-gold to-transparent lg:h-[90px] xl:h-[100px] 2xl:h-[120px]"
                />
              </motion.div>

              {/* Right Section */}
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 1.2,
                  delay: 1.2,
                  ease: [0.43, 0.13, 0.23, 0.96],
                }}
                className="w-[45%] space-y-4 lg:space-y-5 xl:space-y-6 2xl:space-y-8"
              >
                <div className="text-center space-y-2 lg:space-y-2.5 xl:space-y-3 2xl:space-y-4">
                  <h3 className="text-gold text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-heading font-semibold tracking-widest uppercase">
                    Wedding Ceremony
                  </h3>
                  <div className="h-px w-24 lg:w-26 xl:w-28 2xl:w-32 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent" />
                </div>

                <div className="glass-card rounded-2xl p-6 lg:p-7 xl:p-8 2xl:p-10 space-y-5 lg:space-y-5 xl:space-y-6 2xl:space-y-8">
                  <div className="text-center space-y-2 lg:space-y-2 xl:space-y-3 border-b border-gold/20 pb-4 lg:pb-4 xl:pb-5 2xl:pb-6">
                    <p className="text-gold/80 text-xs lg:text-xs xl:text-sm font-heading uppercase tracking-widest">
                      Date
                    </p>
                    <p className="text-elegant-dark text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-heading font-light">
                      Saturday
                    </p>
                    <p className="text-elegant-dark text-lg lg:text-lg xl:text-xl 2xl:text-2xl font-light tracking-wide">
                      17 January 2026
                    </p>
                  </div>

                  <div className="text-center space-y-2 lg:space-y-2 xl:space-y-3 border-b border-gold/20 pb-4 lg:pb-4 xl:pb-5 2xl:pb-6">
                    <p className="text-gold/80 text-xs lg:text-xs xl:text-sm font-heading uppercase tracking-widest">
                      Time
                    </p>
                    <p className="text-elegant-dark text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-heading font-bold tracking-wider">
                      08:30 PM
                    </p>
                  </div>

                  <div className="text-center space-y-3 lg:space-y-3 xl:space-y-4">
                    <p className="text-gold/80 text-xs lg:text-xs xl:text-sm font-heading uppercase tracking-widest">
                      Venue
                    </p>
                    <div className="space-y-1.5 lg:space-y-1.5 xl:space-y-2">
                      <p className="text-elegant-dark text-xl lg:text-xl xl:text-2xl 2xl:text-3xl font-heading font-light">
                        Shoronika Community Center
                      </p>
                      <p className="text-taupe/70 text-base lg:text-base xl:text-lg 2xl:text-xl font-light">
                        Lovelane, Chattogram
                      </p>
                    </div>
                    <div className="pt-3 lg:pt-3 xl:pt-4">
                      <a
                        href="https://maps.google.com/?q=Shoronika+Community+Center+Lovelane+Chattogram"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 lg:px-5 xl:px-6 py-2.5 lg:py-2.5 xl:py-3 border border-gold/40 rounded-full text-gold hover:bg-gold/10 hover:border-gold transition-all duration-300 text-xs lg:text-xs xl:text-sm font-heading uppercase tracking-widest"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 lg:h-4 lg:w-4 xl:h-5 xl:w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        View on Map
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="initial-centered"
              className="w-full max-w-7xl flex items-center justify-center"
            >
              <div className="w-[45%] space-y-4 lg:space-y-5 xl:space-y-6 2xl:space-y-8">
                <IntroContent isInitial={true} />
              </div>
            </motion.div>
          )
        ) : (
          <div className="w-full max-w-6xl space-y-12 md:space-y-16 lg:space-y-20">
            <motion.section
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-center space-y-6 pt-8"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
                className="h-px w-48 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent"
              />

              <motion.h1
                className="font-arabic text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-soft-gold leading-relaxed px-4"
                style={{
                  textShadow:
                    "0 2px 4px rgba(0, 0, 0, 0.15), 0 0 20px rgba(166, 124, 82, 0.3)",
                }}
              >
                بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-taupe/70 text-sm md:text-base lg:text-lg font-normal tracking-wider italic"
                style={{ fontWeight: 500 }}
              >
                In the name of Almighty Allah
              </motion.p>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 1.0, ease: "easeInOut" }}
                className="h-px w-48 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent"
              />
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
              className="text-center px-4"
            >
              <p
                className="text-elegant-dark text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-relaxed tracking-wide max-w-3xl mx-auto"
                style={{ fontWeight: 500 }}
              >
                I cordially request the pleasure of your gracious presence and
                blessings at our Wedding Ceremony
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 2.2,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
              className="text-center space-y-8 relative py-8"
            >
              <motion.div
                className="absolute inset-0 flex items-center justify-center -z-10"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1.5, opacity: 0.05 }}
                transition={{ duration: 1.5, delay: 2.5, ease: "easeOut" }}
              >
                <div className="w-96 h-96 bg-gold rounded-full blur-3xl" />
              </motion.div>

              <div className="space-y-6">
                {/* Yasir Rahman - Character by Character */}
                <div className="min-h-[3rem] sm:min-h-[3.5rem] md:min-h-[4rem] lg:min-h-[5rem] flex items-center justify-center">
                  <h2
                    className="font-names text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-elegant-dark"
                    style={{
                      textShadow:
                        "0 2px 8px rgba(43, 24, 16, 0.25), 0 4px 16px rgba(43, 24, 16, 0.15)",
                      fontWeight: 400,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {"Yasir Rahman".split("").map((char, index) => (
                      <motion.span
                        key={`mobile-yasir-${index}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          duration: 0.1,
                          delay: 2.5 + index * 0.12,
                        }}
                        style={{
                          display: "inline-block",
                          minWidth: char === " " ? "0.3em" : "auto",
                        }}
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                  </h2>
                </div>

                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 4.2, ease: "easeInOut" }}
                  className="relative flex items-center justify-center py-6"
                >
                  <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent via-gold to-transparent" />
                  <motion.span
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 4.4, ease: "easeOut" }}
                    className="px-8 text-gold text-4xl md:text-5xl lg:text-6xl font-heading italic"
                  >
                    &
                  </motion.span>
                  <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-gold via-gold to-transparent" />
                </motion.div>

                {/* Ishraq Samiha - Character by Character */}
                <div className="min-h-[3rem] sm:min-h-[3.5rem] md:min-h-[4rem] lg:min-h-[5rem] flex items-center justify-center">
                  <h2
                    className="font-names text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-elegant-dark"
                    style={{
                      textShadow:
                        "0 2px 8px rgba(43, 24, 16, 0.25), 0 4px 16px rgba(43, 24, 16, 0.15)",
                      fontWeight: 400,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {"Ishraq Samiha".split("").map((char, index) => (
                      <motion.span
                        key={`mobile-ishraq-${index}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          duration: 0.1,
                          delay: 5.0 + index * 0.12,
                        }}
                        style={{
                          display: "inline-block",
                          minWidth: char === " " ? "0.3em" : "auto",
                        }}
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                  </h2>
                </div>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 6.5, ease: "easeOut" }}
              className="space-y-10 py-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 6.8, ease: "easeOut" }}
                className="text-center space-y-4"
              >
                <h3 className="text-gold text-2xl md:text-3xl lg:text-4xl font-heading font-semibold tracking-widest uppercase">
                  Wedding Ceremony
                </h3>
                <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 7.2, ease: "easeOut" }}
                className="max-w-3xl mx-auto"
              >
                <div className="glass-card rounded-2xl p-8 md:p-12 lg:p-16 space-y-10">
                  <div className="text-center space-y-3 border-b border-gold/20 pb-8">
                    <p className="text-gold/80 text-sm md:text-base font-heading uppercase tracking-widest">
                      Date
                    </p>
                    <p className="text-charcoal text-2xl md:text-3xl lg:text-4xl font-heading font-light">
                      Saturday
                    </p>
                    <p className="text-charcoal text-xl md:text-2xl lg:text-3xl font-light tracking-wide">
                      17 January 2026
                    </p>
                  </div>

                  <div className="text-center space-y-3 border-b border-gold/20 pb-8">
                    <p className="text-gold/80 text-sm md:text-base font-heading uppercase tracking-widest">
                      Time
                    </p>
                    <p className="text-charcoal text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-wider">
                      08:30 PM
                    </p>
                  </div>

                  <div className="text-center space-y-4">
                    <p className="text-gold/80 text-sm md:text-base font-heading uppercase tracking-widest">
                      Venue
                    </p>
                    <div className="space-y-2">
                      <p className="text-charcoal text-xl md:text-2xl lg:text-3xl font-heading font-light">
                        Shoronika Community Center
                      </p>
                      <p className="text-taupe/70 text-base md:text-lg lg:text-xl font-light">
                        Lovelane, Chattogram
                      </p>
                    </div>
                    <div className="pt-4">
                      <a
                        href="https://maps.google.com/?q=Shoronika+Community+Center+Lovelane+Chattogram"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 border border-gold/40 rounded-full text-gold hover:bg-gold/10 hover:border-gold transition-all duration-300 text-sm font-heading uppercase tracking-widest"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        View on Map
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.section>
          </div>
        )}
      </div>
    </div>
  );
}
