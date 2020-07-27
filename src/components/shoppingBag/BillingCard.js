import React from "react";
import { Button } from "@material-ui/core";

const NormalCard = ({ PlaceOrderClicked, OrderPlaced }) => {
  return (
    <div className="bill">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="bill-head"> Have a Coupon Code ? </div>
          </div>
          <div className="col-12">
            <div className="bill-coupon">
              <input
                type="text"
                className="bill-coupon-input"
                placeholder="Enter code here"
              />
              <Button color="Secondary" className="bill-btn">
                Apply
              </Button>
            </div>
          </div>
          <div className="col-12">
            <div className="shopping-divider" />
          </div>
          <div className="col-12">
            <div className="bill-data">
              <div className="row">
                <div className="col-12">
                  <div className="bill-head">Sub Total</div>
                </div>
                <div className="col-8 pr-0">
                  <div className="bill-data-txt">Base Amount</div>
                </div>
                <div className="col-4 pl-0">
                  <div className="bill-data-amt">₹ 3598</div>
                </div>
                <div className="col-8 pr-0">
                  <div className="bill-data-txt">Discounts</div>
                </div>
                <div className="col-4 pl-0">
                  <div className="bill-data-amt">- ₹ 299</div>
                </div>
                <div className="col-8 pr-0">
                  <div className="bill-data-txt">Shipping Fee</div>
                </div>
                <div className="col-4 pl-0">
                  <div className="bill-data-amt">₹ 100</div>
                </div>
                <div className="col-8 pr-0">
                  <div className="bill-data-txt">Tailoring Adjustments</div>
                </div>
                <div className="col-4 pl-0">
                  <div className="bill-data-amt">₹ 150</div>
                </div>
                <div className="col-12">
                  <div className="shopping-divider-2" />
                </div>
                <div className="col-8 pr-0">
                  <div className="bill-data-txt-dark">Amount Payable</div>
                </div>
                <div className="col-4 pl-0">
                  <div className="bill-data-amt-dark">₹ 3598</div>
                </div>
                <div className="col-12">
                  <div className="bill-btn-div">
                    {OrderPlaced ? (
                      ""
                    ) : (
                      <Button
                        className="bill-btn-2"
                        color="secondary"
                        variant="contained"
                        onClick={() => PlaceOrderClicked()}
                      >
                        Place Order
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NormalCard;
