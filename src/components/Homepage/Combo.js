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
                  <img src={img} className="hmpg-combo-main-img" />
                  <center className="hmpg-combo-main-btn">
                    <Button
                      className="hmpg-combo-main-btn-button"
                      color="secondary"
                      variant="contained"
                    >
                      View Combo
                    </Button>
                  </center>
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
