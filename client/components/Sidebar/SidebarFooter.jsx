import React from 'react';

const SidebarFooter = () => {
  return(
    <>
    <div id="Sidebar-Footer">

      <div className="Shortcut-Container">
        <a href="https://www.github.com/ryanferrer" target="_blank">
          <img src="../client/assets/github.png"/>
        </a>
      </div>

      <div className="Shortcut-Container">
        <a href="http://www.linkedin.com/in/ryanferrer" target="_blank">
          <img src="../client/assets/linkedin-logo.png"/>
        </a>
      </div>

      <div className="Shortcut-Container">
        <a href="https://www.twitter.com/ryden_exe" target="_blank">
        <img src="../client/assets/twitter.png"/>
        </a>
      </div>

    </div>
    </>
  );
}

export default SidebarFooter;