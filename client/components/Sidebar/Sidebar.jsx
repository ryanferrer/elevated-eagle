import React, {Component} from 'react';
import SidebarHeader from './SidebarHeader.jsx';
import VerticalNav from './VerticalNav.jsx';
import './Sidebar.css';

class Sidebar extends Component{
  constructor(props){
    super(props);

    this.state = {
      NavNames: [`About Me`, `Apps I've made`, `Resume`, `Contact`, `Other Media` ],
    };
  }

  switchMain(name){
    window.dispatchEvent(
      new CustomEvent('setMainState', {detail: name})
    )
  }

  render(){
    return(
      <>
        <div>
          <SidebarHeader/>
          <VerticalNav names={this.state.NavNames} handleClick={this.switchMain.bind(this)}/>
        </div>
      </>
    );
  }
}

export default Sidebar;