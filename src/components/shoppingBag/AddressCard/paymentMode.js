import React from "react";
import { Button } from "@material-ui/core";

const PaymentMode = () => {
  return (
    <div>
      <div className="shopping-pmt">
        <div className="container">
          <div className="row">
            <div className="col-2 col-sm-1 col-md-1 col-lg-1">
              <div className="shopping-pmt-nmbr">3</div>
            </div>
            <div className="col-10 col-sm-11 col-md-11 col-lg-11">
              <div className="shopping-pmt-head">PAYMENT MODE</div>
            </div>

            <div className="col-12 px-0">
              <div className="shopping-divider"></div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-4 px-0">
              <div className="shopping-pmt-main">
                <div className="shopping-pmt-opt">
                  <Button
                    className="shopping-pmt-opt-btn"
                    disabled
                    variant="contained"
                  >
                    Cash on Delivery
                  </Button>
                </div>
                <div className="shopping-pmt-opt">
                  <Button
                    className="shopping-pmt-opt-btn"
                    disabled
                    variant="contained"
                  >
                    Online Wallets
                  </Button>
                </div>
                <div className="shopping-pmt-opt">
                  <Button
                    className="shopping-pmt-opt-btn-1"
                    variant="contained"
                  >
                    Credit Debit Cards
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-8 col-lg-8 px-0">
              <center className="shopping-pmt-data">
                Click on ‘Pay Now’ to complete your order. You will be
                redirected to JusPay portal. Please provide the necessary
                details to successfully complete your order
              </center>
              <center className="shopping-pmt-data-cont">
                <Button
                  className="shopping-pmt-data-cont-btn"
                  variant="contained"
                  color="secondary"
                >
                  Continue
                </Button>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMode;
