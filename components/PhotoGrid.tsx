"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PhotoGrid() {
  const photos = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.JPG",
    "/images/4.jpg",
    "/images/5.JPG",
    "/images/6.jpg",
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-center text-navy mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Gallery
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {photos.map((src, index) => (
            <motion.div
              key={src}
              className="aspect-[3/4] rounded-lg overflow-hidden bg-gray-200 shadow-md cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={src}
                alt={`Gallery photo ${index + 1}`}
                width={600}
                height={800}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
