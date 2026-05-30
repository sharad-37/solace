import type { Metadata } from "next";
import { PrivacyClient } from "./PrivacyClient";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Solace collects, uses, and protects your personal data. Plain language. No tricks.",
};

export default function PrivacyPage() {
  return (
    <main id="main-content">
      <PrivacyClient />
      <Footer />
    </main>
  );
}
