"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface VideoCardProps {
  videoId: string;
  title: string;
  year: string;
  index?: number;
}

export default function VideoCard({ videoId, title, year, index = 0 }: VideoCardProps) {
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;

  const handleVideoClick = () => {
    window.open(youtubeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.03, y: -5 }}
      onClick={handleVideoClick}
    >
      <div className="relative aspect-video bg-gray-200 overflow-hidden">
        <Image
          src={thumbnailUrl}
          alt={`Video thumbnail: ${title} - Jaleel Kotun ${year} highlights`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
        />
        {/* Play button overlay */}
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 text-navy ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        {/* YouTube logo */}
        <div className="absolute top-3 right-3 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
          YouTube
        </div>
      </div>
      <div className="p-6">
        <div className="text-sm font-display font-medium text-gold mb-2 uppercase tracking-wide">
          {year}
        </div>
        <h3 className="text-lg md:text-xl font-display font-semibold text-navy mb-2 line-clamp-2 group-hover:text-gold transition-colors">
          {title}
        </h3>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
          </svg>
          <span className="font-sans">Watch on YouTube</span>
        </div>
      </div>
    </motion.div>
  );
}
