import React from "react";

const DeliveryOption = () => {
  return (
    <div className="product-detail-doorstep">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-5 col-lg-6 pr-0">
            <div className="product-detail-doorstep-head">
              Introducing Doorstep Tailoring
            </div>
            <div className="product-detail-doorstep-disc d-none d-md-block">
              We promise you’ll never have to worry about clothes not fitting
              you.Instead of returning an item simply go to My Orders and
              request Doorstep Tailoring for any product. Our team of experts
              will take care of the rest
            </div>
          </div>

          <div className="d-none d-md-block col-12 col-sm-12 col-md-7 col-lg-6 pr-0">
            <div className="row">
              <div className="col-3">
                <div className="product-detail-doorstep-step">
                  Go to <br /> My Orders
                </div>
              </div>
              <div className="col-1 ">
                <div className="product-detail-doorstep-step-arrow">
                  <i
                    class="fa fa-2x fa-angle-double-right"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
              <div className="col-3">
                <div className="product-detail-doorstep-step">
                  Request Tailoring
                </div>
              </div>
              <div className="col-1 ">
                <div className="product-detail-doorstep-step-arrow">
                  <i
                    class="fa fa-2x fa-angle-double-right"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
              <div className="col-3">
                <div className="product-detail-doorstep-step">
                  Get Service <br /> at Doorstep
                </div>
              </div>
            </div>
          </div>

          <div className="d-block d-md-none col-12 px-0">
            <div className="product-detail-doorstep-smallStep">
              <div className="product-detail-doorstep-smallStep-1">
                Go to <br /> My orders
              </div>
              <div className="product-detail-doorstep-smallStep-2">
                Request <br /> Tailoring
              </div>
              <div className="product-detail-doorstep-smallStep-3">
                Get Service <br /> At Home
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryOption;
