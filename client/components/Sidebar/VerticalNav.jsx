import React from 'react';
import VerticalNavItem from './VerticalNavItem.jsx';

const VerticalNav = ({props}) => {
  return(
    <>
      I'm going to list items here to navigate through
      <ul>
        {props.map((item, i) => {
          return(
            <VerticalNavItem props={item} key={i}/>
          )
        })}
      </ul>
    </>
  );
}

export default VerticalNav;