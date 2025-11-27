"use client";

import { motion } from "framer-motion";

interface Stat {
  label: string;
  value: string;
}

export default function StatsSection() {
  const stats: Stat[] = [
    { label: "Games Played", value: "150+" },
    { label: "Goals", value: "45" },
    { label: "Assists", value: "32" },
    { label: "Trophies", value: "8" },
    { label: "GPA", value: "4.0" },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-center text-navy mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Career Statistics
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gold mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-600 font-sans font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


