"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import VideoCard from "./VideoCard";

export default function HighlightsPreview() {
  // First 3 videos for homepage preview
  const recentHighlights = [
    {
      videoId: "KeAlw6HSBdg",
      title: "Elite Skills & Goals Compilation",
      year: "2024"
    },
    {
      videoId: "ou8eJxLBbeE",
      title: "Match Highlights vs Top Opposition",
      year: "2024"
    },
    {
      videoId: "T1JkLhS-4Kc",
      title: "Training & Development Session",
      year: "2024"
    }
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
          {recentHighlights.map((video, index) => (
            <VideoCard
              key={video.videoId}
              videoId={video.videoId}
              title={video.title}
              year={video.year}
              index={index}
            />
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


