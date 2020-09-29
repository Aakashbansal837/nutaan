import React from "react";
import { PopUpOrderContent } from "./MyOrderComponents";
import { Button } from "@material-ui/core";

const ColorRejected = () => {
  return <div></div>;
};
const SizeRejected = () => {
  return <div></div>;
};

const WhyReturnproduct = () => {
  const [backtoSelection, setBacktoSelection] = React.useState(false);

  const exchangeOptions = [
    "I don’t like this color/variant",
    "Size doesn’t fit",
    "Any other reason",
  ];
  const backToselectionClicked = () => {
    setBacktoSelection(false);
  };

  const optionClicked = () => {
    setBacktoSelection(true);
  };
  return (
    <div className="container">
      <div className="row">
        <div className={"col-12  " + (backtoSelection ? "d-block" : "d-none")}>
          <div onClick={() => backToselectionClicked()} className="ppup-rp-bk">
            <i class="fa fa-arrow-left" aria-hidden="true"></i>
            &nbsp;Back to selection
          </div>
        </div>

        <div className={backtoSelection ? "d-none" : " col-12"}>
          <div className="ppup-rp-head">
            Why do you want to return this product?
          </div>
        </div>

        {exchangeOptions.map((op, index) => {
          return (
            <div className={backtoSelection ? "d-none" : "col-12"}>
              <div
                className="ppup-rp-dt"
                style={{ opacity: index == 2 ? 0.5 : 1 }}
                onClick={() => optionClicked()}
              >
                <i class="fa fa-circle-o" aria-hidden="true"></i>&nbsp;&nbsp;
                {op}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const RequestForFitting = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="ppup-rf-head">
            Did you know you can get alteration/fitting done at home?
          </div>
        </div>
        <div className="col-5">
          <div className="ppup-rf-img"></div>
        </div>
        <div className="col-7">
          <div className="ppup-rf-txt-red">How does it work?</div>
          <div className="ppup-rf-txt">
            1. Select ‘Request Fitting’
            <br />
            2. Pick a time slot
            <br />
            3. Gte fitting done at home
          </div>
        </div>
        <div className="col-12">
          <div className="ppup-rf-btn">
            <Button
              className="ppup-rf-btn-button"
              variant="outlined"
              color="secondary"
            >
              Request Fitting
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ReturnProduct = ({ productId, selectedData }) => {
  return (
    <div
      className="modal fade"
      id={productId}
      tabindex="-1"
      role="dialog"
      aria-labelledby={productId + "Title"}
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
                <div className="col-6">
                  <WhyReturnproduct />
                </div>
                <div className="col-6">
                  <RequestForFitting />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
