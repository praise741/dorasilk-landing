import { useRef } from "react";

// Import sections
import HeroSection from "./sections/HeroSection";
// ProblemSection repurposed as New Category Section
import ProblemSection from "./sections/ProblemSection";
import PhilosophySection from "./sections/PhilosophySection";
import DifferenceSection from "./sections/DifferenceSection";
import RitualSection from "./sections/RitualSection";
import CollectionSection from "./sections/CollectionSection";
import NewEraSection from "./sections/NewEraSection";
// Keeping FinalCTA for conversion
import FinalCTASection from "./sections/FinalCTASection";
import FloatingBubble from "@/components/ui/FloatingBubble";

const Landing = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative bg-background min-h-screen overflow-hidden">
      {/* Main content - Editorial Flow */}
      <div className="relative z-10 flex flex-col">
        <HeroSection />
        <PhilosophySection />
        <ProblemSection /> {/* Displays 'A New Category' */}
        <RitualSection />
        <NewEraSection />
        <DifferenceSection />

        <CollectionSection />

        <FinalCTASection />
      </div>

      <FloatingBubble />
    </div>
  );
};

export default Landing;
