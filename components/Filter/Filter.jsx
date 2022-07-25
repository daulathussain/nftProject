import React, { useState } from "react";
import { HiFilter, HiChevronUp, HiChevronDown } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import { GiWallet } from "react-icons/gi";
import { FaRegLightbulb, FaVideo, FaUserAlt } from "react-icons/fa";
import { CgArrowsExchangeAltV } from "react-icons/cg";
import { MdVerified } from "react-icons/md";

const salesArray = [
  "All Sale Type",
  "Buy now",
  "On Auction",
  "New",
  "Has Offers",
];

const fileTypeArray = ["Image", "Video", "Audio"];
const orderArray = [
  "Rcently listed",
  "Ending soon",
  "Price low - high",
  "Most favorite",
];
//IMTERNAL IMPORT
import Style from "./Filter.module.css";
import FilterPopUp from "../FilterPopUp/FilterPopUp";
const Filter = () => {
  const [filter, setFilter] = useState(true);
  const [sales, setSales] = useState(false);
  const [fileType, setFileType] = useState(false);
  const [order, setOrder] = useState(false);

  const openFilter = () => {
    if (filter) {
      setFilter(false);
    } else if (!filter) {
      setFilter(true);
    }
  };

  const openSales = () => {
    if (!sales) {
      setSales(true);
      // setFileType(false);
      // setOrder(false);
    } else if (sales) {
      setSales(false);
      // setFileType(true);
      // setOrder(true);
    }
  };
  const openFileType = () => {
    if (!fileType) {
      setFileType(true);
      // setSales(false);
      // setOrder(false);
    } else if (fileType) {
      setFileType(false);
      // setSales(true);
      // setOrder(true);
    }
  };
  const openOrder = () => {
    if (!order) {
      setOrder(true);
      // setFileType(false);
      // setSales(false);
    } else if (order) {
      setOrder(false);
      // setFileType(true);
      // setSales(true);
    }
  };

  return (
    <div className={Style.filter}>
      <div className={Style.filterBox}>
        <div className={Style.filterList}>
          <p>All NFTs</p>
          <p>Arts</p>
          <p>Musics</p>
          <p>Sports</p>
          <p>Photography</p>
        </div>

        <button className={Style.Button} onClick={() => openFilter()}>
          <HiFilter />
          <span className={Style.Button__space}>Filter</span>
          {filter ? <HiChevronUp /> : <HiChevronDown />}
        </button>
      </div>

      {filter ? (
        <div className={Style.dropDown}>
          <div className={Style.dropDown__option}>
            <button className={Style.dropDown__button}>
              <GiWallet />
              <samp className={Style.button__name}>0.01 ETH - 10 ETH</samp>
              <AiFillCloseCircle />
            </button>
          </div>
          <div className={Style.dropDown__option}>
            <button
              className={Style.dropDown__button}
              onClick={() => openSales()}
            >
              <FaRegLightbulb />
              <samp className={Style.button__name}>Sale Types</samp>
              {sales ? <AiFillCloseCircle /> : <HiChevronDown />}
            </button>

            {/* ///SAles Type */}
            {sales ? <FilterPopUp data={salesArray} /> : ""}
          </div>
          <div className={Style.dropDown__option}>
            <button
              className={Style.dropDown__button}
              onClick={() => openFileType()}
            >
              <FaVideo />
              <samp className={Style.button__name}>File Types</samp>
              {fileType ? <AiFillCloseCircle /> : <HiChevronDown />}
            </button>
            {/* ///File Type */}
            {fileType ? <FilterPopUp data={fileTypeArray} /> : ""}
          </div>
          <div className={Style.dropDown__option}>
            <button
              className={Style.dropDown__button}
              onClick={() => openOrder()}
            >
              <CgArrowsExchangeAltV />
              <samp className={Style.button__name}>Sort order</samp>
              {order ? <AiFillCloseCircle /> : <HiChevronDown />}
            </button>
            {/* ///ORDER Type */}
            {order ? <FilterPopUp data={orderArray} /> : ""}
          </div>
          <div className={Style.dropDown__option}>
            <button className={Style.dropDown__button}>
              <FaUserAlt />
              <samp className={Style.button__name}>Verified creator</samp>
              <MdVerified />
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Filter;
