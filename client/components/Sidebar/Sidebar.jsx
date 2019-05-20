import React, {Component} from 'react';
import SidebarHeader from './SidebarHeader.jsx';
import VerticalNav from './VerticalNav.jsx';
import './Sidebar.css';

class Sidebar extends Component{
  constructor(props){
    super(props);

    this.state = {};
  }

  render(){
    return(
      <>
        <div>
          Wow I'm a sidebar!
          <SidebarHeader/>
          <VerticalNav/>
        </div>
      </>
    );
  }
}

export default Sidebar;