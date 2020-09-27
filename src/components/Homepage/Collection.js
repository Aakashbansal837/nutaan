import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { homepageCollection } from "../../constants";

const Collection = () => {
  let history = useHistory();

  const collection = homepageCollection;
  function ComboClick() {
    history.push("/combo-details");
  }
  return (
    <div className="hmpg-collection">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-5 col-lg-5 px-0">
            <center className="hmpg-collection-head">Winter Collection</center>
            <center className="hmpg-collection-text">
              <center className="hmpg-collection-text-inner">
                Shop on-trend pieces for everyday and festive occasions
              </center>
              <div className="d-none d-md-block">
                <center className="hmpg-collection-btn">
                  <Button
                    className="hmpg-collection-btn-button"
                    color="primary"
                    variant="contained"
                    onClick={ComboClick}
                  >
                    View Combo
                  </Button>
                </center>
              </div>
            </center>
          </div>

          <div className="col-12 col-sm-12 col-md-7 col-lg-7 px-0">
            <div className="container">
              <div className="row">
                {collection.map((itm) => {
                  return (
                    <div class="col-6 ">
                      <div class="hmpg-collection-main">
                        <div class="content">
                          <a href="#">
                            <div className="content-overlay"></div>{" "}
                            <img
                              className="hmpg-collection-main-img"
                              src={itm}
                            />
                            <div className="content-details fadeIn-bottom">
                              <h3 className="content-title">Collection</h3>
                              <p className="content-text">most amazing thing</p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="d-block d-md-none col-12">
            <center className="hmpg-collection-btn">
              <Button
                className="hmpg-collection-btn-button"
                color="primary"
                variant="contained"
                onClick={ComboClick}
              >
                View Combo
              </Button>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
