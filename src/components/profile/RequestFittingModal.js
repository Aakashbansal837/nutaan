import React from "react";
import { Button } from "@material-ui/core";

const RequestFittingContent = ({ data }) => {
  return (
    <div className="prf-content">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <center className="prf-content-img">
              <img src={data.img} alt="item" />
            </center>
          </div>
          <div className="col-12">
            <div className="prf-content-name">{data.name}</div>
            <div className="prf-content-disc">{data.disc}</div>
            <div className="prf-content-price">{data.price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StepperButtons = ({ stepReached, StepperBtnClick }) => {
  const stepperData = ["Service Type", "Address", "Book Slot", "Payment"];
  return (
    <div className="prf-stepper">
      {stepperData.map((dt, index) => {
        return (
          <div className="prf-stepper-btn">
            <Button
              className={
                stepReached >= index
                  ? "prf-stepper-btn-button-red"
                  : "prf-stepper-btn-button"
              }
              variant="contained"
              disabled={stepReached < index ? true : false}
              color={stepReached >= index ? "secondary" : "default"}
              onClick={() => StepperBtnClick(index)}
            >
              {dt}
            </Button>
          </div>
        );
      })}
    </div>
  );
};

const ServiceType = () => {
  return <div></div>;
};
const AddressSelect = () => {
  return <div></div>;
};
const BookSlot = () => {
  return <div></div>;
};
const Payment = () => {
  return <div></div>;
};

export const RequestFittingModal = ({ selectedData }) => {
  const [step, setStep] = React.useState(0);

  const StepperButtonClick = (value) => {
    setStep(value);
  };
  const continueButtonClicked = () => {
    console.log("continue :", step);
    setStep(step + 1);
  };
  const submitButtonClicked = () => {
    console.log("submit :", step);

    setStep(0);
  };
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
              Home Tailoring
            </h3>

            <StepperButtons
              stepReached={step}
              StepperBtnClick={StepperButtonClick}
            />
          </div>

          <div className="prf">
            <div className="container">
              <div className="row">
                <div className="col-4">
                  <RequestFittingContent data={selectedData} />
                </div>
                <div className="col-8"></div>
                <div className="col-12">
                  <div className="container">
                    <div className="row">
                      <div className="d-none d-md-block col-md-5 col-lg-8"></div>
                      <div className="col-12 col-sm-12 col-md-5 col-lg-4">
                        <div className="prf-main-btn">
                          <Button
                            className="prf-main-btn-button"
                            variant="outlined"
                            color="secondary"
                            data-dismiss={step == 3 ? "modal" : ""}
                            onClick={() =>
                              step == 3
                                ? submitButtonClicked()
                                : continueButtonClicked()
                            }
                          >
                            {step == 3 ? "Submit" : "Continue"}
                          </Button>
                        </div>
                      </div>
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
};
