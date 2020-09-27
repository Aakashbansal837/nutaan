import React from "react";
import { homepageCategory } from "../../constants";

const Category = () => {
  const category = homepageCategory;
  return (
    <div className="hmpg-category">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="hmpg-category-heading">Shop by Categories</div>
          </div>

          {category.map((itm) => {
            return (
              <div class="col-4 pl-0">
                <div class="hmpg-category-main">
                  <div class="content">
                    <a href="#">
                      <div className="content-overlay"></div>{" "}
                      <img className="hmpg-category-main-img" src={itm} />
                      <div className="content-details fadeIn-bottom">
                        <h3 className="content-title">Category</h3>
                        <p className="content-text"> category details</p>
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
