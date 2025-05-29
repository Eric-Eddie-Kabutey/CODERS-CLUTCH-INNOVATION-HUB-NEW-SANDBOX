import { AboutUsHeroSection } from "@/components/about/AboutUsHeroSection";
import { ImageGalleryCarousel } from "@/components/about/ImageGalleryCarousel";
import { ProgramInquiriesCta } from "@/components/about/ProgramInquiriesCta";
import { VisionImpactSection } from "@/components/about/VisionImpactSection";
import { WhoWeAreSection } from "@/components/about/WhoWeAreSection";
import React from "react";

const AboutUS = () => {
  return (
    <div>
      <AboutUsHeroSection />
      <WhoWeAreSection />
      <ImageGalleryCarousel />
      <VisionImpactSection />
      <ProgramInquiriesCta />
    </div>
  );
};

export default AboutUS;
