import React from "react";

//Internal Import
import Style from "./FilterPopUp.module.css";

const FilterPopUp = ({ data }) => (
  <div className={Style.sales}>
    {data.map((el, i) => (
      <div key={i + 1} className={Style.nftFilter}>
        <div className={Style.nftFilter__input}>
          <input type="checkbox" id="select" className={Style.input_check} />
          <label htmlFor="select" className={Style.label}>
            <span className={Style.checkBox}></span>
            {el}
          </label>
        </div>
      </div>
    ))}
  </div>
);

export default FilterPopUp;
