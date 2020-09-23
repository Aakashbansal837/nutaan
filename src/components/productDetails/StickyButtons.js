import React from "react";
import { Button } from "@material-ui/core";

const StickyProfileButton = () => {
  return (
    <div className="product-detail-sticky-bottom">
      <div className="container">
        <div className="row">
          <div className="col-6 col-sm-6 d-block d-md-none px-0">
            <div className="product-detail-delivery-btn-smallScreen">
              <Button
                variant="outlined"
                color="secondary"
                className="product-detail-delivery-btn-smallScreen-wishlist"
              >
                Wishlist
              </Button>
            </div>
          </div>
          <div className="d-block d-md-none col-6 col-sm-6 px-0">
            <div className="product-detail-delivery-btn-smallScreen">
              <Button
                variant="contained"
                color="secondary"
                className="product-detail-delivery-btn-smallScreen-addToBag"
              >
                Add to Bag
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyProfileButton;
