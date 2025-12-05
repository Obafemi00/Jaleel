"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

interface GalleryTab {
  id: string;
  label: string;
  images: GalleryImage[];
}

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("juventus");

  const galleryTabs: GalleryTab[] = [
    {
      id: "juventus",
      label: "Juventus",
      images: [
        { id: "j1", src: "/images/2.jpg", alt: "Juventus Academy" },
      ]
    },
    {
      id: "odp",
      label: "ODP",
      images: [
        { id: "o1", src: "/images/1.jpg", alt: "ODP Training Session" },
        { id: "o2", src: "/images/team-photo.jpg", alt: "ODP Team Photo" },
      ]
    },
    {
      id: "gfi",
      label: "GFI",
      images: [
        { id: "g1", src: "/images/3.JPG", alt: "GFI Academy Training" },
        { id: "g2", src: "/images/4.jpg", alt: "GFI Match Performance" },
        { id: "g3", src: "/images/5.JPG", alt: "GFI Team Building" },
        { id: "g4", src: "/images/7.JPG", alt: "GFI Skills Development" },
        { id: "g5", src: "/images/8.JPG", alt: "GFI Competition" },
        { id: "g6", src: "/images/9.JPG", alt: "GFI Training Session" },
        { id: "g7", src: "/images/10.JPG", alt: "GFI Match Action" },
        { id: "g8", src: "/images/11.JPG", alt: "GFI Team Practice" },
        { id: "g9", src: "/images/12.JPG", alt: "GFI Academy" },
        { id: "g10", src: "/images/13.JPG", alt: "GFI Development" },
        { id: "g11", src: "/images/14.JPG", alt: "GFI Training" },
        { id: "g12", src: "/images/15.JPG", alt: "GFI Match" },
        { id: "g13", src: "/images/16.JPG", alt: "GFI Skills" },
        { id: "g14", src: "/images/17.JPG", alt: "GFI Performance" },
        { id: "g15", src: "/images/18.JPG", alt: "GFI Academy Training" },
        { id: "g16", src: "/images/19.JPG", alt: "GFI Team" },
        { id: "g17", src: "/images/20.JPG", alt: "GFI Competition" },
        { id: "g18", src: "/images/21.JPG", alt: "GFI Development" },
        { id: "g19", src: "/images/22.JPG", alt: "GFI Training Session" },
        { id: "g20", src: "/images/23.JPG", alt: "GFI Match Action" },
        { id: "g21", src: "/images/24.JPG", alt: "GFI Academy" }
      ]
    },
    {
      id: "other",
      label: "Other",
      images: [
        { id: "ot1", src: "/images/6.jpg", alt: "Personal Training" },
        { id: "ot2", src: "/images/25.jpg", alt: "Academic Excellence" },
        { id: "ot3", src: "/images/Jaleel Banner.jpg", alt: "Jaleel Kotun Banner" },
      ]
    }
  ];

  const activeTabData = galleryTabs.find(tab => tab.id === activeTab) || galleryTabs[0];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Header */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-center text-navy mb-4">
            Gallery
          </h1>
          <div className="h-1 w-24 bg-gold mx-auto"></div>
        </motion.div>

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
          <motion.div
            key={activeTab}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {activeTabData.images.map((image, index) => (
              <motion.div
                key={image.id}
                className="w-full cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative w-full" style={{ height: 'auto' }}>
                  <Image
                    src={image.src}
                    alt=""
                    width={1200}
                    height={900}
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                    style={{ width: '100%', height: 'auto' }}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Gallery Stats */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-gray-600 font-sans">
            Showing {activeTabData.images.length} {activeTabData.images.length === 1 ? "photo" : "photos"} from {activeTabData.label}
          </p>
        </motion.div>
      </div>
    </div>
  );
}