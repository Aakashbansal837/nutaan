import React from "react";
import MyOrders from "./myOrders";
import AddressStack from "./addressStack";
import SelectedAddrCard from "./selectedAddrCard";
import Payment from "./payment";
import PaymentMode from "./paymentMode";
import AddressPopUpAddNew from "../PopUp/AddressAddNew";

const AddressCard = ({
  ChangeOrderClicked,
  count,
  addr,
  ChangeSelectedAddress,
  selectedAddress,
}) => {
  const [addrSelected, addrSelectedChange] = React.useState(false);

  const AddressValueSelected = (value) => {
    addrSelectedChange(value);
  };
  return (
    <div className="shopping-addr">
      <div className="container">
        <div className="row">
          <div className="col-12 px-0">
            <MyOrders
              count={count}
              ChangeOrderClicked={() => ChangeOrderClicked()}
            />
          </div>
          <div className="col-12 px-0">
            {addrSelected ? (
              <SelectedAddrCard
                addr={selectedAddress}
                AddressValueSelected={AddressValueSelected}
              />
            ) : (
              <AddressStack
                addr={addr}
                ChangeSelectedAddress={ChangeSelectedAddress}
                AddressValueSelected={AddressValueSelected}
              />
            )}
          </div>

          {!addrSelected ? (
            <div className="col-12 px-0">
              <div className="shopping-addr-newAdd">
                {/* <Button className="shopping-addr-newAdd-btn" color="secondary">
                  Add new Address
                </Button> */}
                <AddressPopUpAddNew />
              </div>
            </div>
          ) : null}
          <div className="col-12 px-0">
            {addrSelected ? <PaymentMode /> : <Payment />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
