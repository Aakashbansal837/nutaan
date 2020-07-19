import React from "react";
import { Button } from "@material-ui/core";

const NormalCard = ({ data }) => {
  return (
    <div className="shopping-normal">
      <div className="container px-0">
        <div className="row">
          <div className="col-3 px-0">
            <img className="shopping-normal-img" src={data.img} alt="item" />
          </div>
          <div className="col-8 px-0">
            <div className="shopping-normal-data">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                  <div className="shopping-normal-data-heading">
                    {data.name}
                  </div>
                  <div className="shopping-normal-data-disc">{data.disc}</div>
                  <div className="shopping-normal-data-choice">
                    <div className="shopping-normal-data-choice-txt">
                      Size: {data.size}
                    </div>
                    <div className="shopping-normal-data-choice-txt">
                      Qty: {data.qty}
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 px-0">
                  <div className="shopping-normal-data-price ">
                    {data.price}
                  </div>
                  <div className="shopping-normal-data-prevP">
                    was &nbsp;{data.prevP}
                  </div>
                </div>
                <div className="col-12 pr-0">
                  <div className="shopping-divider" />
                </div>
                <div className="col-6 col-md-4 col-lg-4 pr-0">
                  <Button className="shopping-btn-move">
                    MOVE TO WISHLIST
                  </Button>
                </div>
                <div className="col-6 col-md-2 col-lg-2 px-0">
                  <Button className="shopping-btn-remove">Remove</Button>
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
