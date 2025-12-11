"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface GalleryMedia {
  id: string;
  src: string;
  alt: string;
  type: 'image' | 'video';
}

interface GalleryTab {
  id: string;
  label: string;
  images: GalleryMedia[];
}

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("juventus");

  const galleryTabs: GalleryTab[] = [
    {
      id: "juventus",
      label: "Juventus",
      images: [
        { id: "j1", src: "/images/2.jpg", alt: "", type: "image" },
        { id: "j2", src: "/images/IMG_2923.jpg", alt: "", type: "image" },
        { id: "j3", src: "/images/IMG_9800.jpg", alt: "", type: "image" },
        { id: "j4", src: "/images/IMG_9801.jpg", alt: "", type: "image" },
        { id: "j5", src: "/images/IMG_9802.jpg", alt: "", type: "image" },
        { id: "j6", src: "/images/17252f98-934a-4ebd-936d-5a5faa90d6a0.jpg", alt: "", type: "image" },
        { id: "j7", src: "/images/IMG_2910.jpg", alt: "", type: "image" },
        { id: "j8", src: "/images/IMG_2911.jpg", alt: "", type: "image" },
        { id: "j9", src: "/images/IMG_4096.jpg", alt: "", type: "image" },
        { id: "j10", src: "/images/IMG_7863.jpg", alt: "", type: "image" },
        { id: "j11", src: "/images/IMG_7864.jpg", alt: "", type: "image" },
        { id: "j12", src: "/images/IMG_7865.jpg", alt: "", type: "image" },
        { id: "j13", src: "/images/IMG_7953.jpg", alt: "", type: "image" },
        { id: "j14", src: "/images/IMG_7956.jpg", alt: "", type: "image" },
        { id: "j15", src: "/images/IMG_7957.jpg", alt: "", type: "image" },
        { id: "j16", src: "/images/IMG_2923.mov", alt: "", type: "video" },
      ]
    },
    {
      id: "odp",
      label: "ODP",
      images: [
        { id: "o1", src: "/images/1.jpg", alt: "", type: "image" },
        { id: "o2", src: "/images/team-photo.jpg", alt: "", type: "image" },
      ]
    },
    {
      id: "gfi",
      label: "GFI",
      images: [
        { id: "g1", src: "/images/3.JPG", alt: "", type: "image" },
        { id: "g2", src: "/images/4.jpg", alt: "", type: "image" },
        { id: "g3", src: "/images/5.JPG", alt: "", type: "image" },
        { id: "g4", src: "/images/7.JPG", alt: "", type: "image" },
        { id: "g5", src: "/images/8.JPG", alt: "", type: "image" },
        { id: "g6", src: "/images/9.JPG", alt: "", type: "image" },
        { id: "g7", src: "/images/10.JPG", alt: "", type: "image" },
        { id: "g8", src: "/images/11.JPG", alt: "", type: "image" },
        { id: "g9", src: "/images/12.JPG", alt: "", type: "image" },
        { id: "g10", src: "/images/13.JPG", alt: "", type: "image" },
        { id: "g11", src: "/images/14.JPG", alt: "", type: "image" },
        { id: "g12", src: "/images/15.JPG", alt: "", type: "image" },
        { id: "g13", src: "/images/16.JPG", alt: "", type: "image" },
        { id: "g14", src: "/images/17.JPG", alt: "", type: "image" },
        { id: "g15", src: "/images/18.JPG", alt: "", type: "image" },
        { id: "g16", src: "/images/19.JPG", alt: "", type: "image" },
        { id: "g17", src: "/images/20.JPG", alt: "", type: "image" },
        { id: "g18", src: "/images/21.JPG", alt: "", type: "image" },
        { id: "g19", src: "/images/22.JPG", alt: "", type: "image" },
        { id: "g20", src: "/images/23.JPG", alt: "", type: "image" },
        { id: "g21", src: "/images/24.JPG", alt: "", type: "image" },
        { id: "g22", src: "/images/A7404393.JPG", alt: "", type: "image" },
        { id: "g23", src: "/images/A7404394.JPG", alt: "", type: "image" },
        { id: "g24", src: "/images/A7404395.JPG", alt: "", type: "image" },
        { id: "g25", src: "/images/A7404542.JPG", alt: "", type: "image" },
        { id: "g26", src: "/images/A7404545.JPG", alt: "", type: "image" },
        { id: "g27", src: "/images/A7404554.JPG", alt: "", type: "image" },
        { id: "g28", src: "/images/A7404582.JPG", alt: "", type: "image" },
        { id: "g29", src: "/images/A7404643.JPG", alt: "", type: "image" },
        { id: "g30", src: "/images/A7404647.JPG", alt: "", type: "image" },
        { id: "g31", src: "/images/A7404680.JPG", alt: "", type: "image" },
        { id: "g32", src: "/images/A7404978.JPG", alt: "", type: "image" },
        { id: "g33", src: "/images/A7407837.JPG", alt: "", type: "image" },
        { id: "g34", src: "/images/A7408235.JPG", alt: "", type: "image" },
        { id: "g35", src: "/images/A7408368.JPG", alt: "", type: "image" },
        { id: "g36", src: "/images/A7408419.JPG", alt: "", type: "image" },
        { id: "g37", src: "/images/IMG_3853.jpg", alt: "", type: "image" },
        { id: "g38", src: "/images/IMG_5549.mov", alt: "", type: "video" }
      ]
    },
    {
      id: "other",
      label: "Other",
      images: [
        { id: "ot1", src: "/images/6.jpg", alt: "", type: "image" },
        { id: "ot2", src: "/images/25.jpg", alt: "", type: "image" },
        { id: "ot3", src: "/images/Jaleel Banner.jpg", alt: "", type: "image" },
      ]
    }
  ];

  const activeTabData = galleryTabs.find(tab => tab.id === activeTab) || galleryTabs[0];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Header */}
        <header className="mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-center text-navy mb-4">
              Gallery
            </h1>
            <div className="h-1 w-24 bg-gold mx-auto"></div>
          </motion.div>
        </header>

        {/* Tab Navigation */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative bg-gray-50 rounded-full p-1 shadow-inner">
            <div className="flex flex-wrap justify-center gap-1">
              {galleryTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-6 py-3 text-sm md:text-base font-display font-semibold rounded-full transition-all duration-300 ${
                    activeTab === tab.id
                      ? "text-white"
                      : "text-gray-600 hover:text-navy"
                  }`}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-navy rounded-full shadow-lg"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30
                      }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <AnimatePresence mode="wait">
          <motion.section
            key={activeTab}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            aria-label={`${activeTabData.label} gallery images`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {activeTabData.images.map((media, index) => (
              <motion.div
                key={media.id}
                className="w-full cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative w-full rounded-lg overflow-hidden" style={{ height: 'auto' }}>
                  {media.type === 'video' ? (
                    <video
                      src={media.src}
                      controls
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-auto transition-transform duration-300 group-hover:scale-105 rounded-lg"
                      style={{ width: '100%', height: 'auto' }}
                      preload="metadata"
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <Image
                      src={media.src}
                      alt=""
                      width={1200}
                      height={900}
                      className="w-full h-auto transition-transform duration-300 group-hover:scale-105 rounded-lg"
                      style={{ width: '100%', height: 'auto' }}
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </motion.section>
        </AnimatePresence>

        {/* Gallery Stats */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-gray-600 font-sans">
            Showing {activeTabData.images.length} {activeTabData.images.length === 1 ? "item" : "items"} from {activeTabData.label}
          </p>
        </motion.div>
      </div>
    </div>
  );
}