import React, { useState } from "react";
import Image from "next/image";
import { IoMdClose, IoIosSunny, IoIosArrowDown } from "react-icons/io";

import images from "../../img";
import { Button } from "../index";
import SidebarStyle from "./Sidebar.module.css";

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
    <ul className={SidebarStyle.menuList}>
      {menuList.map((itme, i) => (
        <li
          key={i}
          className={SidebarStyle.menuItem}
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
    <ul className={SidebarStyle.menuList}>
      {contactList.map((itme, i) => (
        <li
          key={i}
          className={SidebarStyle.menuItem}
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

const Sidebar = ({ opneSidebar, setOpneSidebar }) => {
  const [active, setActive] = useState(false);
  const [activeList, setActiveList] = useState(false);
  const [closeNav, setCloseNav] = useState(false);

  const closeBtn = () => {
    if (opneSidebar) {
      setOpneSidebar(false);
    }
  };

  return (
    <div className={SidebarStyle.sidebar}>
      <IoMdClose className={SidebarStyle.closeBtn} onClick={() => closeBtn()} />
      <Image src={images.logo} />
      <p>
        Discover the most outstanding articles on all topics of life. Write your
        stories and share them
      </p>
      <div className={SidebarStyle.social}>
        <div className={SidebarStyle.social__list}>
          <Image src={images.facebook} width={20} height={20} />
          <Image src={images.twitter} width={20} height={20} />
          <Image src={images.youtube} width={20} height={20} />
          <Image src={images.telegram} width={20} height={20} />
        </div>
        <IoIosSunny />
      </div>
      <div className={SidebarStyle.box}>
        <div className={SidebarStyle.descover}>
          <div
            className={SidebarStyle.descover__box}
            onClick={(e) =>
              !activeList ? setActiveList(true) : setActiveList(false)
            }
          >
            <p>Discover</p>
            <IoIosArrowDown />
          </div>
          {activeList ? (
            <div className={SidebarStyle.descover__list}>
              <MenuItems />
            </div>
          ) : (
            ""
          )}
        </div>

        <div className={SidebarStyle.descover}>
          <div
            className={SidebarStyle.descover__box}
            onClick={(e) => (!active ? setActive(true) : setActive(false))}
          >
            <p>Help Center</p>
            <IoIosArrowDown />
          </div>
          {active ? (
            <div className={SidebarStyle.descover__list}>
              <ContactPage />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className={SidebarStyle.groupBtn}>
        <Button btnName="Create" />
        <Button
          btnName="Connect Wallet"
          className={SidebarStyle.btnTransprant}
        />
      </div>
    </div>
  );
};

export default Sidebar;
