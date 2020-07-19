import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import SimpleCheckbox from '../../element/SimpleCheckbox';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

var filterKey = [
  "Size",
  "Brand",
  "Color",
  "Category",
  "Discount",
  "Rating"
]

var filterOpt = {
  "Size" : ["Free Size","XS","S","M (Medium)","L (Large)","XL","XXL"],
  "Brand" : ["Nike","Puma","Addidas"],
  "Color" : ["Red","Yellow","Green","Blue"],
  "Category" : ["Women","Kids"],
  "Discount" : ["Upto 10%","Upto 25%"],
  "Rating" : ["5 Star", "4 Star", "3 Star", "2 Star", "1 Star"]
}

function FilterKey(props){
  var classes = "nt-full-filter-key center-all";
  if(props.active){
    classes += " active";
  }
  return(
    <div className={classes} onClick={props.onClick}>
      <div className="w-100 nt-full-filter-pd-x">
        <span>{props.value}</span>
        <span className="float-right">{props.items}</span>
      </div>
    </div>
  )
}

function FilterOption(props){
  var classes = "nt-full-filter-key center-all active";
  return(
    <div className={classes} onClick={props.onClick}>
      <div className="w-100 nt-full-filter-pd-x">
        <span><SimpleCheckbox/></span>
        <span>{props.value}</span>
      </div>
    </div>
  )
}

export default function FullFilterPop(props) {
  const [avtiveKey, setActiveKey] = React.useState(0);
  const [options, selectFilterOption] = React.useState(filterOpt[filterKey[0]]);
  
  const checkActive = (index)=>{
    return index === avtiveKey;
  }
  
  const keyClick = (index)=>{
    if(filterKey[index]){
      var key = filterKey[index];
      var options = filterOpt[key];
      options = options ? options : [];
      selectFilterOption(options);
    }
    return setActiveKey(index);
  }

  return (
    <div>
      <Dialog
      fullScreen
      open={props.open}
      onClose={props.handleFullFilter}
      TransitionComponent={Transition}
      className="nt-full-filter"
      >
        <div className="row nt-full-filter-header w-100">
          <div className="col-6 p-0 nt-full-filter-header-itm-ctnr">
            <div className="w-100 nt-full-filter-pd-x">Filters</div>
          </div>
          <div className="col-6 p-0 nt-full-filter-header-itm-ctnr">
            <div className="w-100 nt-full-filter-pd-x">
              <div className="clsoe-btn">Clear All</div>
            </div>
          </div>
        </div>

        <div className="nt-full-filter-ctnr">
          <div className="nt-full-filter-inr-ctnr-1">
            {
              filterKey.map((v,i)=>{
                return (
                  <FilterKey
                  key={i}
                  value={v}
                  active={checkActive(i)}
                  onClick={()=>{keyClick(i)}}
                  />
                )
              })
            }
          </div>
          <div className="nt-full-filter-inr-ctnr-2">
            {
              options.map((v,i)=>{
                return (
                  <FilterOption
                  key={i}
                  value={v}
                  onChange={()=>{selectFilterOption()}}
                  />
                )
              })
            }
          </div>
        </div>
        <div className="row m-0 nt-full-filter-btn-ctnr">
          <div className="col-6 p-0 nt-full-filter-btn"
          onClick={props.handleFullFilter}>
            CLOSE
          </div>
          <div className="col-6 p-0 nt-full-filter-btn apply-btn"
          onClick={props.handleFullFilter}>
            APPLY
          </div>
        </div>
      </Dialog>
    </div>
  );
}