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
  render() {
    return (
      <div className="App">
       <TopNav />
      </div>
    );
  }
}

export default App;
