import React from "react";
import { Button } from "@material-ui/core";

const ComboCard = ({ data }) => {
  return (
    <div className="shopping-combo">
      <div className="container">
        <div className="row">
          <div className="col-12 px-0">
            <div className="shopping-combo-data">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                    <div className="shopping-combo-data-heading">
                      {data.name}
                    </div>
                    <div className="shopping-combo-data-disc">{data.disc}</div>
                    <div className="shopping-combo-data-choice">
                      <div className="shopping-combo-data-choice-txt">
                        Color :{" "}
                        <span className="shopping-combo-data-choice-txt-dark">
                          {data.color}
                        </span>
                      </div>
                      <div className="shopping-combo-data-choice-txt">
                        size:{" "}
                        <span className="shopping-combo-data-choice-txt-dark">
                          {data.size}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 ">
                    <div className="shopping-combo-data-prc">
                      <div className="shopping-combo-data-price ">
                        {data.price}
                      </div>
                      <div className="shopping-combo-data-prevP">
                        was &nbsp;{data.prevP}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 ">
            <div className="shopping-divider" />
          </div>

          <div className="col-12">
            <div className="column">
              {data.pack.map((item) => {
                return (
                  <div className="shopping-combo-main">
                    <div className="row">
                      <div className="col-3 col-sm-3 col-md-4 col-lg-3 pr-0">
                        <img
                          className="shopping-combo-img"
                          src={item.img}
                          alt="item"
                        />
                      </div>
                      <div className="col-9 col-sm-9 col-md-8 col-lg-9 pl-0">
                        <div className="shopping-combo-main-data">
                          <div className="container">
                            <div className="row">
                              <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                                <div className="shopping-combo-main-data-heading">
                                  {item.name}
                                </div>
                                <div className="shopping-combo-main-data-disc">
                                  {item.disc}
                                </div>
                                <div className="shopping-combo-main-data-choice">
                                  <div className="shopping-combo-main-data-choice-txt">
                                    <span className="shopping-combo-main-data-choice-txt-1">
                                      Size:{" "}
                                    </span>
                                    <span className="shopping-combo-main-data-choice-txt-2">
                                      {item.size}
                                    </span>
                                  </div>
                                </div>
                                <div className="shopping-combo-main-data-choice-1">
                                  <div className="shopping-combo-main-data-choice-txt">
                                    <span className="shopping-combo-main-data-choice-txt-1">
                                      Original Price:{" "}
                                    </span>
                                    <span className="shopping-combo-main-data-choice-txt-2">
                                      {item.price}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="col-12 ">
            <div className="shopping-divider" />
          </div>

          <div className="col-6 col-md-6 col-lg-4 px-0">
            <Button className="shopping-btn-move">MOVE TO WISHLIST</Button>
          </div>
          <div className="col-6 col-md-6 col-lg-3 px-0">
            <Button className="shopping-btn-remove">Remove</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ComboCard;
