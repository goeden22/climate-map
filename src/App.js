import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import TopNav from './components/TopNav'

import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Montserrat:300,400,700', 'Open+Sans":300,400,700']
  }
});



class App extends Component {
  constructor(props){
    super(props)       
    this.state ={
      mode: ""
    }
    
    this.modeSelect = (mode) =>{
      this.setState({mode})
    }
    this.handleClick = () => {
      console.log(this.state.mode)
    }
}
  render() {
    return (
      <div className="App">
       <TopNav onModeChange={this.modeSelect.bind(this)}/>
      </div> 
    );
  }
}

export default App;
