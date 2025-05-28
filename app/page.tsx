// import Image from "next/image";

import HeroComponent from "@/components/home/HeroSection";
import OurFactorySection from "@/components/home/OurFactorySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ValuePropositionAndPartnersSection from "@/components/home/ValuePropositionAndPartnersSection";
import WhoWeAre from "@/components/home/WhoWeAre";

export default function Home() {
  return (
    <div>
      <HeroComponent />
      <WhoWeAre />
      <OurFactorySection />
      <ValuePropositionAndPartnersSection />
      <TestimonialsSection />
    </div>
  );
}
