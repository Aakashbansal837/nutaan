import React from "react";
import ThreeItemCorousal from "../Corousal/ThreeItem";
import ProductSpecs from "./ProductSpecs";
import DeliveryOption from "./DeliveryOption";
import DoorStepService from "./DoorstepService";
import FiveItemCorousal from "../Corousal/FiveItem";

const ProductDisc = ({ item }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="product-detail-item-name">{item.name}</div>
        </div>
        <div className="col-12 col-sm-12 col-md-7 col-lg-8">
          <div className="product-detail-item-disc">{item.disc}</div>
        </div>
        <div className="col-12 col-sm-12 col-md-5 col-lg-4">
          <div className="product-detail-item-price">
            <span className="product-detail-item-price-current">
              {item.price}
            </span>
            <span className="product-detail-item-price-prev">
              <s>
                was
                <strong> &nbsp;{item.prevP} &nbsp;</strong>
                before
              </s>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Product = ({ item }) => {
  return (
    <div className="product-detail">
      <div className="container">
        <div className="row">
          <div className="d-none d-md-block col-12 ">
            <div className="product-detail-stepper">{`Women  >  Ethnic Wear  >  Designer Wear  >  Designer Saree`}</div>
          </div>
        </div>
      </div>
      {/*disc for big screen */}

      <div className="d-none d-md-block">
        <ProductDisc item={item} />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ThreeItemCorousal images={item.images} />
          </div>
        </div>
      </div>
      {/* disc for smaller screen */}
      <div className="d-block d-md-none">
        <ProductDisc item={item} />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <ProductSpecs data={item} />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <DeliveryOption ItemColor={item.color} ItemSize={item.size} />
          </div>
          <div className="col-12">
            <DoorStepService />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <FiveItemCorousal images={item.images} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
