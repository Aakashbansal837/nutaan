import React from "react";
import { connect } from "react-redux";
import Footer from "../components/common/footer";
import Navbar from "../components/common/navbar";
import { Breadcrumbs, Typography } from '@material-ui/core';
import ProductListingFilter from '../components/product/ProductListingFilter';
import ProductItemListing from '../components/product/ProductItemListing';

function PrdListBreadcrumbs(props) {
  return (
    <Breadcrumbs aria-label="breadcrumb" className="w-100">
      <Typography className="nt-prd-brd-txt">Women</Typography>
      <Typography className="nt-prd-brd-txt">Ethnic Wear</Typography>
      <Typography className="nt-prd-brd-txt font-weight-bold">Designer Wear</Typography>
    </Breadcrumbs>
  )
}


class ProductListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="nt-prd-lst-ctnr" style={{ minHeight: "500px" }}>
          <PrdListBreadcrumbs />
          <div className="w-100 nt-prd-list-ttl-ctnr">
            <span className="head">Designer Wear Stuff -</span>
            <span className="tail"> 108 items found</span>
          </div>
          <div className="nt-prd-list-itm-main-ctnr">
            <div className="row">
              <div className="col-3 col-lg-3 nt-prd-fltr-wrpr">
                <ProductListingFilter/>
              </div>
              <div className="col-9 col-lg-9">
                <ProductItemListing/>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.app.apiLoading,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing);
