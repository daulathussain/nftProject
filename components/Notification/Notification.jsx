import React from "react";
import Image from "next/image";

const notificationData = [
  {
    name: "Rayan Akhtar",
    description: "Hey you hve a new message to check here",
    time: "3 Minutes",
  },
  {
    name: "Shoaib Akhtar",
    description: "Hey you hve a new message to check here",
    time: "6 Minutes",
  },
  {
    name: "Daulat Akhtar",
    description: "Hey you hve a new message to check here",
    time: "9 Minutes",
  },
];

//Imternal IMPORT
import NotiStyle from "./Notification.module.css";
import images from "../../img";
const Notification = () => {
  return (
    <div className={NotiStyle.notification}>
      <h4>Notification</h4>

      {notificationData.map((el, i) => (
        <div className={NotiStyle.list} key={i + 1}>
          <Image
            src={images.user6}
            alt="user notification"
            width={50}
            height={50}
            className={NotiStyle.image}
          />
          <div className={NotiStyle.message}>
            <h5>{el.name}</h5>
            <p>{el.description}</p>
            <small>{el.time}</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notification;
