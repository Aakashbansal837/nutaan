import React from "react";
import { Button } from "@material-ui/core";

const PaymentDetails = () => {
  const CardData = [
    {
      name: "Abbie Wilson",
      bank: "HSBC Debit Card",
      cardNumber: "2827 xxxx xxxx 8901",
      validity: "09/25",
    },
    {
      name: "Abbie Wilson",
      bank: "UBS Credit Card",
      cardNumber: "2827 xxxx xxxx 8901",
      validity: "09/25",
    },
  ];
  return (
    <div className="profile-payment">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="profile-payment-head">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                    <div className="profile-payment-head-text">
                      Manage your saved Cards or add a new one
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-4 px-0">
                    <div className="profile-payment-head-btn">
                      <Button
                        variant="contained"
                        color="secondary"
                        className="profile-payment-head-btn-button"
                      >
                        Add a Card
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {CardData.map((dt) => (
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="profile-payment-main">
                <div className="container">
                  <div className="row">
                    <div className="col-6">
                      <div className="profile-payment-main-title">NAME</div>
                      <div className="profile-payment-main-data">{dt.name}</div>
                    </div>
                    <div className="col-6">
                      <div className="profile-payment-main-title-hidden">
                        bank
                      </div>
                      <div className="profile-payment-main-data">{dt.bank}</div>
                    </div>
                    <div className="col-6">
                      <div className="profile-payment-main-title">
                        CARD NUMBER
                      </div>
                      <div className="profile-payment-main-data">
                        {dt.cardNumber}
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="profile-payment-main-title">VALIDITY</div>
                      <div className="profile-payment-main-data">
                        {dt.validity}
                      </div>
                    </div>
                    <div className="col-12 px-0">
                      <div className="profile-payment-main-option">
                        <span>Edit</span>
                        <span>Remove</span>
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

export default PaymentDetails;
