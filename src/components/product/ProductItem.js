import React from 'react';
import SampleImg from '../../images/Wishlist/8.png'

export default function ProductItem(props){
  return(
    <div className="nt-prd-itm-ctnr">
      <div className="nt-prd-itm-img-ctnr" style={{backgroundImage:`url(${SampleImg})`}}>
      </div>
      <div className="nt-prf-itm-meta-ctnr">
        <div className="w-100 nt-prf-itm-meta-ttl">
          Chumbak
        </div>
        <div className="w-100 nt-prf-itm-meta-desc">
          Block Printed Cotton Saree
        </div>
        <div className="w-100 nt-prf-itm-meta-price">
            ₹ 2,499
        </div>
      </div>
    </div>
  )
}