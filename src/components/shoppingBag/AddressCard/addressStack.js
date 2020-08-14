import React from "react";
import { Button, Radio } from "@material-ui/core";

const AddressStack = ({
  addr,
  ChangeSelectedAddress,
  AddressValueSelected,
}) => {
  const [selectedValue, changeSelectedvalue] = React.useState("0");

  const handleChange = (e) => {
    changeSelectedvalue(e.target.value.toString());
  };

  return (
    <div className="shopping-addr-adr">
      <div className="container">
        <div className="row">
          <div className="col-2 col-sm-1 col-md-1 col-lg-1">
            <div className="shopping-addr-adr-nmbr">2</div>
          </div>
          <div className="col-10 col-sm-11 col-md-11 col-lg-11">
            <div className="shopping-addr-adr-main-head">SELECT ADDRESS</div>
          </div>
          {addr.map((ad, index) => {
            return (
              <div className="col-12 px-0">
                <div className="shopping-divider" />
                <div className="shopping-addr-adr-dt">
                  <div className="container">
                    <div className="row">
                      <div className="col-2 col-sm-1 col-md-1 col-lg-1 px-2">
                        <Radio
                          checked={selectedValue === index.toString()}
                          onChange={(e) => handleChange(e)}
                          value={index}
                          name="addr-radio-btn"
                          inputProps={{ "aria-label": "A" }}
                        />
                      </div>
                      <div className="col-10 col-sm-11 col-md-8 col-lg-8">
                        <div>
                          <span className="shopping-addr-adr-dt-name">
                            {ad.name}
                          </span>
                          {"  -  "}
                          Mobile:{" "}
                          <span className="shopping-addr-adr-dt-phone">
                            {ad.contact}
                          </span>
                        </div>
                        <div className="shopping-addr-adr-dt-fullAddr">
                          {ad.fullAddr}
                        </div>{" "}
                        <div>
                          {ad.city}, {ad.state}
                          {" - "}
                          {ad.pin}
                        </div>
                      </div>
                      <div className="d-block d-md-none d-lg-none col-2 "></div>
                      <div className="col-3">
                        <div className="shopping-addr-adr-dt-edit">
                          Edit Address
                        </div>
                      </div>
                      <div className="d-none d-md-block col-1 "></div>
                      <div className="col-6 col-sm-6 col-md-3 col-lg-3">
                        {selectedValue === index.toString() ? (
                          <div className="shopping-addr-adr-dt-btn">
                            <Button
                              variant="contained"
                              color="secondary"
                              onClick={() => {
                                AddressValueSelected(true);
                                ChangeSelectedAddress(index);
                              }}
                            >
                              Deliver Here
                            </Button>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AddressStack;
