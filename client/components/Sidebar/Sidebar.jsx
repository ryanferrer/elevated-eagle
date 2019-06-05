import React, { Component } from 'react';
import style from './Sidebar.css';

class Sidebar extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="sidebar">
        
        <a className="Sidebar-Entry">About Me</a>
        <a className="Sidebar-Entry">Resume</a>
        <a className="Sidebar-Entry">My Apps</a>
        <a className="Sidebar-Entry">Contact</a>
    
      </div>
    );
  }
}

export default Sidebar;