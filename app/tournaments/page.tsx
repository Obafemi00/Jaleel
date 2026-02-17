"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Home, MapPin } from "lucide-react";

interface Match {
  id: string;
  date: string;
  ageGroup: "U15" | "U16";
  competition: string;
  homeTeam: string;
  awayTeam: string;
  score: string;
  result: "win" | "draw" | "loss";
  isHome: boolean;
}

// Parse date from format "DD MMM YY" to ISO format
const parseDate = (dateStr: string): string => {
  // Format: "25 Dec 25" -> "2025-12-25"
  // Handle edge cases like "31 Nov" which will roll over to Dec 1
  const parts = dateStr.trim().split(" ");
  const day = parts[0].padStart(2, "0");
  const monthMap: Record<string, string> = {
    Jan: "01", Feb: "02", Mar: "03", Apr: "04", May: "05", Jun: "06",
    Jul: "07", Aug: "08", Sep: "09", Oct: "10", Nov: "11", Dec: "12"
  };
  const month = monthMap[parts[1]] || "01";
  const year = `20${parts[2]}`;
  // Create date and let JavaScript handle invalid dates (e.g., Nov 31 -> Dec 1)
  const date = new Date(`${year}-${month}-${day}`);
  // Format back to ISO string
  return date.toISOString().split('T')[0];
};

// Determine result based on GFI Academy's position and score
const determineResult = (
  homeTeam: string,
  awayTeam: string,
  score: string,
  isGFI: (team: string) => boolean
): { result: "win" | "draw" | "loss"; isHome: boolean } => {
  const isGFIHome = isGFI(homeTeam);
  const [homeScore, awayScore] = score.split("-").map(Number);
  
  if (homeScore === awayScore) {
    return { result: "draw", isHome: isGFIHome };
  }
  
  if (isGFIHome) {
    return { result: homeScore > awayScore ? "win" : "loss", isHome: true };
  } else {
    return { result: awayScore > homeScore ? "win" : "loss", isHome: false };
  }
};

// Helper to check if team is GFI Academy (various naming patterns)
const isGFIAcademy = (team: string): boolean => {
  const normalized = team.toLowerCase();
  return (
    normalized.includes("global football innovation") ||
    normalized.includes("gfi academy") ||
    normalized.includes("gfi")
  );
};

// Clean team name (remove redundant MLS NEXT suffixes)
const cleanTeamName = (team: string): string => {
  return team
    .replace(/\s*MLS NEXT\s*U\d+\s*(AD)?\s*$/gi, "")
    .trim();
};

// Match data from TAKA.io (Sept-Dec 2025) - U15 matches only
const rawMatches = [
  { date: "19 Jan 26", category: "U15 Boys", homeTeam: "GFI Academy 2011 South MLS NEXT U15", score: "1-1", awayTeam: "2011 East MLS NEXT U15" },
  { date: "17 Jan 26", category: "U15 Boys", homeTeam: "GFI Academy 2011 South MLS NEXT U15", score: "1-0", awayTeam: "2011 West MLS NEXT U15" },
  { date: "25 Dec 25", category: "U15 Boys", homeTeam: "ALBION SC Los Angeles MLS NEXT U15", score: "3-2", awayTeam: "Global Football Innovation Academy MLS NEXT U15" },
  { date: "25 Dec 25", category: "U15 Boys", homeTeam: "Global Football Innovation Academy MLS NEXT U15 AD", score: "7-0", awayTeam: "Lou Fuzz Athletic 2 MLS NEXT U15 AD" },
  { date: "24 Dec 25", category: "U15 Boys", homeTeam: "FC Golden State Force MLS NEXT U15", score: "3-2", awayTeam: "Global Football Innovation Academy MLS NEXT U15" },
  { date: "24 Dec 25", category: "U15 Boys", homeTeam: "Sporting San Diego MLS NEXT U15 AD", score: "5-0", awayTeam: "Global Football Innovation Academy MLS NEXT U15 AD" },
  { date: "22 Dec 25", category: "U15 Boys", homeTeam: "Global Football Innovation Academy MLS NEXT U15 AD", score: "2-5", awayTeam: "LA Surf Soccer Club MLS NEXT U15 AD" },
  { date: "22 Dec 25", category: "U15 Boys", homeTeam: "Players Development Academy MLS NEXT U15", score: "4-3", awayTeam: "Global Football Innovation Academy MLS NEXT U15" },
  { date: "20 Nov 25", category: "U15 Boys", homeTeam: "Global Football Innovation Academy MLS NEXT U15 AD", score: "2-3", awayTeam: "Aspire FC MLS NEXT U15 AD" },
  { date: "25 Nov 25", category: "U15 Boys", homeTeam: "Capital City South MLS NEXT U15 AD", score: "4-3", awayTeam: "Global Football Innovation Academy MLS NEXT U15 AD" },
  { date: "25 Nov 25", category: "U15 Boys", homeTeam: "Dallas Hornets MLS NEXT U15", score: "3-2", awayTeam: "Global Football Innovation Academy MLS NEXT U15" },
  { date: "29 Nov 25", category: "U15 Boys", homeTeam: "AC River MLS NEXT U15 AD", score: "1-5", awayTeam: "Global Football Innovation Academy MLS NEXT U15 AD" },
  { date: "28 Nov 25", category: "U15 Boys", homeTeam: "Global Football Innovation Academy MLS NEXT U15", score: "2-2", awayTeam: "Houston Rangers MLS NEXT U15" },
  { date: "28 Nov 25", category: "U15 Boys", homeTeam: "GFI Academy South MLS NEXT U15 AD", score: "4-1", awayTeam: "Global Football Innovation Academy MLS NEXT U15 AD" },
  { date: "31 Nov 25", category: "U15 Boys", homeTeam: "Houston Rangers MLS NEXT U15 AD", score: "5-0", awayTeam: "Global Football Innovation Academy MLS NEXT U15 AD" },
  { date: "06 Oct 25", category: "U15 Boys", homeTeam: "Tulsa Greenwood SC MLS NEXT U15 AD", score: "3-1", awayTeam: "Global Football Innovation Academy MLS NEXT U16 AD" },
  { date: "05 Oct 25", category: "U15 Boys", homeTeam: "AC River MLS NEXT U15", score: "0-4", awayTeam: "Global Football Innovation Academy MLS NEXT U15" },
  { date: "05 Oct 25", category: "U15 Boys", homeTeam: "Sporting Oklahoma MLS NEXT U15 AD", score: "1-1", awayTeam: "Global Football Innovation Academy MLS NEXT U15 AD" },
  { date: "29 Oct 25", category: "U15 Boys", homeTeam: "Global Football Innovation Academy MLS NEXT U15 AD", score: "3-3", awayTeam: "Houston Futsal Club (HFA) MLS NEXT U15 AD" },
  { date: "22 Oct 25", category: "U15 Boys", homeTeam: "Global Football Innovation Academy MLS NEXT U15 AD", score: "2-2", awayTeam: "Dallas Hornets North MLS NEXT U15 AD" },
  { date: "21 Oct 25", category: "U15 Boys", homeTeam: "Global Football Innovation Academy MLS NEXT U16 AD", score: "4-2", awayTeam: "Dallas Hornets MLS NEXT U15 AD" },
  { date: "05 Oct 25", category: "U15 Boys", homeTeam: "Tulsa Greenwood SC MLS NEXT U15", score: "1-2", awayTeam: "Global Football Innovation Academy MLS NEXT U15" },
  { date: "05 Sep 25", category: "U15 Boys", homeTeam: "Global Football Innovation Academy MLS NEXT U15 AD", score: "4-0", awayTeam: "IDEA Toros Fútbol Academy MLS NEXT U15 AD" },
  { date: "07 Sep 25", category: "U15 Boys", homeTeam: "ALBION SC Colorado MLS NEXT U15", score: "3-1", awayTeam: "Global Football Innovation Academy MLS NEXT U15" },
  { date: "07 Sep 25", category: "U15 Boys", homeTeam: "Global Football Innovation Academy MLS NEXT U15 AD", score: "2-2", awayTeam: "Louisiana SP Elite MLS NEXT U15 AD" },
  { date: "01 Sep 25", category: "U15 Boys", homeTeam: "Global Football Innovation Academy MLS NEXT U15 AD", score: "6-0", awayTeam: "Houston Rangers MLS NEXT U15 AD" },
  { date: "03 Sep 25", category: "U15 Boys", homeTeam: "Global Football Innovation Academy MLS NEXT U15", score: "2-5", awayTeam: "Dallas Hornets MLS NEXT U15" },
  { date: "23 Sep 25", category: "U15 Boys", homeTeam: "Capital City Soccer Club MLS NEXT U15", score: "3-4", awayTeam: "Global Football Innovation Academy MLS NEXT U15" },
];

// TODO: Client provided U16 result for 2026-02-08; confirm participation before publishing.
// Match details: 08 Feb 26, MLS NEXT U16, Home: Global Football Innovation Academy (GFI Academy) vs Away: Tulsa Greenwood SC (MLS NEXT U16), Result: 2-1 (GFI Academy win), Status: Completed

const matches: Match[] = rawMatches.map((match, index) => {
  const { result, isHome } = determineResult(match.homeTeam, match.awayTeam, match.score, isGFIAcademy);
  const ageGroup = match.category.includes("U15") ? "U15" : "U16";
  
  return {
    id: `match-${index + 1}`,
    date: parseDate(match.date),
    ageGroup: ageGroup as "U15" | "U16",
    competition: "MLS NEXT",
    homeTeam: cleanTeamName(match.homeTeam),
    awayTeam: cleanTeamName(match.awayTeam),
    score: match.score,
    result,
    isHome,
  };
}).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // Sort most recent first

export default function TournamentsPage() {
  const [activeFilter, setActiveFilter] = useState<"all" | "U15" | "U16">("all");

  // Calculate summary stats from data
  const summaryStats = useMemo(() => {
    const totalMatches = matches.length;
    const mlsNextCompetitions = new Set(matches.map((m) => m.competition)).size;
    const ageGroups = Array.from(new Set(matches.map((m) => m.ageGroup))).sort();
    const dates = matches.map((m) => new Date(m.date)).sort((a, b) => a.getTime() - b.getTime());
    const dateRange =
      dates.length > 0
        ? `${dates[0].toLocaleDateString("en-US", { month: "short", year: "numeric" })} – ${dates[dates.length - 1].toLocaleDateString("en-US", { month: "short", year: "numeric" })}`
        : "N/A";

    return {
      totalMatches,
      mlsNextCompetitions,
      ageGroups: ageGroups.join(", "),
      dateRange,
    };
  }, []);

  // Filter matches
  const filteredMatches = useMemo(() => {
    if (activeFilter === "all") return matches;
    return matches.filter((match) => match.ageGroup === activeFilter);
  }, [activeFilter]);

  // Group matches by season
  const groupedMatches = useMemo(() => {
    const fall2025: Match[] = [];
    const spring2026: Match[] = [];
    
    filteredMatches.forEach((match) => {
      const matchDate = new Date(match.date);
      const year = matchDate.getFullYear();
      const month = matchDate.getMonth() + 1; // 1-12
      
      if (year === 2025 || (year === 2026 && month <= 1)) {
        // Fall 2025 (Sept-Dec) and January 2026
        if (year === 2025 && month >= 9) {
          fall2025.push(match);
        } else if (year === 2026 && month === 1) {
          spring2026.push(match);
        } else {
          fall2025.push(match);
        }
      } else {
        spring2026.push(match);
      }
    });
    
    const seasons: Record<string, Match[]> = {};
    if (fall2025.length > 0) {
      seasons["Fall 2025 (Sept – Dec)"] = fall2025;
    }
    if (spring2026.length > 0) {
      seasons["Spring 2026 (Jan –)"] = spring2026;
    }
    
    return seasons;
  }, [filteredMatches]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Page Header */}
        <header className="mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy mb-4">
              Tournaments & Competitive Play
            </h1>
            <div className="h-1 w-24 bg-gold mb-4"></div>
            <p className="text-lg md:text-xl text-gray-600 font-sans">
              Elite competition exposure across MLS NEXT and premier youth tournaments.
            </p>
          </motion.div>
        </header>

        {/* Summary Stats */}
        <motion.section
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-gray-50 rounded-lg p-4 md:p-6 border border-gray-100">
              <div className="text-3xl md:text-4xl font-display font-bold text-navy mb-1">
                {summaryStats.totalMatches}
              </div>
              <div className="text-sm md:text-base text-gray-600 font-sans">Total Matches</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 md:p-6 border border-gray-100">
              <div className="text-3xl md:text-4xl font-display font-bold text-navy mb-1">
                {summaryStats.mlsNextCompetitions}
              </div>
              <div className="text-sm md:text-base text-gray-600 font-sans">MLS NEXT Competitions</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 md:p-6 border border-gray-100">
              <div className="text-2xl md:text-3xl font-display font-bold text-navy mb-1">
                {summaryStats.ageGroups || "N/A"}
              </div>
              <div className="text-sm md:text-base text-gray-600 font-sans">Age Groups</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 md:p-6 border border-gray-100">
              <div className="text-xl md:text-2xl font-display font-bold text-navy mb-1">
                {summaryStats.dateRange}
              </div>
              <div className="text-sm md:text-base text-gray-600 font-sans">Date Range</div>
            </div>
          </div>
        </motion.section>

        {/* Filters */}
        {matches.length > 0 && (
          <motion.div
            className="mb-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-lg font-display font-medium transition-colors ${
                activeFilter === "all"
                  ? "bg-navy text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveFilter("U15")}
              className={`px-4 py-2 rounded-lg font-display font-medium transition-colors ${
                activeFilter === "U15"
                  ? "bg-navy text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              U15
            </button>
            <button
              onClick={() => setActiveFilter("U16")}
              className={`px-4 py-2 rounded-lg font-display font-medium transition-colors ${
                activeFilter === "U16"
                  ? "bg-navy text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              U16
            </button>
          </motion.div>
        )}

        {/* Match Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {matches.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-600 font-sans text-lg">
                Match data will be displayed here once available.
              </p>
            </div>
          ) : (
            <div className="space-y-12">
              {Object.entries(groupedMatches).map(([seasonName, seasonMatches]) => (
                <div key={seasonName}>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-navy mb-8">
                    {seasonName}
                  </h2>
                  <div className="space-y-4">
                    {seasonMatches.map((match, index) => {
                      const resultColors = {
                        win: "border-l-4 border-l-green-500 bg-green-50/30",
                        draw: "border-l-4 border-l-gray-400 bg-gray-50/30",
                        loss: "border-l-4 border-l-red-400/60 bg-red-50/20",
                      };

                      return (
                        <motion.div
                          key={match.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.05 }}
                          className={`bg-white rounded-lg p-5 md:p-6 shadow-sm hover:shadow-md transition-all ${resultColors[match.result]}`}
                        >
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            {/* Left: Date, Badges, Teams */}
                            <div className="flex-1 space-y-3">
                              {/* Date and Badges Row */}
                              <div className="flex flex-wrap items-center gap-3">
                                <span className="text-sm text-gray-500 font-sans">
                                  {formatDate(match.date)}
                                </span>
                                <span className="px-2.5 py-1 bg-navy/10 text-navy text-xs font-display font-semibold rounded">
                                  {match.ageGroup}
                                </span>
                                <span className="px-2.5 py-1 bg-gold/10 text-navy text-xs font-display font-semibold rounded">
                                  {match.competition}
                                </span>
                                {match.isHome ? (
                                  <span className="flex items-center gap-1 text-xs text-gray-600">
                                    <Home className="w-3.5 h-3.5" />
                                    <span className="font-sans">Home</span>
                                  </span>
                                ) : (
                                  <span className="flex items-center gap-1 text-xs text-gray-600">
                                    <MapPin className="w-3.5 h-3.5" />
                                    <span className="font-sans">Away</span>
                                  </span>
                                )}
                              </div>

                              {/* Teams */}
                              <div className="font-sans text-gray-700">
                                <span className={match.isHome ? "font-semibold text-navy" : ""}>
                                  {match.homeTeam}
                                </span>
                                <span className="mx-2 text-gray-400">vs</span>
                                <span className={!match.isHome ? "font-semibold text-navy" : ""}>
                                  {match.awayTeam}
                                </span>
                              </div>
                            </div>

                            {/* Right: Score and Result */}
                            <div className="flex flex-col md:items-end gap-2">
                              <div className="text-2xl md:text-3xl font-display font-bold text-navy">
                                {match.score}
                              </div>
                              <div
                                className={`text-xs font-display font-semibold uppercase tracking-wide ${
                                  match.result === "win"
                                    ? "text-green-600"
                                    : match.result === "draw"
                                    ? "text-gray-600"
                                    : "text-red-500"
                                }`}
                              >
                                {match.result === "win" ? "Win" : match.result === "draw" ? "Draw" : "Loss"}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.section>

        {/* External Profile Reference */}
        {matches.length > 0 && (
          <motion.div
            className="mt-16 pt-8 border-t border-gray-200 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-sm text-gray-600 font-sans">
              Official match records sourced from Taka.
              {/* TODO: Add Taka profile link when available */}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

