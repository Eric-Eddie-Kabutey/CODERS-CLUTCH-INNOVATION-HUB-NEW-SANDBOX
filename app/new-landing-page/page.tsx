import CaseStudies from "@/components/new-landing-page/CaseStudies";
import WhoWeAre from "@/components/home/WhoWeAre";
import Challenges from "@/components/new-landing-page/challenges";
import Hero from "@/components/new-landing-page/Hero";
import React from "react";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <WhoWeAre />
      <Challenges />
      <CaseStudies />
    </div>
  );
};

export default LandingPage;
