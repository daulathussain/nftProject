import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

// import Link from "next/link";
import {
  IoMdSearch,
  IoMdArrowDropdown,
  IoIosSunny,
  IoMdNotifications,
  IoIosFingerPrint,
} from "react-icons/io";

//IMTERNAL IMPORT
import NavStyle from "./NavBar.module.css";
import images from "../../img";
import { Button, Notification, Profile } from "../index";

const menuList = [
  "Home",
  "Collection page",
  "Search page",
  "Author Profile",
  "Account settings",
  "Upload Item",
  "Connect Wallet",
];

const contactList = [
  "About",
  "Contact us",
  "Login",
  "Signin",
  "Subscription",
  "Blog",
];

///DISCOVER PAGE

const MenuItems = ({ setActive }) => {
  const generateLink = (i) => {
    switch (i) {
      case 0:
        return "/";
      case 1:
        return "./listed-nfts";
      case 2:
        return "/my-nfts";
      case 3:
        return "/my-nfts";
      case 4:
        return "/my-nfts";
      case 5:
        return "/my-nfts";
      case 6:
        return "/my-nfts";
      default:
        "/";
    }
  };

  return (
    <ul className={NavStyle.menu}>
      {menuList.map((itme, i) => (
        <li
          className={NavStyle.menu_item}
          key={i}
          onClick={() => {
            setActive(itme);
          }}
        >
          <a href={generateLink(i)}>{itme}</a>
        </li>
      ))}
    </ul>
  );
};

//CONTACT PAGE
const ContactPage = ({ setActive }) => {
  const contactLink = (i) => {
    switch (i) {
      case 0:
        return "/";
      case 1:
        return "./listed-nfts";
      case 2:
        return "/my-nfts";
      case 3:
        return "/my-nfts";
      case 4:
        return "/my-nfts";
      case 5:
        return "/my-nfts";
      case 6:
        return "/my-nfts";
      default:
        "/";
    }
  };

  return (
    <ul className={NavStyle.menu}>
      {contactList.map((itme, i) => (
        <li
          className={NavStyle.menu_item}
          key={i}
          onClick={() => {
            setActive(itme);
          }}
        >
          <a href={contactLink(i)}>{itme}</a>
        </li>
      ))}
    </ul>
  );
};
const NavBar = ({ opneSidebar, setOpneSidebar }) => {
  const router = useRouter();
  const [active, setActive] = useState("Home");

  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [connect, setConnect] = useState(true);
  const [opneMenu, setOpneMenu] = useState(false);

  const openNavigation = () => {
    if (!opneSidebar || !opneMenu) {
      setOpneSidebar(true);
      setOpneMenu(true);
    }
  };

  return (
    <div className={NavStyle.navigation}>
      <div className={NavStyle.navigation__left}>
        <Image src={images.logo} height={40} width={100} />
        <div className={NavStyle.input}>
          <input type="text" placeholder="Search items" />
          <IoMdSearch />
        </div>
      </div>
      <div className={NavStyle.navigation__right}>
        <div className={NavStyle.box}>
          <div className={NavStyle.dropDown}>
            <div
              className={NavStyle.dropDown__title}
              onClick={() =>
                discover ? setDiscover(false) : setDiscover(true)
              }
            >
              <p>Discover</p>
              <IoMdArrowDropdown />
            </div>
            {discover ? (
              <div className={NavStyle.menuList}>
                <MenuItems active={active} setActive={setActive} />
              </div>
            ) : (
              ""
            )}
          </div>
          <div className={NavStyle.dropDown}>
            <div
              className={NavStyle.dropDown__title}
              onClick={() => (help ? setHelp(false) : setHelp(true))}
            >
              <p>Help Center</p>
              <IoMdArrowDropdown />
            </div>

            {help ? (
              <div className={NavStyle.menuList}>
                <ContactPage active={active} setActive={setActive} />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <IoIosSunny className={NavStyle.icon} />

        <div className={NavStyle.notification_box}>
          <IoMdNotifications
            className={NavStyle.icon}
            onClick={() =>
              notification ? setNotification(false) : setNotification(true)
            }
          />
          {notification ? <Notification /> : ""}
        </div>

        <div className={NavStyle.button}>
          {connect ? (
            <Button btnName="Create" handleClick={() => {}} />
          ) : (
            <Button btnName="Connect" handleClick={() => {}} />
          )}
        </div>
        <div className={NavStyle.profile}>
          <Image
            className={NavStyle.picture}
            src={images.user3}
            alt="user profile"
            width={30}
            height={30}
            onClick={() => (profile ? setProfile(false) : setProfile(true))}
          />

          {profile ? <Profile /> : ""}
        </div>

        <div
          className={NavStyle.menuIcon}
          // onClick={() => (!opneMenu ? setOpneMenu(true) : setOpneMenu(false))}
          onClick={() => openNavigation()}
        >
          <IoIosFingerPrint />
        </div>
      </div>

      {opneMenu ? (
        <div
          className={NavStyle.overlay}
          onClick={() => {
            if (opneMenu) {
              setOpneMenu(false);
              setOpneSidebar(false);
            }
          }}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default NavBar;
