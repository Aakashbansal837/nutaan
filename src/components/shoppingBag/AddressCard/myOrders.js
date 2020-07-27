import React from "react";
import { Button } from "@material-ui/core";

const MyOrders = ({ count, ChangeOrderClicked }) => {
  return (
    <div className="shopping-addr-ordr">
      <div className="container">
        <div className="row">
          <div className="col-2 col-sm-2 col-md-2 col-lg-1">
            <div className="shopping-addr-ordr-nmbr">1</div>
          </div>
          <div className="col-6 col-sm-7 col-md-7 col-lg-8">
            <div className="shopping-addr-ordr-main">
              <span className="shopping-addr-ordr-main-head">My Orders</span>
              <br />
              <span className="shopping-addr-ordr-main-txt">
                {count}&nbsp; items
              </span>
            </div>
          </div>
          <div className="col-4 col-sm-3 col-md-3 col-lg-3">
            <div className="shopping-addr-ordr-btn">
              <Button
                className="shopping-addr-ordr-btn-1"
                color="secondary"
                variant="outlined"
                onClick={() => ChangeOrderClicked()}
              >
                Change
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
