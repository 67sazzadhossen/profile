import type { Metadata } from "next";

import Footer from "@/components/landing/Footer";
import SkillsSection from "@/components/landing/sections/SkillsSection";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Skills & Expertise — Sazzad Hossen",
  description:
    "Backend engineering capabilities and technologies used by Sazzad Hossen.",
};

export default function SkillsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <SkillsSection />
      </main>
      <Footer />
    </>
  );
}
