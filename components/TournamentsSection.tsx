"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink, Trophy, Target } from "lucide-react";

interface Tournament {
  id: string;
  name: string;
  startDate: string;
  location: string;
  link?: string;
  type: "odp" | "mls";
  description: string;
}

export default function TournamentsSection() {
  const tournaments: Tournament[] = [
    {
      id: "odp-2026",
      name: "Olympic Development Program – Boys",
      startDate: "January 15th, 2026",
      location: "Florida",
      link: "https://www.usyouthsoccer.org/olympic-development-program-boys/",
      type: "odp",
      description: "Elite national youth development program"
    },
    {
      id: "mls-next-2025",
      name: "MLS Next Fest Tournament",
      startDate: "December 15th, 2025",
      location: "Arizona",
      link: "https://www.mlssoccer.com/mlsnext/tournaments/fest/",
      type: "mls",
      description: "Premier showcase tournament for top prospects"
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "odp":
        return <Target className="w-6 h-6" />;
      case "mls":
        return <Trophy className="w-6 h-6" />;
      default:
        return <Calendar className="w-6 h-6" />;
    }
  };

  const getGradient = (type: string) => {
    switch (type) {
      case "odp":
        return "from-blue-500/10 to-blue-600/5";
      case "mls":
        return "from-green-500/10 to-green-600/5";
      default:
        return "from-navy/10 to-gold/5";
    }
  };

  const getBorderColor = (type: string) => {
    switch (type) {
      case "odp":
        return "border-blue-500/20";
      case "mls":
        return "border-green-500/20";
      default:
        return "border-gold/20";
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-navy mb-4">
            Upcoming Tournaments
          </h2>
          <div className="h-1 w-24 bg-gold mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {tournaments.map((tournament, index) => (
            <motion.div
              key={tournament.id}
              className={`relative p-6 md:p-8 bg-gradient-to-br ${getGradient(tournament.type)} border ${getBorderColor(tournament.type)} rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Tournament Badge */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg bg-white shadow-sm text-navy`}>
                  {getIcon(tournament.type)}
                </div>
                <div className="text-xs font-display font-semibold text-navy/70 uppercase tracking-wider">
                  {tournament.type === "odp" ? "US Youth Soccer" : "MLS Next"}
                </div>
              </div>

              {/* Tournament Name */}
              <h3 className="text-xl md:text-2xl font-display font-bold text-navy mb-3 group-hover:text-gold transition-colors">
                {tournament.name}
              </h3>

              {/* Description */}
              <p className="text-gray-600 font-sans mb-4 leading-relaxed">
                {tournament.description}
              </p>

              {/* Tournament Details */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-gray-700">
                  <Calendar className="w-4 h-4 text-gold flex-shrink-0" />
                  <span className="font-sans text-sm md:text-base">{tournament.startDate}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                  <span className="font-sans text-sm md:text-base">{tournament.location}</span>
                </div>
              </div>

              {/* Link Button */}
              {tournament.link && (
                <motion.a
                  href={tournament.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-navy text-white font-display font-semibold rounded-lg hover:bg-navy-light transition-colors text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>View Details</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              )}

              {/* Decorative Element */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-gold/10 to-gold/5 rounded-full blur-xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
