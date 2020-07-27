import React from "react";
import { Button } from "@material-ui/core";

const SelectedAddrCard = ({ addr, AddressValueSelected }) => {
  return (
    <div className="shopping-addr-ordr">
      <div className="container">
        <div className="row">
          <div className="col-2 col-sm-2 col-md-2 col-lg-1">
            <div className="shopping-addr-ordr-nmbr">2</div>
          </div>
          <div className="col-10 col-sm-7 col-md-7 col-lg-8 ">
            <div className="shopping-addr-ordr-main">
              <div className="shopping-addr-ordr-main-head">SELECT ADDRESS</div>
              <div className="shopping-addr-adr-dt-phone">
                {addr.name}&nbsp;
                {" - "}
                {addr.contact}
              </div>
              <div className="shopping-addr-adr-dt-fullAddr">
                {addr.fullAddr} , {addr.city} , {addr.state} - {addr.pin}
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-3 col-md-3 col-lg-3">
            <div className="shopping-addr-ordr-btn">
              <Button
                className="shopping-addr-ordr-btn-1"
                color="secondary"
                variant="outlined"
                onClick={() => AddressValueSelected(false)}
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

export default SelectedAddrCard;
