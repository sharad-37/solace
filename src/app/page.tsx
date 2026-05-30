import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { MeetAura } from "@/components/sections/MeetAura";
import { MoodTracking } from "@/components/sections/MoodTracking";
import { VoiceJournal } from "@/components/sections/VoiceJournal";
import { GrowthStory } from "@/components/sections/GrowthStory";
import { AppPreview } from "@/components/sections/AppPreview";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Problem />
      <MeetAura />
      <MoodTracking />
      <VoiceJournal />
      <GrowthStory />
      <AppPreview />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}
