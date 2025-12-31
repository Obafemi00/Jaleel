import type { Metadata } from "next";

const baseUrl = "http://jaleelkotun.com";

export const metadata: Metadata = {
  title: "Tournaments",
  description: "Complete tournament and match history for Jaleel Kotun. MLS NEXT competition records, scores, and performance data across U15 and U16 age groups.",
  openGraph: {
    title: "Tournaments & Match History | Jaleel Kotun",
    description: "Complete tournament and match history for Jaleel Kotun. MLS NEXT competition records, scores, and performance data across U15 and U16 age groups.",
    url: `${baseUrl}/tournaments`,
    images: [
      {
        url: "/images/hero-potrait.JPG",
        width: 1200,
        height: 1600,
        alt: "Jaleel Kotun Tournaments",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tournaments & Match History | Jaleel Kotun",
    description: "Complete tournament and match history for Jaleel Kotun. MLS NEXT competition records, scores, and performance data.",
    images: ["/images/hero-potrait.JPG"],
  },
  alternates: {
    canonical: `${baseUrl}/tournaments`,
  },
};

export default function TournamentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

