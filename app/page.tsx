import type { Metadata } from "next";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import BioPreview from "@/components/BioPreview";
import TournamentsSection from "@/components/TournamentsSection";
import RecruitmentSection from "@/components/RecruitmentSection";
import HighlightsPreview from "@/components/HighlightsPreview";
import PhotoGrid from "@/components/PhotoGrid";

const baseUrl = "http://jaleelkotun.com";

export const metadata: Metadata = {
  title: "Home",
  description: "Jaleel Kotun - Elite forward and winger competing in the MLS NEXT system with GFI Academy. Rising talent with 4.0 GPA, recognized for pace, creativity, and clinical finishing. US ODP Interregional player.",
  openGraph: {
    title: "Jaleel Kotun | Elite Soccer Forward | MLS NEXT Academy Player",
    description: "Elite forward and winger competing in the MLS NEXT system with GFI Academy. Rising talent with 4.0 GPA, recognized for pace, creativity, and clinical finishing.",
    url: baseUrl,
    images: [
      {
        url: "/images/hero-potrait.JPG",
        width: 1200,
        height: 1600,
        alt: "Jaleel Kotun - Elite Soccer Forward",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaleel Kotun | Elite Soccer Forward | MLS NEXT Academy Player",
    description: "Elite forward and winger competing in the MLS NEXT system with GFI Academy. Rising talent with 4.0 GPA, recognized for pace, creativity, and clinical finishing.",
    images: ["/images/hero-potrait.JPG"],
  },
  alternates: {
    canonical: baseUrl,
  },
};

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


