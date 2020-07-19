import React from 'react';
import { connect } from "react-redux";
import FormGroup from '@material-ui/core/FormGroup';
import { Checkbox, Hidden } from '@material-ui/core';
import { ReactComponent as FilterIcon } from '../../images/filter.svg';
import { ReactComponent as SortIcon } from '../../images/sort.svg';

var categories = [
  'Plain Saree',
  'Silk Saree',
  'Block printed saree'
]

var brands = [
  'Rust orange',
  'MissaMore',
  'Adiriti'
]

var color = [
  ['Blue','#7CC6FF'],
  ['Orange','#F99654'],
  ['Red','#FF8787'],
  ['Yellow','#FADF6D']
]


class ProductListingFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: categories,
      brands: brands,
      color: color,
      checkedItem: {

      }
    };
  }



  render() {
    return (
      <React.Fragment>
        <Hidden smDown>
          <div className="row">
            <div className="col-6 nt-prd-fltr-ttl nt-prd-lst-itm-pd">
              FILTERS
            </div>
            <div className="col-6 nt-prd-fltr-ttl nt-small nt-prd-lst-itm-pd">
              Clear
            </div>

            <div className="col-12 nt-prf-fltr-itm-ttl">
              Categories
            </div>
            <div className="col-12 nt-prd-lst-chkbox-ctnr">
              <FormGroup row>
                {
                  this.state.categories.map((v, i) => {
                    return (
                      <div className="w-100" key={i}>
                        <Checkbox
                          className="nt-prd-lst-chkbox"
                          value="secondary"
                          color="primary"
                          // onClick={(e)=>this.props.handle(e,2)}
                          inputProps={{ 'aria-label': 'filter checkbox' }}
                        />
                        <span className="nt-prd-lst-chkbox-value">{v}</span>
                      </div>
                    )
                  })
                }
              </FormGroup>
            </div>

            <div className="col-12 nt-prf-fltr-itm-ttl">
              <div className="row">
                <div className="col-6">
                    Brands
                </div>
                <div className="col-6">

                </div>
              </div>
            </div>
            <div className="col-12 nt-prd-lst-chkbox-ctnr">
              <FormGroup row>
                {
                  this.state.brands.map((v, i) => {
                    return (
                      <div className="w-100" key={i}>
                        <Checkbox
                          className="nt-prd-lst-chkbox"
                          value="secondary"
                          color="primary"
                          // onClick={(e)=>this.props.handle(e,2)}
                          inputProps={{ 'aria-label': 'filter checkbox' }}
                        />
                        <span className="nt-prd-lst-chkbox-value">{v}</span>
                      </div>
                    )
                  })
                }
              </FormGroup>
            </div>

            <div className="col-12 nt-prf-fltr-itm-ttl">
              <div className="row">
                <div className="col-6">
                    Color
                </div>
                <div className="col-6">

                </div>
              </div>
            </div>
            <div className="col-12 nt-prd-lst-chkbox-ctnr">
              <FormGroup row>
                {
                  this.state.color.map((v, i) => {
                    return (
                      <div className="w-100 d-flex" key={i}>
                        <div>
                          <Checkbox
                            className="nt-prd-lst-chkbox"
                            value="secondary"
                            color="primary"
                            // onClick={(e)=>this.props.handle(e,2)}
                            inputProps={{ 'aria-label': 'filter checkbox' }}
                          />
                        </div>
                        <div className="center-all">
                          <div className="nt-prd-lst-chkbox-clr-box" style={{backgroundColor:v[1]}}>&nbsp;</div>
                        </div>
                        <div className="nt-prd-lst-chkbox-value center-all">&nbsp;{v[0]}</div>
                      </div>
                    )
                  })
                }
              </FormGroup>
            </div>

          </div>
        </Hidden>
        <Hidden mdUp>
          <div className="row m-0 nt-prd-list-mb-fltr-ctnr">
            <div className="col-6 p-0">
              <div className="nt-prd-list-mb-fltr-btn">
                  <div className="w-100 center">
                    <span>
                      <FilterIcon className="nt-prd-list-mb-fltr-icon"/>
                    </span>
                    <span className="nt-prd-list-mb-fltr-txt">
                      FILTERS
                    </span>
                  </div>
              </div>
            </div>
            <div className="col-6 p-0">
              <div className="nt-prd-list-mb-fltr-btn">
                  <div className="w-100 center">
                    <span>
                      <SortIcon className="nt-prd-list-mb-fltr-icon"/>
                    </span>
                    <span className="nt-prd-list-mb-fltr-txt">
                      SORT
                    </span>
                  </div>
              </div>
            </div>
          </div>
        </Hidden>
      </React.Fragment>
    )
  }
}


const mapStateToProps = (state) => ({
  loading: state.app.apiLoading,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListingFilter);