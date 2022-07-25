import React from "react";
import Image from "next/image";

//INTERNAL IMPORT SECTION
import images from "../img";
import { HeroSection, Service, Feature } from "../components";

function Home() {
  return (
    <div>
      <HeroSection />
      <Service />
      <Feature />
    </div>
  );
}

export default Home;
