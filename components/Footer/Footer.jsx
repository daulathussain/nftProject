import React from "react";
import Image from "next/image";
import { SiMinutemailer } from "react-icons/si";

//IMTERNAL IMPORT
import FooterStyle from "./Footer.module.css";
import images from "../../img";

const Footer = () => {
  return (
    <div className={FooterStyle.footer}>
      <div className={FooterStyle.footerBox}>
        <Image src={images.logo} />
        <p className={FooterStyle.text}>
          Welcom to NFT Marketplace. Buy and sale Nft and get commision{" "}
        </p>
        <div className={FooterStyle.social}>
          <Image src={images.facebook} width={20} height={20} />
          <Image src={images.telegram} width={20} height={20} />
          <Image src={images.twitter} width={20} height={20} />
          <Image src={images.vimeo} width={20} height={20} />
        </div>
      </div>
      <div className={FooterStyle.footerBox}>
        <h6>Discover</h6>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Collection</a>
          </li>
          <li>
            <a href="/">Search</a>
          </li>
          <li>
            <a href="/">Author</a>
          </li>
          <li>
            <a href="/">Account Setting</a>
          </li>
          <li>
            <a href="/">Upload Item</a>
          </li>
          <li>
            <a href="/">Connect Wallet</a>
          </li>
        </ul>
      </div>
      <div className={FooterStyle.footerBox}>
        <h6>Help center</h6>
        <ul>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact us</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
          <li>
            <a href="/">Signin</a>
          </li>
          <li>
            <a href="/">Subscription</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
        </ul>
      </div>
      <div className={FooterStyle.footerBox}>
        <h6>Subscribe</h6>

        <div className={FooterStyle.email}>
          <input type="email" placeholder="Email*" />
          <SiMinutemailer />
        </div>

        <p className={FooterStyle.sub_description}>
          Get latest update about new NFT listing & price every day, Welcome to
          Cyptro NFT marktplace
        </p>
      </div>
    </div>
  );
};

export default Footer;
