import type { Metadata } from "next";

const baseUrl = "http://jaleelkotun.com";

export const metadata: Metadata = {
  title: "Biography",
  description: "Biography of Jaleel Kotun - Elite forward and winger from Texas. Playing for GFI Academy in MLS NEXT, US ODP Interregional roster member. 4.0 GPA student-athlete at Harmony School of Innovation. Former MVP at Juventus Academy Houston.",
  openGraph: {
    title: "Biography | Jaleel Kotun",
    description: "Biography of Jaleel Kotun - Elite forward and winger from Texas. Playing for GFI Academy in MLS NEXT, US ODP Interregional roster member. 4.0 GPA student-athlete.",
    url: `${baseUrl}/bio`,
    images: [
      {
        url: "/images/AboutMe.JPG",
        width: 1200,
        height: 1200,
        alt: "Jaleel Kotun Biography",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Biography | Jaleel Kotun",
    description: "Biography of Jaleel Kotun - Elite forward and winger from Texas. Playing for GFI Academy in MLS NEXT, US ODP Interregional roster member. 4.0 GPA student-athlete.",
    images: ["/images/AboutMe.JPG"],
  },
  alternates: {
    canonical: `${baseUrl}/bio`,
  },
};

export default function BioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

