import React from 'react';

const VerticalNavItem = ({name, handleClick}) => {
  return (
    <>
      <a id="V-Nav-List-Item" className="V-Nav-Item" onClick={()=>{handleClick(name)}}>{name}</a>
    </>
  );
}

export default VerticalNavItem;