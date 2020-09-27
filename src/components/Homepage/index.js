import React from "react";
import Category from "./Category";
import Marquee from "./Marquee";
import FiveItemCorousal from "../Corousal/FiveItem";
import { ReactComponent as HomepageBanner } from "../../images/homepage-banner.svg";
import Collection from "./Collection";

const Homepage = ({ item }) => {
  return (
    <div className="hmpg">
      <Marquee />
      {/* banner top here */}
      <div className="hmpg-bnnr-1">
        <a href="/product-details">
          <HomepageBanner className="hmpg-bnnr-1-img" />
        </a>
      </div>
      <Category />

      {/* banner 2 here */}
      <center className="hmpg-bnnr-2">
        <a href="/combo-details">
          <HomepageBanner className="hmpg-bnnr-2-img" />
        </a>
      </center>

      {/* banner 3 here */}
      <Collection />

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="product-detail-similar-product">
              Best Selling Products
            </div>
          </div>
          <div className="col-12">
            <FiveItemCorousal items={item.similarProduct} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
