import React from "react";
import Image from "next/image";
import { BsHeart, BsFillHeartFill } from "react-icons/bs";
import { TbPhoto } from "react-icons/tb";

//IMPERNAL IMPORT
import images from "../../img";
import Style from "./NFTCard.module.css";

const NFTCard = () => (
  <div className={Style.NFTCard}>
    <div className={Style.NFTCard__Box}>
      <div className={Style.NFTCard__image}>
        <Image
          src={images.nft_1}
          alt="NFT Image"
          className={Style.NFTCard__image_pic}
        />
      </div>
      <div className={Style.NFTCard__info}>
        <div className={Style.NFTCard__like}>
          <BsHeart />
          <small>22</small>
        </div>
        <div className={Style.NFTCard__time}>
          <p>Remaining time</p>
          <span>3h:15m:20s</span>
        </div>
      </div>
      <div className={Style.NFTCard__price}>
        <div className={Style.NFTCard__price__info}>
          <p>CloneF #1731</p>
          <div className={Style.NFTCard__stock}>
            <div className={Style.NFTCard__innerBox}>
              <samp>Current Bid</samp>
              <p>1.000 ETH</p>
            </div>
            <small>25 in stock</small>
          </div>
        </div>
        <div className={Style.NFTCard__price__icon}>
          <TbPhoto />
        </div>
      </div>
    </div>
  </div>
);

export default NFTCard;
