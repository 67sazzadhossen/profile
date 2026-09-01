import Navbar from "@/components/Navbar";
import Footer from "@/components/landing/Footer";
import AboutSection from "@/components/landing/sections/AboutSection";
import ContactSection from "@/components/landing/sections/ContactSection";
import HeroSection from "@/components/landing/sections/HeroSection";
import OutcomesSection from "@/components/landing/sections/OutcomesSection";
import ProcessSection from "@/components/landing/sections/ProcessSection";
import SkillsSection from "@/components/landing/sections/SkillsSection";
import WorkSection from "@/components/landing/sections/WorkSection";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <OutcomesSection />
        <SkillsSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
