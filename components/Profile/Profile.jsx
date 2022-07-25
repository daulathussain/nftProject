import React from "react";
import Image from "next/image";
import { BiUser } from "react-icons/bi";
import { TbPhoto, TbHelp } from "react-icons/tb";
import { RiUserSettingsLine } from "react-icons/ri";
import { VscDebugDisconnect } from "react-icons/vsc";

//INTRNAL IMPORT
import ProfileStyle from "./Profile.module.css";
import images from "../../img";

const Profile = () => {
  return (
    <div className={ProfileStyle.profile}>
      <div className={ProfileStyle.account}>
        <Image
          src={images.user4}
          alt="profile"
          className={ProfileStyle.image}
          width={40}
          height={40}
        />
        <div className={ProfileStyle.accountDetainls}>
          <p>Shoaib Akhtar</p>
          <small>0x074435d6s89..</small>
        </div>
      </div>

      <div className={ProfileStyle.menuList}>
        <div className={ProfileStyle.userPage}>
          <BiUser />
          <a href="/">My Profile</a>
        </div>
        <div className={ProfileStyle.userPage}>
          <TbPhoto />
          <a href="/">My Items</a>
        </div>
        <div className={ProfileStyle.userPage}>
          <TbHelp />
          <a href="/">Edit Profile</a>
        </div>
        <div className={ProfileStyle.line}>
          <div className={ProfileStyle.userPage}>
            <RiUserSettingsLine />
            <a href="/"> Help</a>
          </div>
          <div className={ProfileStyle.userPage}>
            <VscDebugDisconnect />
            <a href="/"> Disconnect</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
