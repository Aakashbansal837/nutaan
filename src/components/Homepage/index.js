import React from "react";
import Banner1 from "./Banner1";
import Category from "./Category";
import Marquee from "./Marquee";
import FiveItemCorousal from "../Corousal/FiveItem";

const Homepage = ({ item }) => {
  return (
    <div className="hmpg">
      <Marquee />
      <Banner1 />
      <Category />

      <div className="container">
        <div className="row">
          <div className="col-12 px-0">
            <div className="product-detail-similar-product">
              Best Selling Products
            </div>
          </div>
          <div className="col-12 px-0">
            <FiveItemCorousal items={item.similarProduct} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
