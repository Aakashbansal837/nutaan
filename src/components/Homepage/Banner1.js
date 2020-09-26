import React from "react";
import { ReactComponent as HomepageBanner } from "../../images/homepage-banner.svg";

const Banner1 = (props) => {
  return (
    <a className="hmpg-bnnr-1" href="/product-details">
      <HomepageBanner
        onClick={() => {
          props.history.push("/product-details");
        }}
      />
    </a>
  );
};

export default Banner1;
