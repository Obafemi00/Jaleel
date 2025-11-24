"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BioPreview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-navy mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              About Me
            </motion.h2>
            <motion.p
              className="text-base md:text-lg text-gray-700 mb-4 leading-relaxed font-sans"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Jaleel Kotun is a rising talent in the MLS NEXT system, competing for GFI Academy. Known for his pace, 1v1 ability, and natural finishing, he plays primarily as a winger or forward and often competes up an age group.
            </motion.p>
            <motion.p
              className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed font-sans"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              His creativity, sharp footwork, and instinctive movement in the box make him one of the most exciting prospects in his class.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/bio"
                className="inline-block px-6 py-3 md:px-8 md:py-4 bg-gold text-navy font-display font-semibold rounded-lg hover:bg-gold-light transition-colors shadow-lg shadow-gold/20"
              >
                Read Full Bio →
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            className="order-1 md:order-2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="aspect-square bg-gradient-to-br from-navy/10 to-gold/10 rounded-lg overflow-hidden border border-gold/20">
            <Image
  src="/images/AboutMe.JPG"
  alt="Jaleel Kotun"
  width={600}
  height={600}
  className="object-cover w-full h-full"
/>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


