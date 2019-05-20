import React from 'react';

const VerticalNavItem = ({name, handleClick}) => {
  return (
    <>
      <div id="V-Nav-List-Item" className="V-Nav-Item" onClick={()=>{handleClick(name)}}>{name}</div>
    </>
  );
}

export default VerticalNavItem;