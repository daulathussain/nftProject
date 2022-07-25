import React, { useState, useEffect } from "react";
import Image from "next/image";

//INPERNAL INPORT
import Style from "./HeroSection.module.css";
import Button from "../Button/Button";
import images from "../../img";
import { Filter } from "..";

const HeroSection = () => {
  return (
    <div className={Style.hero}>
      <div className={Style.right}>
        <h1>Discover, collect, and sell NFTs 🖼️</h1>
        <p>
          Discover the most outstanding NTFs in all topics of life. Creative
          your NTFs and sell them
        </p>
        <Button btnName="Start your search" />
        {/* <Filter /> */}
      </div>
      <div className={Style.left}>
        <Image src={images.hero} />
      </div>
    </div>
  );
};

export default HeroSection;
