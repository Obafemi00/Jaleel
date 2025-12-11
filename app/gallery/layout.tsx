import type { Metadata } from "next";

const baseUrl = "http://jaleelkotun.com";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photo gallery showcasing Jaleel Kotun's journey through Juventus Academy Houston, US ODP programs, and GFI Academy. Training sessions, matches, and team photos.",
  openGraph: {
    title: "Gallery | Jaleel Kotun",
    description: "Photo gallery showcasing Jaleel Kotun's journey through Juventus Academy Houston, US ODP programs, and GFI Academy. Training sessions, matches, and team photos.",
    url: `${baseUrl}/gallery`,
    images: [
      {
        url: "/images/team-photo.jpg",
        width: 1200,
        height: 800,
        alt: "Jaleel Kotun Gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | Jaleel Kotun",
    description: "Photo gallery showcasing Jaleel Kotun's journey through Juventus Academy Houston, US ODP programs, and GFI Academy.",
    images: ["/images/team-photo.jpg"],
  },
  alternates: {
    canonical: `${baseUrl}/gallery`,
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

