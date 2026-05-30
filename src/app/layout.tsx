import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
//import { StructuredData } from "@/components/seo/StructuredData";
import { Inter, Manrope } from "next/font/google";
import { StickyEarlyAccessBar } from "@/components/layout/StickyEarlyAccessBar";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-manrope",
  display: "swap",
});

const siteUrl = "https://solace-gray-mu.vercel.app"; // Change to your real domain when ready

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Solace — Small reflections. Meaningful growth.",
    template: "%s · Solace",
  },
  description:
    "Solace helps you reflect, track your emotions, and build healthier habits with Aura — your gentle AI wellness companion. Two minutes a day. Meaningful change over time.",
  applicationName: "Solace",
  authors: [{ name: "Solace Wellness" }],
  generator: "Next.js",
  keywords: [
    "mental wellness",
    "journaling app",
    "mood tracker",
    "AI wellness companion",
    "emotional health",
    "self reflection",
    "daily check-in",
    "voice journal",
    "mindfulness app",
    "Aura AI",
  ],
  referrer: "origin-when-cross-origin",
  creator: "Solace Wellness, Inc.",
  publisher: "Solace Wellness, Inc.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Solace",
    title: "Solace — Small reflections. Meaningful growth.",
    description:
      "Meet Aura, your AI wellness companion. Reflect, track emotions, and grow every day — two minutes at a time.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solace — Small reflections. Meaningful growth.",
    description:
      "Meet Aura, your AI wellness companion. Reflect, track emotions, and grow every day.",
    creator: "@solaceapp",
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
  category: "wellness",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e8ebe6" },
    { media: "(prefers-color-scheme: dark)", color: "#0e0f0c" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Solace",
    operatingSystem: "iOS, Android, Web",
    applicationCategory: "HealthApplication",
    description:
      "Solace helps you reflect, track your emotions, and build healthier habits with Aura — your AI wellness companion.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "2400",
    },
    creator: {
      "@type": "Organization",
      name: "Solace Wellness, Inc.",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <ThemeProvider>
          <Navbar />
          {children}
          <StickyEarlyAccessBar />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
