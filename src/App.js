import React, { Component } from 'react';
import './App.scss';
import TopNav from './components/TopNav';
import WebFont from 'webfontloader';
import MapContainer from './components/MapContainer'
import LargeTile from './components/LargeTile'
import SmallTiles from './components/SmallTiles'
import Help from './components/Help'

WebFont.load({
  google: {
    families: ['Montserrat:300,400,700', 'Open+Sans":300,400,700']
  }
});



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: "search",
      coords: {
        lat: 51.505,
        lng: -0.09,
      },
      zoom: 1,
      alreadySearched: false,
      currentLocation: null,
      validationError: false,
      error: false,
      loading: false,
      query: "",
      width: window.innerWidth,
      activeWindow: false,
      smallView: window.innerWidth < 1120
    }

    this.modeSelect = (mode) => {
      this.setState({ mode,
      alreadySearched: false,
    error: false ,  activeWindow:false});    
    }

    this.handleSubmit = (query) => {
      this.setState({validationError: false,currentLocation: null, error: false,  activeWindow:true})

      this.setState({loading: true,
        query: query.trim()}, this.APIChain)
      

    }
    this.nextSearch = () => {
      this.setState({activeWindow: false})
    }

    this.APIChain = () => {
      

      this.runGeoAPI(this.state.mode).then(data => {
        console.log(data)
        if(data.status !== 200){
          console.log(data)
          return Promise.reject({status: "locationerror"})
        }
        return data.json();
      }, err => {
        return Promise.reject({status:"modeerror"})
      }).then(data => {
          this.setState({coords:{
            lat: data[0].lat,
        lng: data[0].lon}})
      }, err =>{
        console.log(err)
        if(err.status === "locationerror"){
          this.setState({loading: false, error: true})
          throw new Error("location error")
        }
        
      })
      .then(() => {
        console.log(this.state.coords)
        return fetch(`https://us1.locationiq.com/v1/reverse.php?key=fa6fb95ab37515&lat=${this.state.coords.lat}&lon=${this.state.coords.lng}&format=json&accept-language=en`)
      }, err => {
        return {ok: false}
      })
        .then(data => {
          if(!data.ok){
            throw new Error("error")
          }
          return data.json();
        }).then(res => {
            console.log(res)
            this.setState({ currentLocation: res.address });
            return true
            }, err => {
             
              this.setState({loading: false, error: true})
              return false
            })
            .then((returned) => {
                  if(!returned){
                    throw new Error("wrong location")
                  }
                 return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.coords.lat}&lon=${this.state.coords.lng}&appid=ed658a8a7d75e969481fc9cc10e419a5`)
                }).then(res => {
                  
                  if (!res.ok){
                    
                    throw new Error("error")
                  }
                  return res.json();
                }, err => {
                  this.setState({loading: false, error: true})
                  throw new Error("error")
                }).then((data) => {
                  let tempState = this.state.currentLocation;
                  tempState.temperature = {temperature : (Math.floor(data.main.temp) -273),
                  weather: data.weather[0].main}
                  this.setState({currentLocation: tempState})
                }, err => {
                  this.setState({loading: false})
                }).then(() => { this.setState({ alreadySearched: true,
                  loading: false}); })

    }

    this.runGeoAPI = (mode) => {
      if (mode === "search"){
        return fetch(`https://us1.locationiq.com/v1/search.php?key=fa6fb95ab37515&q=${this.state.query}&format=json`)
      } else return Promise.reject("wrong mode")
      
  
    }
    this.handleClick = (e) => {

      if(this.state.mode !== "point"){
        return false
      }
      
      this.setState({
        coords: e.latlng,
        error: false,
        loading: true,
        activeWindow:true,
      })
      this.APIChain();
    
    }
     
    this.setFromGallery = (coords) => {
      if(this.state.mode !== "explore"){
        return false
      }
      this.setState({coords, error: false, loading: true, activeWindow:true}, this.APIChain)

    }
    this.handleResize = () =>{
      this.setState({smallView:window.innerWidth <1120})
    }
  
  }
  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }


  
  render() {

    const mode = this.state.mode
    console.log()
    return (
      
      <div className="App" >
        <Help />
        <TopNav onModeChange={this.modeSelect.bind(this)} handleSubmit={this.handleSubmit.bind(this)} />
        <MapContainer lat={this.state.coords.lat} lng={this.state.coords.lng} handleClick={this.handleClick.bind(this)} />
        {this.state.smallView && !this.state.activeWindow ? "" :
        <LargeTile smallView={this.state.smallView} nextSearch={this.nextSearch.bind(this)}width={this.state.width} alreadySearched={this.state.alreadySearched} mode={this.state.mode} data={this.state.currentLocation} loading={this.state.loading} error={this.state.error}/> } {mode === "explore" && (!this.state.activeWindow && this.state.smallView) || mode === "explore" && !this.state.smallView ? <SmallTiles handleClick={this.setFromGallery.bind(this)} /> : null}
      
      </div>
    );
  }
}

export default App;
