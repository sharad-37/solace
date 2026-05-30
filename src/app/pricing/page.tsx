import type { Metadata } from "next";
import { PricingClient } from "./PricingClient";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Solace is free to start. Upgrade to Pro for unlimited voice journaling, deeper insights, and full history.",
};

export default function PricingPage() {
  return (
    <main id="main-content">
      <PricingClient />
      <Footer />
    </main>
  );
}
