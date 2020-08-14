import React from "react";
import { Button } from "@material-ui/core";

const DeliveryOption = ({ ItemColor, ItemSize }) => {
  const [selected, setSelected] = React.useState();
  const [sizeSelected, setSizeSelected] = React.useState();
  return (
    <div className="product-detail-delivery">
      <div className="container">
        <div className="row">
          <div className="col-12 px-0">
            <div className="product-detail-delivery-header">
              Pick a Color
              <span className="product-detail-delivery-header-viewAll">
                View All
              </span>
            </div>
          </div>
          <div className="col-12 px-0">
            <div className="product-detail-delivery-colorBox">
              {ItemColor.map((clr, index) => {
                if (index > 3) {
                  return null;
                } else {
                  return (
                    <div
                      className={
                        selected === index
                          ? "product-detail-delivery-colorBox-outer-red"
                          : "product-detail-delivery-colorBox-outer"
                      }
                      onClick={() => setSelected(index)}
                    >
                      <div
                        className="product-detail-delivery-colorBox-inner"
                        style={{ backgroundColor: clr }}
                      ></div>
                    </div>
                  );
                }
              })}

              <div className="product-detail-delivery-colorBox-viewMore">
                {ItemColor.length > 0
                  ? ItemColor.length > 4
                    ? `+ ${ItemColor.length - 4}  more `
                    : null
                  : null}
              </div>
            </div>
          </div>

          <div className="col-12 px-0">
            <div className="product-detail-delivery-header">
              Select a size
              <span className="product-detail-delivery-header-viewAll">
                SIZE CHART
              </span>
            </div>
          </div>

          <div className="col-12 px-0">
            <div className="product-detail-delivery-colorBox">
              {ItemSize.map((dt, index) => {
                if (index > 3) {
                  return null;
                } else {
                  return (
                    <div
                      className={
                        dt[1] == 0
                          ? "product-detail-delivery-sizeBox-outer-none"
                          : "product-detail-delivery-sizeBox-outer"
                      }
                    >
                      <div
                        className={
                          sizeSelected === index
                            ? "product-detail-delivery-sizeBox-upper-red"
                            : "product-detail-delivery-sizeBox-upper"
                        }
                        onClick={() => setSizeSelected(index)}
                      >
                        {dt[0]}
                      </div>
                      <div
                        className={
                          dt[1] > 5 || dt[1] == 0
                            ? "product-detail-delivery-sizeBox-lower-none"
                            : "product-detail-delivery-sizeBox-lower"
                        }
                      >
                        {dt[1]} LEFT
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>

          <div className="col-6 pl-0">
            <div className="product-detail-delivery-btn">
              <Button
                variant="outlined"
                color="secondary"
                className="product-detail-delivery-btn-wishlist"
              >
                Wishlist
              </Button>
            </div>
          </div>
          <div className="col-6 pr-0">
            <div className="product-detail-delivery-btn">
              <Button
                variant="contained"
                color="secondary"
                className="product-detail-delivery-btn-addToBag"
              >
                Add to Bag
              </Button>
            </div>
          </div>
          <div className="col-12 px-0">
            <div className="shopping-divider"></div>
          </div>

          <div className="col-12 px-0">
            <div className="product-detail-delivery-header">
              Check Delivery Options
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-10 col-lg-8 px-0">
            <div className="product-detail-delivery-input">
              <div className="bill-coupon">
                <input
                  type="text"
                  className="bill-coupon-input"
                  placeholder="Enter Pincode"
                />
                <Button color="Secondary" className="bill-btn">
                  Apply
                </Button>
              </div>
            </div>
          </div>

          <div className="col-12 px-0">
            <div className="product-detail-delivery-offer">
              <div className="product-detail-delivery-offer-head">
                Offers Available
              </div>
              <ul>
                {[0, 1, 2, 3].map(() => {
                  return (
                    <li className="product-detail-delivery-offer-data">
                      ‘NEW300’ Get a dsicount of ₹300 on your first purchase
                      with us •
                    </li>
                  );
                })}
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryOption;
