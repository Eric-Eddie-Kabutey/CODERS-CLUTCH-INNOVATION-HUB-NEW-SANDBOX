// import Image from "next/image";

import WhoWeAre from "@/components/home/WhoWeAre";
import CaseStudies from "@/components/new-landing-page/CaseStudies";
import Challenges from "@/components/new-landing-page/challenges";
import Covered from "@/components/new-landing-page/Covered";
import Hero from "@/components/new-landing-page/Hero";
import Innovation from "@/components/new-landing-page/innovation-process";
import WhatClientSays from "@/components/new-landing-page/what-client-says";


export default function Home() {
  return (
    <div>
      <Hero />
      <WhoWeAre />
      <Challenges />
      <CaseStudies />
      <WhatClientSays />
      <Covered />
      <Innovation />
    </div>
  );
}
