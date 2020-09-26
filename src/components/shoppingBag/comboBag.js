import React from "react";
import NormalCard from "./normalCard";
import BillingCard from "./BillingCard";
import ShoppingBanner from "./shoppingBanner";
import ComboCard from "./comboCard";
import AddressCard from "./AddressCard/index";

const ComboBG = ({
  combo,
  normal,
  ChangeOrderClicked,
  PlaceOrderClicked,
  OrderPlaced,
  addr,
  ChangeSelectedAddress,
  selectedAddress,
  LoggedIn,
}) => {
  var [comboBag, changeComboBag] = React.useState(combo);
  var [bag, changeBag] = React.useState(normal);
  return (
    <div className="shopping">
      <div className="container">
        <div className="shopping-heading">Shopping Bag</div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-8 col-lg-8">
            {OrderPlaced ? (
              <AddressCard
                ChangeOrderClicked={() => ChangeOrderClicked()}
                count={bag.length}
                addr={addr}
                ChangeSelectedAddress={ChangeSelectedAddress}
                selectedAddress={selectedAddress}
              />
            ) : (
              <div className="column">
                {comboBag.map((cb) => {
                  return <ComboCard data={cb} />;
                })}
                {bag.map((item) => {
                  return <NormalCard data={item} />;
                })}
              </div>
            )}
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <BillingCard
              PlaceOrderClicked={() => PlaceOrderClicked()}
              OrderPlaced={OrderPlaced}
              LoggedIn={LoggedIn}
            />
          </div>
          <div className="col-12 ">
            <ShoppingBanner />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComboBG;
