import React from "react";
import { Button } from "@material-ui/core";

const SelectedAddrCard = ({ addr, AddressValueSelected }) => {
  return (
    <div className="shopping-addr-ordr">
      <div className="container">
        <div className="row">
          <div className="col-1">
            <div className="shopping-addr-ordr-nmbr">2</div>
          </div>
          <div className="col-8">
            <div className="shopping-addr-ordr-main">
              <span className="shopping-addr-ordr-main-head">
                SELECT ADDRESS
              </span>
              <br />
              <span className="shopping-addr-adr-dt-phone">
                {addr.name}&nbsp;
              </span>
              <span>
                {" - "}
                {addr.contact}
              </span>
              <br />
              <span className="shopping-addr-adr-dt-fullAddr">
                {addr.fullAddr} , {addr.city} , {addr.state} - {addr.pin}
              </span>
            </div>
          </div>
          <div className="col-3">
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
