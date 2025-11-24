"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HighlightsPreview() {
  const highlights = [
    { id: 1, title: "Championship Win", date: "2024" },
    { id: 2, title: "Record Breaking Performance", date: "2023" },
    { id: 3, title: "Award Recognition", date: "2023" },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex justify-between items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-navy">
            Recent Highlights
          </h2>
          <Link
            href="/highlights"
            className="text-navy font-display font-semibold hover:text-gold transition-colors hidden md:block"
          >
            View All →
          </Link>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Video Placeholder
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold text-navy mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 font-sans">{highlight.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/highlights"
              className="inline-block px-6 py-3 bg-gold text-navy font-display font-semibold rounded-lg hover:bg-gold-light transition-colors shadow-lg shadow-gold/20"
            >
              View All Highlights
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


