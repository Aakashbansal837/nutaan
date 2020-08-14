import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import Radio from '@material-ui/core/Radio';

import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const RadioLabel = (props)=>{
  return (
    <span className="nt-sort-filter-radio-label">
      {props.label}
    </span>
  )
}

const CustomRadio = (props)=>{
  return (
    <Radio
    {...props}
    color="primary"
    className="nt-sort-filter-radio"/>
  )
}

export default function SortFilterPop(props) {

  return (
    <div>
      <Dialog
      fullScreen
      open={props.open}
      onClose={props.handleSortFilter}
      TransitionComponent={Transition}
      className="nt-sort-filter"
      >
        <div className="nt-sort-filter-ctnr">
          <div className="w-100 nt-sort-filter-pd-xy">
            <div className="nt-sort-filter-ttl">
              Sort By
            </div>
            <div className="nt-sort-filter-hr"/>
          </div>
          <div className="w-100 nt-sort-filter-radio-ctnr nt-sort-filter-pd-x">
            <FormControl component="fieldset">
              <RadioGroup aria-label="gender" name="sort-by">

                <FormControlLabel
                value="new-first"
                control={<CustomRadio />}
                label={<RadioLabel label="Newest First"/>} />

                <FormControlLabel
                value="price-l-h"
                control={<CustomRadio />}
                label={<RadioLabel label="Price (Hight to Low)"/>} />

                <FormControlLabel
                value="price-h-l"
                control={<CustomRadio />}
                label={<RadioLabel label="Price (Low to High)"/>} />

                <FormControlLabel
                value="popularity"
                control={<CustomRadio />}
                label={<RadioLabel label="Popularity"/>} />
                
              </RadioGroup>
            </FormControl>
          </div>
          <div
          className="w-100 nt-sort-filter-close center-all"
          onClick={props.handleSortFilter}
          >
            Close
          </div>
        </div>
      </Dialog>
    </div>
  );
}