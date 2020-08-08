import React from "react";
import { Button } from "@material-ui/core";

const NormalCard = ({ data }) => {
  return (
    <div className="shopping-normal">
      <div className="container">
        <div className="row">
          <div className="col-3 col-sm-3 col-md-3 col-lg-3 px-0">
            <img className="shopping-normal-img" src={data.img} alt="item" />
          </div>
          <div className="col-9 col-sm-9 col-md-9 col-lg-9 px-0">
            <div className="shopping-normal-data">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-8 col-lg-8">
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
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 ">
                    <div className="shopping-normal-data-prc">
                      <div className="shopping-normal-data-price ">
                        {data.price}
                      </div>
                      <div className="shopping-normal-data-prevP">
                        was &nbsp;{data.prevP}
                      </div>
                    </div>
                  </div>
                  <div className="col-12 ">
                    <div className="shopping-divider" />
                  </div>
                  <div className="d-none d-md-block col-md-6 col-lg-4 pr-0">
                    <div className="shopping-btn-move">MOVE TO WISHLIST</div>
                  </div>
                  <div className="d-none d-md-block col-md-3 col-lg-3 pl-0">
                    <div className="shopping-btn-remove">Remove</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 d-block d-md-none px-0">
            <div className="shopping-btn-move">MOVE TO WISHLIST</div>
          </div>
          <div className="col-6 d-block d-md-none px-0">
            <div className="shopping-btn-remove">Remove</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NormalCard;
