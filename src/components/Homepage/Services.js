import React from "react";

const Services = () => {
  return (
    <div className="hmpg-service">
      <div className="container">
        <div className="row">
          <div className="col-4 ">
            <div className="container">
              <div className="row">
                <div className="col-3">
                  <div className="hmpg-service-icon">
                    <i class="fa fa-scissors" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="col-8">
                  <div className="hmpg-service-main">
                    <div className="hmpg-service-head">
                      Fitting At Your Home
                    </div>
                    <div className="hmpg-service-disc">
                      Clothes customised to you
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-4 ">
            <div className="container">
              <div className="row">
                <div className="col-3">
                  <div className="hmpg-service-icon">
                    <i class="fa fa-smile-o" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="col-9">
                  <div className="hmpg-service-main">
                    <div className="hmpg-service-head">
                      Consult Our Designers
                    </div>
                    <div className="hmpg-service-disc">
                      Helping you decide what to wear
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-4 ">
            <div className="container">
              <div className="row">
                <div className="col-3">
                  <div className="hmpg-service-icon">
                    <i class="fa fa-home" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="col-8">
                  <div className="hmpg-service-main">
                    <div className="hmpg-service-head">Doorstep Services</div>
                    <div className="hmpg-service-disc">
                      Bringing exciting stuff to you
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

export default Services;
