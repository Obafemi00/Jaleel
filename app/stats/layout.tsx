import type { Metadata } from "next";

const baseUrl = "http://jaleelkotun.com";

export const metadata: Metadata = {
  title: "Statistics",
  description: "Career statistics for Jaleel Kotun - 150+ games, 45 goals, 32 assists, 8 trophies. Season stats: 38 games, 15 goals, 12 assists. Performance metrics including 87% pass accuracy and 72% shot accuracy.",
  openGraph: {
    title: "Statistics | Jaleel Kotun",
    description: "Career statistics for Jaleel Kotun - 150+ games, 45 goals, 32 assists, 8 trophies. Season stats: 38 games, 15 goals, 12 assists.",
    url: `${baseUrl}/stats`,
    images: [
      {
        url: "/images/hero-potrait.JPG",
        width: 1200,
        height: 1600,
        alt: "Jaleel Kotun Statistics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Statistics | Jaleel Kotun",
    description: "Career statistics for Jaleel Kotun - 150+ games, 45 goals, 32 assists, 8 trophies. Season stats: 38 games, 15 goals, 12 assists.",
    images: ["/images/hero-potrait.JPG"],
  },
  alternates: {
    canonical: `${baseUrl}/stats`,
  },
};

export default function StatsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

