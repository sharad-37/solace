import { Hero } from "@/components/sections/Hero";
import { PressLogos } from "@/components/sections/PressLogos";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Problem } from "@/components/sections/Problem";
import { MeetAura } from "@/components/sections/MeetAura";
import { MoodTracking } from "@/components/sections/MoodTracking";
import { VoiceJournal } from "@/components/sections/VoiceJournal";
import { GrowthStory } from "@/components/sections/GrowthStory";
import { AppPreview } from "@/components/sections/AppPreview";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/layout/Footer";
import { getSignupCount } from "@/app/actions/get-signup-count";

// Revalidate this server component every 60 seconds
export const revalidate = 60;

export default async function Home() {
  const signupCount = await getSignupCount();

  return (
    <main id="main-content">
      <Hero signupCount={signupCount} />
      <PressLogos />
      <HowItWorks />
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
