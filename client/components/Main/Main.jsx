import React, { Component } from 'react';
import MainHeader from './MainHeader.jsx';
import MainList from './MainList.jsx';
import './Main.css';

class Main extends Component{
  constructor(props){
    super(props);

    this.state = {
      pageToRender: null
    };

  }
  
  componentDidMount(){
    window.addEventListener('setMainState', this.handleMainSwitch.bind(this));
  }

  handleMainSwitch(e){
    this.setState({pageToRender: e.detail});
  }

  render(){
    return(
      <>
        I am the main!
        <MainHeader/>
        <MainList/>
      </>
    );
  }
}

export default Main;