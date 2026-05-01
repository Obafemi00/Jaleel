"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type GalleryMediaType = "image" | "video";

interface GalleryMedia {
  id: string;
  src: string;
  alt: string;
  type: GalleryMediaType;
}

interface GalleryTab {
  id: string;
  label: string;
  images: GalleryMedia[];
}

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("juventus");
  const [activeOdpSubTab, setActiveOdpSubTab] = useState("2024-2025");

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
      images: [] // ODP now uses sub-tabs, so this is empty
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
        { id: "g38", src: "/images/IMG_5549.mov", alt: "", type: "video" },
        { id: "g39", src: "/images/Jaleel-arizona1.jpg", alt: "", type: "image" },
        { id: "g40", src: "/images/jaleel-arizona2.jpg", alt: "", type: "image" },
        { id: "g41", src: "/images/jaleelarizona3.jpg", alt: "", type: "image" },
        { id: "g42", src: "/images/gfi1.jpg", alt: "", type: "image" },
        { id: "g43", src: "/images/gfi2.jpg", alt: "", type: "image" },
        { id: "g44", src: "/images/gfi3.jpg", alt: "", type: "image" },
        { id: "g45", src: "/images/gfi4.jpg", alt: "", type: "image" },
        { id: "g46", src: "/images/gfi5.jpg", alt: "", type: "image" },
        { id: "g47", src: "/images/gfi6.jpg", alt: "", type: "image" },
        { id: "g48", src: "/images/gfi7.jpg", alt: "", type: "image" },
        { id: "g49", src: "/images/gfi8.jpg", alt: "", type: "image" },
        { id: "g50", src: "/images/gfi9.jpg", alt: "", type: "image" },
        { id: "g51", src: "/images/gfi10.jpg", alt: "", type: "image" },
        { id: "g52", src: "/images/gfi11.jpg", alt: "", type: "image" },
        { id: "g53", src: "/images/gfi12.jpg", alt: "", type: "image" },
        { id: "g54", src: "/images/gfi13.jpg", alt: "", type: "image" },
        { id: "g55", src: "/images/gfi14.jpg", alt: "", type: "image" },
        { id: "g56", src: "/images/gfi15.jpg", alt: "", type: "image" },
        { id: "g57", src: "/images/gfi16.jpg", alt: "", type: "image" },
        { id: "g58", src: "/images/gfi17.jpg", alt: "", type: "image" }
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

  // ODP sub-tabs data
  const odpSubTabs: Record<string, { label: string; images: GalleryMedia[] }> = {
    "2024-2025": {
      label: "2024-2025 Interregional",
      images: [
        { id: "odp24-1", src: "/images/24-25 Odp/1.jpg", alt: "", type: "image" },
        { id: "odp24-2", src: "/images/24-25 Odp/1769358856555blob.jpg", alt: "", type: "image" },
        { id: "odp24-3", src: "/images/24-25 Odp/1769358873719blob.jpg", alt: "", type: "image" },
        { id: "odp24-4", src: "/images/24-25 Odp/1769359001931blob.jpg", alt: "", type: "image" },
        { id: "odp24-5", src: "/images/24-25 Odp/1769369366349blob.jpg", alt: "", type: "image" },
        { id: "odp24-6", src: "/images/24-25 Odp/1769369450525blob.jpg", alt: "", type: "image" },
        { id: "odp24-7", src: "/images/24-25 Odp/1769369506111blob.jpg", alt: "", type: "image" },
        { id: "odp24-8", src: "/images/24-25 Odp/ODP 3.jpg", alt: "", type: "image" },
        { id: "odp24-9", src: "/images/24-25 Odp/ODP 6.jpg", alt: "", type: "image" },
        { id: "odp24-10", src: "/images/24-25 Odp/team-photo.jpg", alt: "", type: "image" },
      ] satisfies GalleryMedia[]
    },
    "2025-2026": {
      label: "2025-2026 Interregional",
      images: [
        { id: "odp25-1", src: "/images/25-26 odp/1769359378701blob.jpg", alt: "", type: "image" },
        { id: "odp25-2", src: "/images/25-26 odp/DSC01574.jpeg", alt: "", type: "image" },
        { id: "odp25-3", src: "/images/25-26 odp/DSC01577.jpeg", alt: "", type: "image" },
        { id: "odp25-4", src: "/images/25-26 odp/IMG_2034.JPG", alt: "", type: "image" },
        { id: "odp25-5", src: "/images/25-26 odp/IMG_2361.JPG", alt: "", type: "image" },
        { id: "odp25-6", src: "/images/25-26 odp/IMG_2696.JPG", alt: "", type: "image" },
        { id: "odp25-7", src: "/images/25-26 odp/IMG_2708.JPG", alt: "", type: "image" },
        { id: "odp25-8", src: "/images/25-26 odp/IMG_2711.JPG", alt: "", type: "image" },
        { id: "odp25-9", src: "/images/25-26 odp/IMG_2715.JPG", alt: "", type: "image" },
        { id: "odp25-10", src: "/images/25-26 odp/IMG_2872.JPG", alt: "", type: "image" },
        { id: "odp25-11", src: "/images/25-26 odp/IMG_2878.JPG", alt: "", type: "image" },
        { id: "odp25-12", src: "/images/25-26 odp/PHOTO-2026-01-25-11-16-17.jpg", alt: "", type: "image" },
      ] satisfies GalleryMedia[]
    }
  };

  const activeTabData = galleryTabs.find(tab => tab.id === activeTab) || galleryTabs[0];
  
  // Get the active images based on tab and sub-tab
  const getActiveImages = (): GalleryMedia[] => {
    if (activeTab === "odp") {
      return odpSubTabs[activeOdpSubTab as keyof typeof odpSubTabs]?.images || [];
    }
    return activeTabData.images;
  };

  const activeImages = getActiveImages();

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
                  onClick={() => {
                    setActiveTab(tab.id);
                    if (tab.id !== "odp") {
                      setActiveOdpSubTab("2024-2025");
                    }
                  }}
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

        {/* ODP Sub-Tab Navigation */}
        {activeTab === "odp" && (
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <div className="relative bg-gray-100 rounded-lg p-1 shadow-sm">
              <div className="flex flex-wrap justify-center gap-1">
                {Object.entries(odpSubTabs).map(([key, subTab]) => (
                  <button
                    key={key}
                    onClick={() => setActiveOdpSubTab(key)}
                    className={`relative px-5 py-2 text-sm font-display font-medium rounded-md transition-all duration-300 ${
                      activeOdpSubTab === key
                        ? "text-white"
                        : "text-gray-600 hover:text-navy"
                    }`}
                  >
                    {activeOdpSubTab === key && (
                      <motion.div
                        layoutId="activeOdpSubTab"
                        className="absolute inset-0 bg-navy rounded-md shadow-md"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30
                        }}
                      />
                    )}
                    <span className="relative z-10">{subTab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Gallery Grid */}
        <AnimatePresence mode="wait">
          <motion.section
            key={activeTab === "odp" ? `odp-${activeOdpSubTab}` : activeTab}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            aria-label={activeTab === "odp" ? `${odpSubTabs[activeOdpSubTab as keyof typeof odpSubTabs]?.label} gallery images` : `${activeTabData.label} gallery images`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {activeImages.map((media, index) => (
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
            Showing {activeImages.length} {activeImages.length === 1 ? "item" : "items"} from {activeTab === "odp" ? odpSubTabs[activeOdpSubTab as keyof typeof odpSubTabs]?.label : activeTabData.label}
          </p>
        </motion.div>
      </div>
    </div>
  );
}