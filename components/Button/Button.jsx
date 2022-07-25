import React from "react";

//IMTERNAL IMPORT
import BtnStyle from "./Button.module.css";

const Button = ({ btnName, handleClick, classStyle }) => (
  <div className={BtnStyle.box}>
    <button className={BtnStyle.button} type="button">
      {btnName}
    </button>
  </div>
);

export default Button;
