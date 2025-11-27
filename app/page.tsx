import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import BioPreview from "@/components/BioPreview";
import TournamentsSection from "@/components/TournamentsSection";
import RecruitmentSection from "@/components/RecruitmentSection";
import HighlightsPreview from "@/components/HighlightsPreview";
import PhotoGrid from "@/components/PhotoGrid";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <StatsSection />
      <BioPreview />
      <TournamentsSection />
      <RecruitmentSection />
      <HighlightsPreview />
      <PhotoGrid />
    </div>
  );
}


