import React from "react";
import { PopUpOrderContent } from "./MyOrderComponents";
import { Button } from "@material-ui/core";

export const RequestFittingModal = ({ selectedData }) => {
  return (
    <div
      className="modal fade"
      id="requestFitting"
      tabindex="-1"
      role="dialog"
      aria-labelledby="requestFittingTitle"
      aria-hidden="true"
    >
      <div
        className="modal-dialog ppup-modal-dialog  modal-dialog-centered"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title" id="exampleModalLongTitle">
              Return a Product
            </h3>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div className="ppup">
            <div className="container">
              <div className="row">
                <PopUpOrderContent data={selectedData} />
              </div>
            </div>
          </div>

          <div className="ppup-options">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                  {/* <WhyReturnproduct /> */}
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                  {/* <RequestForFitting /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
