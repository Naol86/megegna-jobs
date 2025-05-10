import AboutSection from "@/components/landing-page-components/AboutSection";
import FeaturesSection from "@/components/landing-page-components/FeaturesSection";
import HeroSection from "@/components/landing-page-components/HeroSection";
import ProcessSection from "@/components/landing-page-components/ProcessSection";
import { Navbar } from "@/components/shared/navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProcessSection />
        <FeaturesSection />
      </main>
    </div>
  );
}
