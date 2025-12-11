import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "600", "700"],
});

const baseUrl = "http://jaleelkotun.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Jaleel Kotun | Elite Soccer Forward | MLS NEXT Academy Player",
    template: "%s | Jaleel Kotun",
  },
  description: "Jaleel Kotun is an elite forward and winger competing in the MLS NEXT system with GFI Academy. A rising talent with a 4.0 GPA, recognized for pace, creativity, and clinical finishing. US ODP Interregional player and academy MVP.",
  keywords: [
    "Jaleel Kotun",
    "MLS NEXT",
    "soccer player",
    "elite forward",
    "GFI Academy",
    "US ODP",
    "youth soccer",
    "academy player",
    "student athlete",
  ],
  authors: [{ name: "Jaleel Kotun" }],
  creator: "Jaleel Kotun",
  publisher: "Jaleel Kotun",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Jaleel Kotun",
    title: "Jaleel Kotun | Elite Soccer Forward | MLS NEXT Academy Player",
    description: "Elite forward and winger competing in the MLS NEXT system with GFI Academy. Rising talent with 4.0 GPA, recognized for pace, creativity, and clinical finishing.",
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
    creator: "@jkotun_48",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: baseUrl,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1e3a5f" },
    { media: "(prefers-color-scheme: dark)", color: "#1e3a5f" },
  ],
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: "Jaleel Kotun",
        url: baseUrl,
        logo: {
          "@type": "ImageObject",
          url: `${baseUrl}/images/hero-potrait.JPG`,
        },
        sameAs: [
          "https://www.instagram.com/jkotun_48/",
          "https://www.youtube.com/@jkotun_48",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: "Jaleel Kotun",
        description: "Elite soccer forward and winger competing in the MLS NEXT system with GFI Academy.",
        publisher: {
          "@id": `${baseUrl}/#organization`,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "ContactPoint",
        "@id": `${baseUrl}/contact#contactpoint`,
        url: `${baseUrl}/contact`,
        contactType: "Inquiry",
        email: "jkotun48@gmail.com",
      },
      {
        "@type": "Person",
        "@id": `${baseUrl}/#person`,
        name: "Jaleel Kotun",
        url: baseUrl,
        jobTitle: "Elite Soccer Forward",
        description: "Elite forward and winger competing in the MLS NEXT system with GFI Academy. US ODP Interregional player with a 4.0 GPA.",
        image: `${baseUrl}/images/hero-potrait.JPG`,
        sameAs: [
          "https://www.instagram.com/jkotun_48/",
          "https://www.youtube.com/@jkotun_48",
        ],
        email: "jkotun48@gmail.com",
        alumniOf: [
          {
            "@type": "Organization",
            name: "Harmony School of Innovation (Katy)",
          },
          {
            "@type": "Organization",
            name: "Global Football Innovation Academy (GFI)",
          },
          {
            "@type": "Organization",
            name: "Juventus Academy Houston",
          },
        ],
        memberOf: {
          "@type": "SportsTeam",
          name: "GFI Academy",
          sport: "Soccer",
          league: "MLS NEXT",
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}


