import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import CertificationsSection from "@/components/CertificationsSection";
import TestimonialSection from "@/components/TestimonialSection";
import GallerySection from "@/components/GallerySection";

export default function Portfolio() {
  useEffect(() => {
    document.title = "Lovepreet Singh - Full Stack Developer & AI Enthusiast";
  }, []);

  return (
    <div className="min-h-screen bg-background text-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <CertificationsSection />
      <SkillsSection />
      <ExperienceSection />
      <GallerySection />
      <TestimonialSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="relative bg-black border-t border-black py-6 sm:py-8 overflow-hidden">
        <div className="absolute inset-0 bg-black z-50 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-2 xs:px-4 sm:px-6 lg:px-8 z-50">
          <div className="text-center">
            <p className="text-white text-xs xs:text-sm">
              © 2025 <span className="text-[hsl(217,91%,60%)] font-bold">Lovepreet Singh</span>. Built using React & Tailwind CSS.
            </p>
            <p className="text-white text-[10px] xs:text-xs sm:text-sm mt-1 xs:mt-2">
              Turning ideas into innovative software solutions
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
