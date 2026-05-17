import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://www.scottmorales.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Scott Morales — Software Engineer & Entrepreneur | East Texas",
    template: "%s",
  },
  description:
    "Scott Morales — software engineer, co-founder of Vantage Method, and musician behind Fellowship Piano. Case studies, music, and notes from East Texas.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Scott Morales — Software Engineer & Entrepreneur",
    description:
      "Software engineer, agency co-founder, and musician. Case studies, music, and notes.",
    siteName: "Scott Morales",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Scott Morales",
  url: SITE_URL,
  jobTitle: "Software Engineer & Entrepreneur",
  worksFor: { "@type": "Organization", name: "Vantage Method" },
  address: {
    "@type": "PostalAddress",
    addressRegion: "TX",
    addressLocality: "East Texas",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.linkedin.com/in/rscottmorales",
    "https://github.com/scottmo223",
    "https://open.spotify.com/artist/1HQfUPJBTYF4uUjq8aAHHW",
    "https://www.instagram.com/scottmoralesdrum",
    "https://www.instagram.com/scottmomusic",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Header />
        <main className="px-4 sm:px-32 py-10 flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
