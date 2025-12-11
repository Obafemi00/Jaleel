import type { Metadata } from "next";

const baseUrl = "http://jaleelkotun.com";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Jaleel Kotun for inquiries, collaborations, or media requests. Reach out through email or social media channels. Elite MLS NEXT academy player available for recruitment opportunities.",
  openGraph: {
    title: "Contact | Jaleel Kotun",
    description: "Contact Jaleel Kotun for inquiries, collaborations, or media requests. Reach out through email or social media channels. Elite MLS NEXT academy player available for recruitment opportunities.",
    url: `${baseUrl}/contact`,
    images: [
      {
        url: "/images/Jaleel Banner.jpg",
        width: 1200,
        height: 400,
        alt: "Contact Jaleel Kotun",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Jaleel Kotun",
    description: "Contact Jaleel Kotun for inquiries, collaborations, or media requests. Elite MLS NEXT academy player available for recruitment opportunities.",
    images: ["/images/Jaleel Banner.jpg"],
  },
  alternates: {
    canonical: `${baseUrl}/contact`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

