"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Achievement {
  id: string;
  title: string;
  image?: string;
  description?: string;
}

export default function AchievementsPage() {
  const academicAchievements: Achievement[] = [
    {
      id: "honor-roll",
      title: "Honor Roll",
      description: "Consistent academic excellence"
    },
    {
      id: "stem-excellence",
      title: "Excellence in STEM",
      description: "Outstanding performance in Science, Technology, Engineering, and Mathematics"
    },
    {
      id: "spanish-excellence",
      title: "Spanish Academic Excellence",
      description: "Achievement in Spanish language studies"
    },
    {
      id: "math-excellence",
      title: "Excellence in Mathematics",
      description: "Superior performance in mathematics"
    },
    {
      id: "academic-certificates",
      title: "Academic Certificates",
      image: "/images/25.jpg",
      description: "Multiple academic achievement certificates"
    }
  ];

  const soccerAchievements: Achievement[] = [
    {
      id: "mvp-juventus",
      title: "MVP — Juventus Academy Houston",
      description: "Most Valuable Player recognition"
    },
    {
      id: "highest-goalscorer",
      title: "Highest Goal Scorer",
      description: "Top goal scorer of the season"
    },
    {
      id: "best-player",
      title: "Best Player of the Season",
      description: "Outstanding season performance"
    },
    {
      id: "championship-winner",
      title: "Championship Winner",
      description: "Led team to league championship victory"
    },
    {
      id: "player-of-year",
      title: "Player of the Year",
      description: "Recognized as the top performer of the season"
    },
    {
      id: "record-holder",
      title: "Record Holder",
      description: "Set new record for most goals in a season"
    }
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
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Header */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-center text-navy mb-4">
            Achievements
          </h1>
          <div className="h-1 w-24 bg-gold mx-auto"></div>
        </motion.div>

        {/* Two Column Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
        >
          {/* Left Column - Academic Achievements */}
          <motion.section variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-navy mb-6 md:mb-8">
              Academic Achievements
            </h2>
            <div className="space-y-4 md:space-y-6">
              {academicAchievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.01, y: -2 }}
                >
                  {achievement.image ? (
                    <div className="relative w-full aspect-[4/3] bg-gray-100">
                      <Image
                        src={achievement.image}
                        alt={achievement.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  ) : (
                    <div className="p-6 md:p-8">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-gold/20 to-gold/10 rounded-lg flex items-center justify-center">
                          <svg
                            className="w-6 h-6 text-gold"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                        <h3 className="text-xl md:text-2xl font-display font-bold text-navy">
                          {achievement.title}
                        </h3>
                      </div>
                      {achievement.description && (
                        <p className="text-gray-600 font-sans leading-relaxed">
                          {achievement.description}
                        </p>
                      )}
                    </div>
                  )}
                  {achievement.image && (
                    <div className="p-4 md:p-6">
                      <h3 className="text-lg md:text-xl font-display font-bold text-navy mb-2">
                        {achievement.title}
                      </h3>
                      {achievement.description && (
                        <p className="text-gray-600 font-sans text-sm leading-relaxed">
                          {achievement.description}
                        </p>
                      )}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Right Column - Soccer Achievements */}
          <motion.section variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-navy mb-6 md:mb-8">
              Soccer Achievements
            </h2>
            <div className="space-y-4 md:space-y-6">
              {soccerAchievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  className="bg-white rounded-xl shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.01, y: -2 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-navy/20 to-navy/10 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-navy"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-navy">
                      {achievement.title}
                    </h3>
                  </div>
                  {achievement.description && (
                    <p className="text-gray-600 font-sans leading-relaxed">
                      {achievement.description}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
}