import React from "react";
import ProductItem from "./ProductItem";


export default function ProductItemListing(props){
  return(
    <div>
      <div className="row">
        <div className="col-12 nt-prd-lst-itm-pd">
          <div className="float-right">
            <span>Sort By : </span>
            <span>Price (High to Low)</span>
          </div>
        </div>
        {
          [...Array(9)].map((v,i)=>{
            return(
              <div className="col-4 col-sm-6 col-md-6 col-lg-6 col-xl-4 nt-prd-itm-wrpr-ctnr" key={i}>
                <ProductItem/>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}