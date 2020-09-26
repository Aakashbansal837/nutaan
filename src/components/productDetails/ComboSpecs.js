import React, { useEffect } from "react";

const ComboSpecs = ({ data }) => {
  const [active, setActive] = React.useState(0);
  const [selectedDiv, setSelectedDiv] = React.useState(0);
  const [divWidth, setDivWidth] = React.useState(0);

  const changeBorderColor = (value) => {
    setSelectedDiv(value);
  };

  useEffect(() => {
    console.log("useEffect called");
    var screenWidth = window.screen.width;
    var tmp_width = data.length * 11 * 16; // div width in pixels
    var value = screenWidth;
    if (screenWidth > tmp_width) {
      value = screenWidth;
    } else {
      value = tmp_width;
    }
    setDivWidth(value);
    console.log("div , screen :", value, screenWidth);
  }, [window.screen.width]);
  return (
    <div className="combo-detail-spec">
      <div className="container">
        <div className="row">
          <div className="col-12 px-0">
            <div className="combo-detail-spec-header">Products Included</div>
          </div>

          {/* combo products for small and extra small screens */}
          <div className="d-block d-md-none">
            <div className="combo-detail-spec-sm">
              <div
                className="combo-detail-spec-sm-1"
                style={{
                  width: divWidth,
                }}
              >
                {data.map((dt, index) => {
                  return (
                    <div
                      className="combo-detail-spec-sm-body"
                      onClick={() => changeBorderColor(index)}
                      style={{
                        borderColor:
                          selectedDiv == index ? "#ED695F" : "#979797",
                        backgroundColor:
                          selectedDiv === index
                            ? "rgba(237, 105, 95, 0.06)"
                            : "#FFFFFF",
                      }}
                    >
                      <div className="combo-detail-spec-sm-text">{dt.disc}</div>
                      <div className="combo-detail-spec-sm-price">
                        {dt.price}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* combo products hidden for small screens */}
          <div className="d-none d-md-block">
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
                          <div
                            className={
                              active == index
                                ? "combo-detail-spec-open-secondary"
                                : "combo-detail-spec-open-main"
                            }
                          >
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
                          <div
                            className={
                              active == index
                                ? "combo-detail-spec-open-secondary"
                                : "combo-detail-spec-open-main"
                            }
                          >
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
    </div>
  );
};

export default ComboSpecs;
