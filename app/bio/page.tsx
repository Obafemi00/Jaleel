"use client";

import { motion } from "framer-motion";

export default function BioPage() {
  const personalInfo = [
    { label: "Born", value: "2011" },
    { label: "State", value: "Texas" },
    { label: "School", value: "Harmony School of Innovation (Katy)" },
    { label: "Club", value: "Global Football Innovation Academy (GFI)" },
    { label: "League", value: "MLS NEXT Homegrown" },
    { label: "Teams", value: "U15 and U16 (guest)" },
    { label: "Past Club", value: "Juventus Academy Houston" },
    { label: "Height", value: "5'8\"" },
    { label: "Positions", value: "Winger / Forward / Outside Back" },
    { label: "Jersey Number", value: "#33 (forward)" },
    { label: "Class", value: "2029" },
  ];

  const strengths = [
    "Elite acceleration",
    "Advanced dribbling and creativity",
    "Efficient finishing",
    "High-IQ positioning",
    "Versatile in multiple attacking roles",
    "Fast reaction time in the box",
  ];

  const achievements = [
    "MVP — Juventus Academy Houston",
    "Highest Goal Scorer",
    "Best Player of the Season",
  ];

  const invitations = [
    "Juventus Italy Residency Program",
    "Rome City Institute",
  ];

  const usOdp = [
    "2023–2024 Interregional Roster",
    "2024–2025 Interregional Roster",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Header */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-navy mb-4">
            Biography
          </h1>
          <div className="h-1 w-24 bg-gold"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12 md:space-y-16"
        >
          {/* Personal Information */}
          <motion.section variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-navy mb-6 md:mb-8">
              Personal Information
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="p-4 md:p-6 bg-gray-50 rounded-lg border border-gray-100"
                  variants={itemVariants}
                >
                  <div className="text-sm md:text-base font-display font-semibold text-gold mb-1 uppercase tracking-wide">
                    {info.label}
                  </div>
                  <div className="text-base md:text-lg font-sans text-navy">
                    {info.value}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Strengths */}
          <motion.section variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-navy mb-6 md:mb-8">
              Strengths
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {strengths.map((strength, index) => (
                <motion.div
                  key={index}
                  className="p-4 md:p-6 bg-navy text-white rounded-lg"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, backgroundColor: "#0d2540" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full flex-shrink-0"></div>
                    <div className="font-sans text-base md:text-lg">{strength}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Achievements */}
          <motion.section variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-navy mb-6 md:mb-8">
              Achievements
            </h2>
            <div className="space-y-4 md:space-y-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="p-6 md:p-8 bg-gradient-to-r from-gold/10 to-gold/5 rounded-lg border-l-4 border-gold"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-2xl md:text-3xl">🏆</div>
                    <div className="font-display font-semibold text-lg md:text-xl text-navy">
                      {achievement}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Invitations */}
          <motion.section variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-navy mb-6 md:mb-8">
              Invitations
            </h2>
            <div className="space-y-4 md:space-y-6">
              {invitations.map((invitation, index) => (
                <motion.div
                  key={index}
                  className="p-6 md:p-8 bg-navy text-white rounded-lg"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, backgroundColor: "#0d2540" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-2xl md:text-3xl">✈️</div>
                    <div className="font-display font-semibold text-lg md:text-xl">
                      {invitation}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* US ODP */}
          <motion.section variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-navy mb-6 md:mb-8">
              US ODP
            </h2>
            <div className="space-y-4 md:space-y-6">
              {usOdp.map((item, index) => (
                <motion.div
                  key={index}
                  className="p-6 md:p-8 bg-gray-50 rounded-lg border border-gray-200"
                  variants={itemVariants}
                  whileHover={{ borderColor: "#D4AF37", x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-2xl md:text-3xl">⭐</div>
                    <div className="font-display font-semibold text-lg md:text-xl text-navy">
                      {item}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Scouting Summary */}
          <motion.section
            variants={itemVariants}
            className="p-8 md:p-12 bg-gradient-to-br from-navy to-navy-dark text-white rounded-lg"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-6 md:mb-8 text-gold">
              Scouting Summary
            </h2>
            <p className="text-base md:text-lg lg:text-xl font-sans leading-relaxed">
              Jaleel is an explosive and creative winger who stands out for his pace, dynamic dribbling, and efficiency in front of goal. With proven ability to play up an age group, he demonstrates maturity, intelligence, and elite technical qualities. His trajectory places him among the top prospects in his class.
            </p>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
}
