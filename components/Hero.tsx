"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen md:h-screen flex items-center py-12 md:py-0 overflow-hidden bg-navy">
      {/* Animated Background with Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-dark to-navy-light"></div>
        
        {/* Animated Glowing Shapes - Responsive sizes */}
        <motion.div
          className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-gold/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-gold/5 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Diagonal Overlay Lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full">
            <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
              <defs>
                <linearGradient id="diagonal-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                </linearGradient>
              </defs>
              <line x1="0" y1="0" x2="1200" y2="800" stroke="url(#diagonal-gradient)" strokeWidth="2" />
              <line x1="0" y1="200" x2="1200" y2="1000" stroke="url(#diagonal-gradient)" strokeWidth="1.5" />
              <line x1="0" y1="400" x2="1200" y2="1200" stroke="url(#diagonal-gradient)" strokeWidth="1" />
            </svg>
          </div>
        </div>

        {/* Geometric Shapes - Hidden on mobile */}
        <motion.div
          className="hidden md:block absolute top-20 right-20 w-32 h-32 border border-gold/20 rotate-45"
          animate={{
            rotate: [45, 225, 45],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="hidden md:block absolute bottom-32 right-40 w-24 h-24 border border-gold/15 rotate-12"
          animate={{
            rotate: [12, 372, 12],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Left Side - Player Image */}
          <motion.div
            className="relative order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-full aspect-[3/4] max-w-[280px] sm:max-w-[320px] mx-auto md:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent rounded-lg blur-2xl"></div>
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <Image
                  src="/images/hero-potrait.JPG"
                  alt="Jaleel Kotun"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 280px, (max-width: 1024px) 400px, 50vw"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side - Text Content */}
          <motion.div
            className="order-1 md:order-2 text-white text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {/* Jersey Number */}
            <motion.div
              className="mb-2 md:mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-gold">
                #33
              </span>
            </motion.div>

            {/* Name */}
            <motion.div
              className="mb-1 md:mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold tracking-tight leading-[0.9]">
                JALEEL
              </h1>
            </motion.div>

            <motion.div
              className="mb-4 md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold tracking-tight leading-[0.9] text-gold">
                KOTUN
              </h2>
            </motion.div>

            {/* Position */}
            <motion.div
              className="mb-4 md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-sans font-medium text-white/90 tracking-wide uppercase">
                Forward
              </p>
            </motion.div>

            {/* CGPA */}
            <motion.div
              className="mb-6 md:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
            >
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-gold/20 to-gold/10 border border-gold/30 rounded-lg backdrop-blur-sm">
                <span className="text-lg sm:text-xl md:text-2xl font-display font-bold text-gold tracking-wide">
                  CGPA: 4.0
                </span>
              </div>
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.a
                href="/bio"
                className="px-6 py-3 md:px-8 md:py-4 bg-gold text-navy font-display font-semibold rounded-lg text-center text-base md:text-lg tracking-wide shadow-lg shadow-gold/30"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(212, 175, 55, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Learn More
              </motion.a>
              <motion.a
                href="/stats"
                className="px-6 py-3 md:px-8 md:py-4 bg-transparent border-2 border-white text-white font-display font-semibold rounded-lg text-center text-base md:text-lg tracking-wide hover:bg-white/10"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                View Stats
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Subtle bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-navy to-transparent pointer-events-none"></div>
    </section>
  );
}
