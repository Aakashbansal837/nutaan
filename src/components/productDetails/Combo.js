import React from "react";
import ThreeItemCorousal from "../Corousal/ThreeItem";
import ComboSpecs from "./ComboSpecs";
import DeliveryOption from "./DeliveryOption";
import DoorStepService from "./DoorstepService";
import FiveItemCorousel from "../Corousal/FiveItem";

const ComboDisc = ({ item }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-7 col-lg-8 pr-0">
          <div className="combo-detail-item-name">
            {item.name}{" "}
            <span className="combo-detail-item-cmb">Combo Product</span>
          </div>
          {/* </div>
        <div className="col-12 col-sm-12 col-md-7 col-lg-8"> */}
          <div className="combo-detail-item-disc">{item.disc}</div>
        </div>
        <div className="col-12 col-sm-12 col-md-5 col-lg-4 pr-0">
          <div className="combo-detail-item-right">
            <span className="combo-detail-item-right-cmb">Combo Price</span>
            <span className="combo-detail-item-right-cmb-dt ">
              Saving ₹798 with this combo
            </span>
          </div>
          <div className="combo-detail-item-price">
            <span className="combo-detail-item-price-current">
              {item.price}
            </span>
            <span className="combo-detail-item-price-prev">
              <s>
                was
                <strong>&nbsp;{item.prevP} &nbsp;</strong>
                before
              </s>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ComboProduct = ({ item }) => {
  return (
    <div className="product-detail">
      <div className="container">
        <div className="row">
          <div className="col-12 ">
            <div className="product-detail-stepper">{`Women  >  Ethnic Wear  >  Designer Wear  >  Designer Saree`}</div>
          </div>
        </div>
      </div>
      {/*disc for big screen */}

      <div className="d-none d-md-block">
        <ComboDisc item={item} />
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
        <ComboDisc item={item} />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <ComboSpecs data={item.data} />
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
            <FiveItemCorousel items={item.similarProduct} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComboProduct;
