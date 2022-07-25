import React from "react";
import Image from "next/image";

//IMport INTERNAL
import Style from "./Service.module.css";
import images from "../../img";

const Service = () => {
  return (
    <div className={Style.service}>
      <div className={Style.service__Box}>
        <div className={Style.image}>
          <Image src={images.service1} />
        </div>
        <small className={Style.step}>Step 1</small>
        <h3>Filter & Discover</h3>
        <p>
          Connect with wallet, discover, buy NTFs, sell your NFTs and earn money
        </p>
      </div>
      <div className={Style.service__Box}>
        <div className={Style.image}>
          <Image src={images.service2} />
        </div>
        <small className={Style.step}>Step 2</small>
        <h3>Connect wallet</h3>
        <p>
          Connect with wallet, discover, buy NTFs, sell your NFTs and earn money
        </p>
      </div>
      <div className={Style.service__Box}>
        <div className={Style.image}>
          <Image src={images.service3} />
        </div>
        <small className={Style.step}>Step 3</small>
        <h3>Start trading</h3>
        <p>
          Connect with wallet, discover, buy NTFs, sell your NFTs and earn money
        </p>
      </div>
      <div className={Style.service__Box}>
        <div className={Style.image}>
          <Image src={images.service4} />
        </div>
        <small className={Style.step}>Step 4</small>
        <h3>Earn money</h3>
        <p>
          Connect with wallet, discover, buy NTFs, sell your NFTs and earn money
        </p>
      </div>
    </div>
  );
};

export default Service;
