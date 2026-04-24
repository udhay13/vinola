import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import AboutDoctor from "@/components/AboutDoctor";
import FamilyCare from "@/components/FamilyCare";
import Testimonials from "@/components/Testimonials";
import GalleryGrid from "@/components/GalleryGrid";
import AppointmentCTA from "@/components/AppointmentCTA";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesGrid />
      <AboutDoctor />
      <FamilyCare />
      <Testimonials />
      <GalleryGrid />
      <AppointmentCTA />
      <ContactSection />
    </main>
  );
}
