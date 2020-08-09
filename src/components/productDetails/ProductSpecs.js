import React from "react";

const ProductSpecs = ({ data }) => {
  return (
    <div className="product-detail-spec">
      <div className="container">
        <div className="row">
          <div className="col-12 px-0">
            <div className="product-detail-spec-header">
              Product Specifications
            </div>
          </div>

          <div className="col-6 pl-0">
            <div className="product-detail-spec-head">Neck</div>
            <div className="product-detail-spec-data">{data.neck}</div>
            <div className="shopping-divider"></div>
          </div>
          <div className="col-6 pl-0">
            <div className="product-detail-spec-head">Shape</div>
            <div className="product-detail-spec-data">{data.shape}</div>
            <div className="shopping-divider"></div>
          </div>
          <div className="col-6 pl-0">
            <div className="product-detail-spec-head">Length</div>
            <div className="product-detail-spec-data">{data.length}</div>
            <div className="shopping-divider"></div>
          </div>
          <div className="col-6 pl-0">
            <div className="product-detail-spec-head">Sleeve Length</div>
            <div className="product-detail-spec-data">{data.sleeve}</div>
            <div className="shopping-divider"></div>
          </div>
          <div className="col-6 pl-0">
            <div className="product-detail-spec-head">Slit Details</div>
            <div className="product-detail-spec-data">{data.slit}</div>
            <div className="shopping-divider"></div>
          </div>
          <div className="col-6 pl-0">
            <div className="product-detail-spec-head">Print/Pattern Type</div>
            <div className="product-detail-spec-data">{data.print}</div>
            <div className="shopping-divider"></div>
          </div>
          <div className="col-6 pl-0">
            <div className="product-detail-spec-head">Occassion</div>
            <div className="product-detail-spec-data">{data.occasion}</div>
            <div className="shopping-divider"></div>
          </div>
          <div className="col-6 pl-0">
            <div className="product-detail-spec-head">Material/Fabric</div>
            <div className="product-detail-spec-data">{data.material}</div>
            <div className="shopping-divider"></div>
          </div>
          <div className="col-6 pl-0">
            <div className="product-detail-spec-head">Season</div>
            <div className="product-detail-spec-data">{data.season}</div>
            <div className="shopping-divider"></div>
          </div>
          <div className="col-6 pl-0">
            <div className="product-detail-spec-head">Fit Type</div>
            <div className="product-detail-spec-data">{data.fit}</div>
            <div className="shopping-divider"></div>
          </div>
          <div className="col-6 pl-0">
            <div className="product-detail-spec-seeMore">See More</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSpecs;
