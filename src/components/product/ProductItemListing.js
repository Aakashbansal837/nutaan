import React from "react";
import ProductItem from "./ProductItem";
import { Hidden } from '@material-ui/core';


export default function ProductItemListing(props){
  return(
      <div className="row nt-prd-lst-itm-row">
        <Hidden smDown>
          <div className="col-12 nt-prd-lst-itm-pd">
            <div className="float-right">
              <span>Sort By : </span>
              <span>Price (High to Low)</span>
            </div>
          </div>
        </Hidden>
        {
          [...Array(12)].map((v,i)=>{
            return(
              <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-4 nt-prd-itm-wrpr-ctnr" key={i}>
                <ProductItem/>
              </div>
            )
          })
        }
      </div>
  )
}