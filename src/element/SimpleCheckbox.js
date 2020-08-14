import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import _ from 'lodash';

export default function HeartCheckbox(props) {
  const handleChange = props.handleChange ? props.handleChange : null;
  var classname = 'nt-e-simple-chk';
  classname += (_.isString(props.className) ? ' ' + props.className : '');
  return (
    <Checkbox
    className={ classname }
    icon={ <CheckBoxOutlineBlankIcon className='icon-unchk' /> }
    // checked={ props.checked ? true : false }
    checkedIcon={<CheckBoxIcon className='icon-chk' />}
    name={props.name} 
    onChange={handleChange}
    />
  );
}