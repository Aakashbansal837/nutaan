import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import _ from 'lodash';

export default function HeartCheckbox(props) {
  const handleChange = props.handleChange ? props.handleChange : null;
  var classname = 'nt-e-heart-chk';
  classname += (_.isString(props.className) ? ' ' + props.className : '');
  return (
    <Checkbox
    className={ classname }
    icon={ <FavoriteBorder className='icon-unchk' /> }
    // checked={ props.checked ? true : false }
    checkedIcon={<Favorite className='icon-chk' />}
    name={props.name} 
    onChange={handleChange}/>
  );
}