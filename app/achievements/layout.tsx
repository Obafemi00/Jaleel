import type { Metadata } from "next";

const baseUrl = "http://jaleelkotun.com";

export const metadata: Metadata = {
  title: "Achievements",
  description: "Academic and soccer achievements of Jaleel Kotun - MVP at Juventus Academy Houston, Highest Goal Scorer, Best Player of the Season. Academic excellence in STEM, Mathematics, and Spanish. 4.0 GPA student-athlete.",
  openGraph: {
    title: "Achievements | Jaleel Kotun",
    description: "Academic and soccer achievements of Jaleel Kotun - MVP at Juventus Academy Houston, Highest Goal Scorer, Best Player of the Season. Academic excellence in STEM, Mathematics, and Spanish.",
    url: `${baseUrl}/achievements`,
    images: [
      {
        url: "/images/25.jpg",
        width: 1200,
        height: 900,
        alt: "Jaleel Kotun Achievements",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Achievements | Jaleel Kotun",
    description: "Academic and soccer achievements of Jaleel Kotun - MVP at Juventus Academy Houston, Highest Goal Scorer, Best Player of the Season.",
    images: ["/images/25.jpg"],
  },
  alternates: {
    canonical: `${baseUrl}/achievements`,
  },
};

export default function AchievementsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

