import React from 'react';
import VerticalNavItem from './VerticalNavItem.jsx';

const VerticalNav = ({props}) => {
  return(
    <>
    <div id="V-Nav-List-Container">
      <div id="V-Nav-List">
        {props.map((item, i) => {
          return(
            <VerticalNavItem props={item} key={i}/>
          )
        })}
      </div>
    </div>  
    </>
  );
}

export default VerticalNav;