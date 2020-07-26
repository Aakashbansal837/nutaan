import React from "react";
import { Button } from "@material-ui/core";

const MyOrders = ({ count, ChangeOrderClicked }) => {
  return (
    <div className="shopping-addr-ordr">
      <div className="container">
        <div className="row">
          <div className="col-1">
            <div className="shopping-addr-ordr-nmbr">1</div>
          </div>
          <div className="col-8">
            <div className="shopping-addr-ordr-main">
              <span className="shopping-addr-ordr-main-head">My Orders</span>
              <br />
              <span className="shopping-addr-ordr-main-txt">
                {count}&nbsp; items
              </span>
            </div>
          </div>
          <div className="col-3">
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
