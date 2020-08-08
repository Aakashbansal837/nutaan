import React from "react";
import ThreeItemCorousal from "../Corousal/ThreeItem";
import ProductSpecs from "./ProductSpecs";
import DeliveryOption from "./DeliveryOption";
import DoorStepService from "./DoorstepService";

const ProductDisc = ({ item }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 ">
          <div className="product-detail-stepper">{`Women  >  Ethnic Wear  >  Designer Wear  >  Designer Saree`}</div>
        </div>
        <div className="col-12">
          <div className="product-detail-item-name">{item.name}</div>
        </div>
        <div className="col-8">
          <div className="product-detail-item-disc">{item.disc}</div>
        </div>
        <div className="col-4">
          <div className="product-detail-item-price">
            <span className="product-detail-item-price-current">
              {item.price}
            </span>
            <span className="product-detail-item-price-prev">
              was
              <strong> &nbsp;{item.prevP} &nbsp;</strong>
              before
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
      <ProductDisc item={item} />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ThreeItemCorousal images={item.images} />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-6">
            <ProductSpecs />
          </div>
          <div className="col-6">
            <DeliveryOption />
          </div>
          <div className="col-12">
            <DoorStepService />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
