// import Image from "next/image";

import WhoWeAre from "@/components/home/WhoWeAre";
import CaseStudies from "@/components/new-landing-page/CaseStudies";
import Challenges from "@/components/new-landing-page/challenges";
import ContactSection from "@/components/new-landing-page/ContactSection";
import Covered from "@/components/new-landing-page/Covered";
import Events from "@/components/new-landing-page/Event";
import FoundersCompass from "@/components/new-landing-page/FoundersCompass";
import Hero from "@/components/new-landing-page/Hero";
import Innovation from "@/components/new-landing-page/innovation-process";
import NetworkSection from "@/components/new-landing-page/NetworkSection";
import NewFooter from "@/components/new-landing-page/NewFooter";
import Organization from "@/components/new-landing-page/organization";
import Testimonials from "@/components/new-landing-page/Testimonials";
import WhatClientSays from "@/components/new-landing-page/what-client-says";


export default function Home() {
  return (
    <div>
      <Hero />
      <WhoWeAre />
      <Challenges />
      <CaseStudies />
      <NetworkSection />
      <Events />
      
      <Organization />
      <FoundersCompass />
      <Innovation />
      <Testimonials />
      <ContactSection />
      <NewFooter />
    </div>
  );
}
