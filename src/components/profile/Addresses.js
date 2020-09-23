import React from "react";
import { Button } from "@material-ui/core";

const Addresses = () => {
  const [df, setDf] = React.useState(0);
  const CardData = [
    {
      name: "Abbie Wilson",
      number: "8374384783",
      address: "12/F Golden Avenue",
      location: "Salt Lake City, Ohio - 123456",
    },
    {
      name: "Abbie Wilson",
      number: "8374384783",
      address: "12/F Golden Avenue",
      location: "Salt Lake City, Ohio - 123456",
    },
  ];
  return (
    <div className="profile-address">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="profile-address-head">
              <div className="container">
                <div className="row">
                  <div className="d-none d-md-block col-md-12 col-lg-8">
                    <div className="profile-address-head-text">
                      Manage your saved addresses or add a new one
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-4 px-0">
                    <div className="profile-address-head-btn">
                      <Button
                        variant="outlined"
                        color="secondary"
                        className="profile-address-head-btn-button"
                      >
                        Add New Address
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {CardData.map((dt, index) => (
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="profile-address-main">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="profile-address-main-data-dt">
                        <span className="profile-address-main-data-name">
                          {dt.name}&nbsp;&nbsp;
                        </span>
                        - mobile :&nbsp;
                        <span className="profile-address-main-data-dt-1">
                          {dt.number}
                        </span>
                      </div>
                      <div className="profile-address-main-data-adr">
                        {dt.address}
                        <br />
                        {dt.location}
                      </div>
                    </div>

                    <div className="col-12 px-0">
                      <div className="profile-address-main-option">
                        <span
                          className={
                            df == index
                              ? "profile-address-main-option-0"
                              : "profile-address-main-option-select"
                          }
                          onClick={() => setDf(index)}
                        >
                          {df == index ? "Dafault" : "Set as Default"}
                        </span>
                        <span className="profile-address-main-option-1">
                          Remove
                        </span>
                        <span className="profile-address-main-option-1">
                          Edit
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Addresses;
