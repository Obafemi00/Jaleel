"use client";

import Link from "next/link";
import { Instagram, Youtube, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/jkotun_48/",
      icon: Instagram,
      ariaLabel: "Follow on Instagram",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@jkotun_48",
      icon: Youtube,
      ariaLabel: "Subscribe on YouTube",
    },
    {
      name: "SportsRecruits",
      url: "https://my.sportsrecruits.com/athlete/jaleel_kotun2",
      icon: ExternalLink,
      ariaLabel: "View SportsRecruits profile",
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-display font-semibold mb-4">Jaleel Kotun</h3>
            <p className="text-sm font-sans">
              Professional athlete dedicated to excellence and performance.
            </p>
          </div>
          
          <div>
            <h4 className="text-white text-sm font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm font-sans">
              <li>
                <Link href="/bio" className="hover:text-white transition-colors">
                  Bio
                </Link>
              </li>
              <li>
                <Link href="/stats" className="hover:text-white transition-colors">
                  Stats
                </Link>
              </li>
              <li>
                <Link href="/highlights" className="hover:text-white transition-colors">
                  Highlights
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/tournaments" className="hover:text-white transition-colors">
                  Tournaments
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-sm font-display font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm font-sans">
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="hover:text-white transition-colors">
                  Achievements
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col items-center">
            <h4 className="text-white text-sm font-display font-semibold mb-4">Follow & Connect</h4>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.ariaLabel}
                    className="flex items-center justify-center w-10 h-10 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-gray-900"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IconComponent className="w-5 h-5" aria-hidden="true" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm font-sans">
          <p>&copy; {new Date().getFullYear()} Jaleel Kotun. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}


