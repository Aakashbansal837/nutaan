import React from "react";
import NormalCard from "./normalCard";
import BillingCard from "./BillingCard";

const NormalBag = ({ items }) => {
  var [bag, changeBag] = React.useState(items);
  return (
    <div className="shopping">
      <div className="container">
        <div className="shopping-heading">Shopping Bag</div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-8 col-lg-8">
            <div className="column">
              {bag.map((item) => {
                return <NormalCard data={item} />;
              })}
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <BillingCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NormalBag;
