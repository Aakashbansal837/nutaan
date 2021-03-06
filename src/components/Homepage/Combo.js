import React from "react";
import { homepageCombo } from "../../constants";
import { Button } from "@material-ui/core";

const Combo = () => {
  return (
    <div className="hmpg-combo">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="hmpg-combo-head">Combos / Popular Sub-category</div>
          </div>

          {homepageCombo.map((img) => {
            return (
              <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                <div className="hmpg-combo-main">
                  <img
                    src={img}
                    className="hmpg-combo-main-img d-none d-md-block"
                  />
                  <center className="hmpg-combo-main-btn d-none d-md-block">
                    <Button
                      className="hmpg-combo-main-btn-button"
                      color="secondary"
                      variant="contained"
                    >
                      View Combo
                    </Button>
                  </center>
                  <div class="content d-block d-md-none">
                    <a href="#">
                      <div className="content-overlay"></div>
                      <img className="hmpg-combo-main-img" src={img} />
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
  );
};

export default Combo;
