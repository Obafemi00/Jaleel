"use client";

import { motion } from "framer-motion";
import { ExternalLink, Shield, Star, Award } from "lucide-react";

export default function RecruitmentSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-navy mb-4">
            Recruitment Profiles
          </h2>
          <div className="h-1 w-24 bg-gold mx-auto mb-4"></div>
          <p className="text-gray-600 font-sans max-w-2xl mx-auto">
            Official verified athlete profiles showcasing performance, achievements, and recruitment information.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            className="relative p-8 bg-gradient-to-br from-navy/5 to-gold/5 border border-gold/20 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            {/* Verified Badge */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-green-100 rounded-full">
                  <Shield className="w-5 h-5 text-green-600" />
                </div>
                <span className="text-sm font-display font-semibold text-green-600 uppercase tracking-wide">
                  Verified Athlete
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-gold fill-current" />
                <Star className="w-4 h-4 text-gold fill-current" />
                <Star className="w-4 h-4 text-gold fill-current" />
                <Star className="w-4 h-4 text-gold fill-current" />
                <Star className="w-4 h-4 text-gold fill-current" />
              </div>
            </div>

            {/* Platform Info */}
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white rounded-lg shadow-sm">
                <Award className="w-8 h-8 text-navy" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-navy mb-1">
                  SportsRecruits
                </h3>
                <p className="text-gray-600 font-sans">
                  Official recruitment platform profile
                </p>
              </div>
            </div>

            {/* Profile Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="text-center p-4 bg-white/50 rounded-lg">
                <div className="text-2xl font-display font-bold text-navy mb-1">Complete</div>
                <div className="text-sm text-gray-600 font-sans">Profile Status</div>
              </div>
              <div className="text-center p-4 bg-white/50 rounded-lg">
                <div className="text-2xl font-display font-bold text-navy mb-1">Active</div>
                <div className="text-sm text-gray-600 font-sans">Recruitment</div>
              </div>
            </div>

            {/* CTA Button */}
            <motion.a
              href="https://my.sportsrecruits.com/athlete/jaleel_kotun2"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-navy text-white font-display font-semibold rounded-lg hover:bg-navy-light transition-colors shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>View Recruitment Profile</span>
              <ExternalLink className="w-5 h-5" />
            </motion.a>

            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-gold/10 to-gold/5 rounded-full blur-xl"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-navy/10 to-navy/5 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
