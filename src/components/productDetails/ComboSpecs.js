import React from "react";

const ComboSpecs = ({ data }) => {
  const [active, setActive] = React.useState(0);
  return (
    <div className="combo-detail-spec">
      <div className="container">
        <div className="row">
          <div className="col-12 px-0">
            <div className="combo-detail-spec-header">Products Included</div>
          </div>
          {data.map((dt, index) =>
            active == index ? (
              <div className="col-12 px-0">
                <div className="combo-detail-spec-open">
                  <div className="container">
                    <div className="row">
                      <div className="d-none d-md-block col-1 px-0">
                        <div className="combo-detail-spec-open-leftSlide"></div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-11 col-lg-11 pl-0">
                        <div className="combo-detail-spec-open-main">
                          <div className="container">
                            <div className="row">
                              <div className="col-4 col-sm-3 col-md-4 col-lg-3 px-0">
                                <img
                                  className="combo-detail-spec-img"
                                  src={dt.img}
                                ></img>
                              </div>
                              <div className="col-8 col-sm-9 col-md-8 col-lg-9 px-0">
                                <div className="combo-detail-spec-data">
                                  <div className="combo-detail-spec-data-head">
                                    {dt.name}
                                  </div>
                                  <div className="combo-detail-spec-data-disc">
                                    {dt.disc}
                                  </div>
                                  <div className="combo-detail-spec-data-prc">
                                    {dt.price}
                                    <span
                                      className="d-none d-md-block combo-detail-spec-data-show"
                                      onClick={() => setActive(-1)}
                                    >
                                      show less
                                    </span>
                                  </div>
                                </div>
                              </div>

                              <div className="d-none d-md-block col-12 px-0">
                                <div className="combo-detail-spec-main-head">
                                  Specifications
                                </div>
                              </div>
                              <div className="d-none d-md-block col-6 pl-0">
                                <div className="combo-detail-spec-main-dt">
                                  Neck
                                </div>
                                <div className="combo-detail-spec-main-dt-data">
                                  {dt.neck}
                                </div>
                                <div className="d-none d-md-block shopping-divider"></div>
                              </div>
                              <div className="d-none d-md-block col-6 pl-0">
                                <div className="combo-detail-spec-main-dt">
                                  Shape
                                </div>
                                <div className="combo-detail-spec-main-dt-data">
                                  {dt.shape}
                                </div>
                                <div className="d-none d-md-block shopping-divider"></div>
                              </div>
                              <div className="d-none d-md-block col-6 pl-0">
                                <div className="combo-detail-spec-main-dt">
                                  Length
                                </div>
                                <div className="combo-detail-spec-main-dt-data">
                                  {dt.length}
                                </div>
                                <div className="d-none d-md-block shopping-divider"></div>
                              </div>
                              <div className="d-none d-md-block col-6 pl-0">
                                <div className="combo-detail-spec-main-dt">
                                  Sleeve Length
                                </div>
                                <div className="combo-detail-spec-main-dt-data">
                                  {dt.sleeve}
                                </div>
                                <div className="d-none d-md-block shopping-divider"></div>
                              </div>
                              <div className="d-none d-md-block col-6 pl-0">
                                <div className="combo-detail-spec-main-dt">
                                  Slit Details
                                </div>
                                <div className="combo-detail-spec-main-dt-data">
                                  {dt.slit}
                                </div>
                              </div>
                              <div className="d-none d-md-block col-6 pl-0">
                                <div className="combo-detail-spec-main-dt">
                                  Print/Pattern Type
                                </div>
                                <div className="combo-detail-spec-main-dt-data">
                                  {dt.print}
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
            ) : (
              <div className="col-12 px-0">
                <div className="combo-detail-spec-open">
                  <div className="container">
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-11 col-lg-12 pl-0">
                        <div className="combo-detail-spec-open-main">
                          <div className="container">
                            <div className="row">
                              <div className="col-4 col-sm-3 col-md-4 col-lg-3 px-0">
                                <img
                                  className="combo-detail-spec-img"
                                  src={dt.img}
                                ></img>
                              </div>
                              <div className="col-8 col-sm-9 col-md-8 col-lg-9 px-0">
                                <div className="combo-detail-spec-data">
                                  <div className="combo-detail-spec-data-head">
                                    {dt.name}
                                  </div>
                                  <div className="combo-detail-spec-data-disc">
                                    {dt.disc}
                                  </div>
                                  <div className="combo-detail-spec-data-prc">
                                    {dt.price}
                                    <span
                                      className="d-none d-md-block combo-detail-spec-data-show"
                                      onClick={() => setActive(index)}
                                    >
                                      show more
                                    </span>
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
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ComboSpecs;
