import React from "react";
import Img from "../common/Img";
import { imageArray } from "../../constants";
import HeartCheckbox from "../../element/HeartCheckBox";

export default function ProductItem(props) {
  return (
    <div className="nt-prd-itm-ctnr">
      <div
        className="nt-prd-itm-img-ctnr"
        // style={{backgroundImage:`url(${SampleImg})`}}
      >
        <HeartCheckbox className="nt-prd-itm-fav-ctnr" />
        <Img
          src={imageArray[Math.floor(Math.random() * (imageArray.length - 1))]}
          className="nt-prd-itm-image"
        />
      </div>
      <div className="nt-prf-itm-meta-ctnr">
        <div className="w-100 nt-prf-itm-meta-ttl">Chumbak</div>
        <div className="w-100 nt-prf-itm-meta-desc">
          Block Printed Cotton Saree
        </div>
        <div className="w-100 nt-prf-itm-meta-price">₹ 2,499</div>
      </div>
    </div>
  );
}
