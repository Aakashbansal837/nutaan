import React from "react";
import { PopUpOrderContent } from "./MyOrderComponents";
import { Button } from "@material-ui/core";
import { StitchingImg } from "../../constants";

const PickupOption = () => {
  return (
    <>
      <div className="ppup-rpo-pkup-addr">
        Confirm pickup address
        <span className="ppup-rpo-pkup-addr-right">Change</span>
      </div>
      <div className="ppup-rpo-pkup-addr-adr">Abbie Wilson – 98765543210</div>
      <div className="ppup-rpo-pkup-addr-adr-txt">
        12/F Golden Avenue
        <br />
        Salt Lake City, Ohio - 123456
      </div>
      <div className="ppup-rpo-pkup-confirm">
        <input type="checkbox" /> I confirm the product is unused
      </div>
    </>
  );
};

const ColorRejected = ({ option }) => {
  const [selected, setSelected] = React.useState();
  const ItemColor = ["#FF6060", "#77E0C9", "#79CCEC", "#FF9956"];
  return (
    <div className="ppup-rpo">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="ppup-rpo-opt">Selected Option</div>
            <div className="ppup-rpo-opt-txt">{option}</div>
          </div>
          <div className="col-12">
            <div className="ppup-rpo-clr-head">Pick a Color</div>
          </div>
          <div className="col-12">
            <div className="ppup-rpo-clr-colorBox">
              {ItemColor.map((clr, index) => {
                if (index > 3) {
                  return null;
                } else {
                  return (
                    <div
                      className={
                        selected === index
                          ? "ppup-rpo-clr-colorBox-outer-red"
                          : "ppup-rpo-clr-colorBox-outer"
                      }
                      onClick={() => setSelected(index)}
                    >
                      <div
                        className="ppup-rpo-clr-colorBox-inner"
                        style={{ backgroundColor: clr }}
                      ></div>
                    </div>
                  );
                }
              })}
            </div>
          </div>

          <div className="col-12">
            <PickupOption />
          </div>
        </div>
      </div>
    </div>
  );
};
const SizeRejected = ({ option }) => {
  const [sizeSelected, setSizeSelected] = React.useState();
  const ItemSize = [
    ["s", "5"],
    ["m", "2"],
    ["l", "0"],
    ["xl", "10"],
  ];
  return (
    <div className="ppup-rpo">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="ppup-rpo-opt">Selected Option</div>
            <div className="ppup-rpo-opt-txt">{option}</div>
          </div>

          <div className="col-12">
            <div className="ppup-rpo-clr-head">Select a size</div>
          </div>
          <div className="col-12">
            <div className="ppup-rpo-clr-colorBox">
              {ItemSize.map((dt, index) => {
                if (index > 3) {
                  return null;
                } else {
                  return (
                    <div
                      className={
                        dt[1] == 0
                          ? "ppup-rpo-sizeBox-outer-none"
                          : "ppup-rpo-sizeBox-outer"
                      }
                    >
                      <div
                        className={
                          sizeSelected === index
                            ? "ppup-rpo-sizeBox-upper-red"
                            : "ppup-rpo-sizeBox-upper"
                        }
                        onClick={() => setSizeSelected(index)}
                      >
                        {dt[0]}
                      </div>
                      <div
                        className={
                          dt[1] > 5 || dt[1] == 0
                            ? "ppup-rpo-sizeBox-lower-none"
                            : "ppup-rpo-sizeBox-lower"
                        }
                      >
                        {dt[1]} LEFT
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>

          <div className="col-12">
            <PickupOption />
          </div>
        </div>
      </div>
    </div>
  );
};
const OtherOptions = ({ option }) => {
  return (
    <div className="ppup-rpo">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="ppup-rpo-opt">Selected Option</div>
            <div className="ppup-rpo-opt-txt">{option}</div>
          </div>
          <div className="col-12">
            <PickupOption />
          </div>
        </div>
      </div>
    </div>
  );
};

const WhyReturnproduct = () => {
  const [backtoSelection, setBacktoSelection] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState(-1);

  const exchangeOptions = [
    "I don’t like this color/variant",
    "Size doesn’t fit",
    "Any other reason",
  ];
  const backToselectionClicked = () => {
    setBacktoSelection(false);
    setSelectedOption(-1);
  };

  const optionClicked = (value) => {
    setBacktoSelection(true);
    setSelectedOption(value);
  };
  return (
    <div className="container">
      <div className="row">
        <div className={"col-12  " + (backtoSelection ? "d-block" : "d-none")}>
          <div onClick={() => backToselectionClicked()} className="ppup-rp-bk">
            <i class="fa fa-arrow-left" aria-hidden="true"></i>
            &nbsp;&nbsp;&nbsp;Back to selection
          </div>
        </div>

        <div className={backtoSelection ? "d-none" : " col-12"}>
          <div className="ppup-rp-head">
            Why do you want to return this product?
          </div>
        </div>

        {/* exchange product options here */}
        {exchangeOptions.map((op, index) => {
          return (
            <div className={backtoSelection ? "d-none" : "col-12"}>
              <div
                className="ppup-rp-dt"
                style={{ opacity: index == 2 ? 0.5 : 1 }}
                onClick={() => optionClicked(index)}
              >
                <i class="fa fa-circle-o" aria-hidden="true"></i>&nbsp;&nbsp;
                {op}
              </div>
            </div>
          );
        })}

        {/* if first option selected */}

        <div className="col-12">
          {selectedOption === 0 ? (
            <ColorRejected option={exchangeOptions[selectedOption]} />
          ) : selectedOption == 1 ? (
            <SizeRejected option={exchangeOptions[selectedOption]} />
          ) : selectedOption == 2 ? (
            <OtherOptions option={exchangeOptions[selectedOption]} />
          ) : null}
        </div>
        <div className="d-none d-md-block col-12">
          <ExchangeButton />
        </div>
      </div>
    </div>
  );
};
/* confirm exchange button */
const ExchangeButton = () => {
  return (
    <div className="ppup-rp-btn">
      <Button
        className="ppup-rp-btn-button"
        variant="contained"
        color="secondary"
        data-dismiss="modal"
      >
        Confirm Exchange
      </Button>
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
          <div className="ppup-rf-img">
            <img src={StitchingImg} alt="request fitting" />
          </div>
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
        <div className="d-block d-md-none col-12">
          <ExchangeButton />
        </div>
        <div className="col-12">
          <div className="ppup-rf-btn">
            <Button
              className="ppup-rf-btn-button"
              variant="outlined"
              color="secondary"
              data-dismiss="modal"
            >
              Request Fitting
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ReturnProductModal = ({ selectedData }) => {
  return (
    <div
      className="modal fade"
      id="returnProductModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="returnProductModalTitle"
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
                  <WhyReturnproduct />
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
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
