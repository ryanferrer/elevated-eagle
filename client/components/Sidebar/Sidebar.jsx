import React, {Component} from 'react';
import SidebarHeader from './SidebarHeader.jsx';
import VerticalNav from './VerticalNav.jsx';
import './Sidebar.css';

class Sidebar extends Component{
  constructor(props){
    super(props);

    this.state = {
      NavItems: [`About Me`, `Apps I've made`, `Resume`, `Contact`, `Other Media` ],
    };
  }

  render(){
    return(
      <>
        <div>
          <SidebarHeader/>
          <VerticalNav props={this.state.NavItems}/>
        </div>
      </>
    );
  }
}

export default Sidebar;