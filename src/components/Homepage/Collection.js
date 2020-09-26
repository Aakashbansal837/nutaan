import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

const Collection = () => {
  let history = useHistory();

  const ctg = [1, 1, 1, 1];
  function ComboClick() {
    history.push("/combo-details");
  }
  return (
    <div className="hmpg-collection">
      <div className="container">
        <div className="row">
          <div className="col-5">
            <center className="hmpg-collection-head">Winter Collection</center>
            <center className="hmpg-collection-text">
              <center className="hmpg-collection-text-inner">
                Shop on-trend pieces for everyday and festive occasions
              </center>
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
            </center>
          </div>

          <div className="col-7">
            <div className="container">
              <div className="row">
                {ctg.map((itm) => {
                  return (
                    <div class="col-6 px-1">
                      <div class="hmpg-collection-main">
                        <div class="content">
                          <a href="#">
                            <div className="content-overlay"></div>{" "}
                            <img
                              className="hmpg-collection-main-img"
                              src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1557246502/test_zoom.jpg"
                            />
                            <div className="content-details fadeIn-bottom">
                              <h3 className="content-title">Khumbu Valley</h3>
                              <p className="content-text">most amazing place</p>
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
        </div>
      </div>
    </div>
  );
};

export default Collection;
