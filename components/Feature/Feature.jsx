import React from "react";

//IMpernal Import
import images from "../../img";
import Filter from "../Filter/Filter";
import NFTCard from "../NFTCard/NFTCard";
import Style from "./Feature.module.css";

const no = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

const Feature = () => {
  return (
    <div className={Style.div}>
      <div className={Style.feature}>
        <h2>Featured NFTs</h2>
        <p>Discover the most outstanding NFTs in all topics of life.</p>

        <Filter />

        <div className={Style.cardGrid}>
          {no.map((el, i) => (
            <NFTCard key={i + 1} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
