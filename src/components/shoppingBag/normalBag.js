import React from "react";
import NormalCard from "./normalCard";
import BillingCard from "./BillingCard";
import ShoppingBanner from "./shoppingBanner";
import AddressCard from "./AddressCard/index";
const NormalBag = ({
  items,
  ChangeOrderClicked,
  PlaceOrderClicked,
  OrderPlaced,
  addr,
  ChangeSelectedAddress,
  selectedAddress,
  LoggedIn,
}) => {
  var [bag, changeBag] = React.useState(items);
  return (
    <div className="shopping">
      <div className="container">
        <div className="shopping-heading">
          {OrderPlaced ? "Complete your Purchase" : "Shopping Bag"}
        </div>
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

export default NormalBag;
