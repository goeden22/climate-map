import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import TopNav from './components/TopNav';
import WebFont from 'webfontloader';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import MapContainer from './components/MapContainer'
import LargeTile from './components/LargeTile'
import SmallTiles from './components/SmallTiles'

WebFont.load({
  google: {
    families: ['Montserrat:300,400,700', 'Open+Sans":300,400,700']
  }
});



class App extends Component {
  constructor(props){
    super(props)       
    this.state ={
      mode: "search",
      lat: 51.505,
      lng: -0.09,
      zoom: 13,
    }
    
    this.modeSelect = (mode) =>{
      this.setState({mode});
    }
    this.handleClick = function(){
      console.log("this.country")
    }
}
  render() {
    const mode = this.state.mode
    return (
      <div className="App">
       <TopNav onModeChange={this.modeSelect.bind(this)} />
       <MapContainer lat={this.state.lat} lng={this.state.lng} />
        {mode == "search" ? <LargeTile /> : mode == "explore" ? <SmallTiles  /> : null}
       
      </div> 
    );
  }
}

export default App;
