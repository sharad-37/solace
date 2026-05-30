import type { Metadata } from "next";
import { AboutClient } from "./AboutClient";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "About",
  description:
    "Solace was built on a single belief: that small daily reflections compound into meaningful change.",
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <AboutClient />
      <Footer />
    </main>
  );
}
