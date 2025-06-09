"use client";

import { NavigationBar } from "@/components/sections/navigation-bar";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { FocusAreasSection } from "@/components/sections/focus-areas-section";
import { CtaSection } from "@/components/sections/cta-section";
import { FooterSection } from "@/components/sections/footer-section";
import Prizes from "@/components/sections/prizes";
import Resources from "@/components/sections/resources";
import Timeline from "@/components/sections/timeline";
import { RegistrationDialog } from "@/components/forms/registration-dialog";
import { useRegistration } from "@/context/registration-context";

export default function Home() {
  const { isDialogOpen, closeDialog } = useRegistration();

  return (
    <div className="min-h-screen">
      <NavigationBar />
      <HeroSection />
      <AboutSection />
      <FocusAreasSection />
      <Timeline />
      <Prizes />
      <Resources />
      <CtaSection />
      <FooterSection />

      {/* Registration Dialog (centralized in one place) */}
      <RegistrationDialog isOpen={isDialogOpen} onClose={closeDialog} />
    </div>
  );
}
