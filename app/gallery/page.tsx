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
        { id: "j1", src: "/images/1.jpg", alt: "Juventus Academy Training" },
        { id: "j2", src: "/images/2.jpg", alt: "Juventus Match Action" },
        { id: "j3", src: "/images/3.JPG", alt: "Juventus Team Photo" },
        { id: "j4", src: "/images/4.jpg", alt: "Juventus Skills Training" },
      ]
    },
    {
      id: "odp",
      label: "ODP",
      images: [
        { id: "o1", src: "/images/5.JPG", alt: "ODP Training Session" },
        { id: "o2", src: "/images/6.jpg", alt: "ODP Match Highlights" },
        { id: "o3", src: "/images/AboutMe.JPG", alt: "ODP Team Selection" },
        { id: "o4", src: "/images/team-photo.jpg", alt: "ODP Group Photo" },
      ]
    },
    {
      id: "gfi",
      label: "GFI",
      images: [
        { id: "g1", src: "/images/1.jpg", alt: "GFI Academy Training" },
        { id: "g2", src: "/images/2.jpg", alt: "GFI Match Performance" },
        { id: "g3", src: "/images/3.JPG", alt: "GFI Team Building" },
      ]
    },
    {
      id: "other",
      label: "Other",
      images: [
        { id: "ot1", src: "/images/4.jpg", alt: "Personal Training" },
        { id: "ot2", src: "/images/5.JPG", alt: "Awards Ceremony" },
        { id: "ot3", src: "/images/6.jpg", alt: "Community Event" },
        { id: "ot4", src: "/images/hero-potrait.JPG", alt: "Professional Portrait" },
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
            <div className="flex space-x-1">
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
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {activeTabData.images.map((image, index) => (
              <motion.div
                key={image.id}
                className="aspect-square bg-gradient-to-br from-navy/5 to-gold/5 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm font-sans font-medium">{image.alt}</p>
                  </div>
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
            Showing {activeTabData.images.length} photos from {activeTabData.label}
          </p>
        </motion.div>
      </div>
    </div>
  );
}