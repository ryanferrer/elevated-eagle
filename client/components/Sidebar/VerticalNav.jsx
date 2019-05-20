import React from 'react';
import VerticalNavItem from './VerticalNavItem.jsx';

const VerticalNav = ({names, handleClick}) => {
  return(
    <>
    <div id="V-Nav-List-Container">
      <div id="V-Nav-List">
        {names.map((name, i) => {
          return(
            <VerticalNavItem name={name} key={i} handleClick={handleClick}/>
          )
        })}
      </div>
    </div>  
    </>
  );
}

export default VerticalNav;