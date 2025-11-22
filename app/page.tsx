import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import BioPreview from "@/components/BioPreview";
import HighlightsPreview from "@/components/HighlightsPreview";
import PhotoGrid from "@/components/PhotoGrid";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <StatsSection />
      <BioPreview />
      <HighlightsPreview />
      <PhotoGrid />
    </div>
  );
}


