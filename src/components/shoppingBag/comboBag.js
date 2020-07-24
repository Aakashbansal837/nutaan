import React from "react";
import NormalCard from "./normalCard";
import BillingCard from "./BillingCard";
import ShoppingBanner from "./shoppingBanner";
import ComboCard from "./comboCard";

const NormalBag = ({ combo, normal }) => {
  var [comboBag, changeComboBag] = React.useState(combo);
  var [bag, changeBag] = React.useState(normal);
  return (
    <div className="shopping">
      <div className="container">
        <div className="shopping-heading">Shopping Bag</div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-8 col-lg-8">
            <div className="column">
              {comboBag.map((cb) => {
                return <ComboCard data={cb} />;
              })}
              {bag.map((item) => {
                return <NormalCard data={item} />;
              })}
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <BillingCard />
          </div>
          <div className="col-12 ">
            <ShoppingBanner />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NormalBag;
