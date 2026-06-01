import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solace — Two quiet minutes. One companion. Real growth.",
  description:
    "A calm AI wellness companion designed around 2-minute daily reflection. Meet Aura — gentle, patient, never clinical. Now in private beta. Join the waitlist.",
  openGraph: {
    title: "Solace — Two quiet minutes. One companion. Real growth.",
    description:
      "A calm AI wellness companion designed around 2-minute daily reflection. Meet Aura — gentle, patient, never clinical. Now in private beta. Join the waitlist.",
    type: "website",
    url: "https://solace-gray-mu.vercel.app/launch",
    siteName: "Solace",
    images: [
      {
        url: "https://solace-gray-mu.vercel.app/launch/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Solace — A calm AI companion for daily reflection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solace — Two quiet minutes. One companion. Real growth.",
    description:
      "A calm AI wellness companion designed around 2-minute daily reflection. Meet Aura — gentle, patient, never clinical. Now in private beta. Join the waitlist.",
    images: ["https://solace-gray-mu.vercel.app/launch/twitter-image"],
  },
};
export default function LaunchPage() {
  redirect("/");
}
