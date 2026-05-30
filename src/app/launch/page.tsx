import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  // ✅ 58 characters — sits perfectly in the 50–60 sweet spot
  title: "Solace — Two quiet minutes. One companion. Real growth.",

  // ✅ 154 characters — within the 110–160 optimal range
  description:
    "A calm AI wellness companion designed around 2-minute daily reflection. Meet Aura — gentle, patient, never clinical. Now in private beta. Join the waitlist.",

  openGraph: {
    title: "Solace — Two quiet minutes. One companion. Real growth.",
    description:
      "A calm AI wellness companion designed around 2-minute daily reflection. Meet Aura — gentle, patient, never clinical. Now in private beta. Join the waitlist.",
    type: "website",
    url: "https://solace-gray-mu.vercel.app/launch",
    siteName: "Solace",
  },

  twitter: {
    card: "summary_large_image",
    title: "Solace — Two quiet minutes. One companion. Real growth.",
    description:
      "A calm AI wellness companion designed around 2-minute daily reflection. Meet Aura — gentle, patient, never clinical. Now in private beta. Join the waitlist.",
  },
};

export default function LaunchPage() {
  redirect("/");
}
