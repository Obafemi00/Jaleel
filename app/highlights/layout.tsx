import type { Metadata } from "next";

const baseUrl = "http://jaleelkotun.com";

export const metadata: Metadata = {
  title: "Highlights",
  description: "Video highlights of Jaleel Kotun's elite skills, goals, and match performances. Training sessions, tournament showcases, and technical skills demonstrations. Elite forward and winger in action.",
  openGraph: {
    title: "Highlights | Jaleel Kotun",
    description: "Video highlights of Jaleel Kotun's elite skills, goals, and match performances. Training sessions, tournament showcases, and technical skills demonstrations.",
    url: `${baseUrl}/highlights`,
    images: [
      {
        url: "/images/hero-potrait.JPG",
        width: 1200,
        height: 1600,
        alt: "Jaleel Kotun Highlights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Highlights | Jaleel Kotun",
    description: "Video highlights of Jaleel Kotun's elite skills, goals, and match performances. Training sessions, tournament showcases, and technical skills demonstrations.",
    images: ["/images/hero-potrait.JPG"],
  },
  alternates: {
    canonical: `${baseUrl}/highlights`,
  },
};

export default function HighlightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

