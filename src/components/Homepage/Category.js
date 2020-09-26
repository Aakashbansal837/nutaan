import React from "react";

const Category = () => {
  const ctg = [1, 1, 1, 1, 1, 1];
  return (
    <div className="hmpg-category">
      <div className="container">
        <div className="row">
          <div className="col-12 ">
            <div className="hmpg-category-heading">Shop by Categories</div>
          </div>

          {ctg.map((itm) => {
            return (
              <div class="col-4">
                <div class="hmpg-category-main">
                  <div class="content">
                    <a href="#">
                      <div className="content-overlay"></div>{" "}
                      <img
                        className="hmpg-category-main-img"
                        src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1557246502/test_zoom.jpg"
                      />
                      <div className="content-details fadeIn-bottom">
                        <h3 className="content-title">Khumbu Valley</h3>
                        <p className="content-text"> most amazing place</p>
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
  );
};

export default Category;
