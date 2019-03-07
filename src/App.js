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
  constructor(props) {
    super(props)
    this.state = {
      mode: "search",
      coords: {
        lat: 51.505,
        lng: -0.09,
      },
      zoom: 2,
      alreadySearched: false,
      currentLocation: null,
      validationError: false,
      error: false,
      loading: false,
      query: ""
    }

    this.modeSelect = (mode) => {
      this.setState({ mode,
      alreadySearched: false,
    error: false });    
    }

    this.handleSubmit = (query) => {
      this.setState({validationError: false,currentLocation: null, error: false})

      let tempQuery = query.replace(/\s/g, '');
      let testRegEx = RegExp('^[a-zA-Z0-9]*$', 'g')
      if(!testRegEx.test(tempQuery) || tempQuery.length < 3){
        this.setState({validationError: true})
        return false
      }

      this.setState({loading: true,
        query: query.trim()}, this.APIChain)
      

    }

    this.APIChain = () => {
      

      this.runGeoAPI(this.state.mode).then(data => {
        return data.json();
      }, err => {
        throw new Error('not this mode')
      }).then(data => {
          this.setState({coords:{
            lat: data[0].lat,
        lng: data[0].lon}})
      }, err =>{
        return false
      })
      .then(() => {
        console.log(this.state.coords)
        return fetch(`https://us1.locationiq.com/v1/reverse.php?key=fa6fb95ab37515&lat=${this.state.coords.lat}&lon=${this.state.coords.lng}&format=json&accept-language=en`)
      })
        .then(data => {
          if(!data.ok){
            throw new Error("error")
          }
          return data.json();
        }).then(res => {
            console.log(res)
            this.setState({ currentLocation: res.address });
            }, err => {
             
              this.setState({loading: false, error: true})
            }).then(() => {
              return fetch(`http://api.population.io/1.0/population/${this.state.currentLocation.country}/2019-02-25/`)

              }).then(res => {
                if(!res.ok){
                  throw new Error('Something went wrong');
                }
                return res.json();
              }
                ).then((res) => {
                  let tempState = this.state.currentLocation
                  let population = res.total_population.population > 999 && res.total_population.population < 1000000 ? (res.total_population.population / 1000).toFixed(1) + 'k' : res.total_population.population > 1000000 ? (res.total_population.population /1000000).toFixed(1) + 'm' : res.total_population.population
                  tempState.population = population;
                  this.setState({ currentLocation: tempState })


                }, err => {
                })
                .then(() => {
                 // return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.coords.lat}&lon=${this.state.coords.lon}&appid=ed658a8a7d75e969481fc9cc10e419a5`)
                 return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.coords.lat}&lon=${this.state.coords.lng}&appid=ed658a8a7d75e969481fc9cc10e419a5`)
                }).then(res => {
                  if (!res.ok){
                    throw new Error("error")
                  }
                  return res.json();
                }).then((data) => {
                  let tempState = this.state.currentLocation;
                  tempState.temperature = {temperature : (Math.floor(data.main.temp) -273),
                  weather: data.weather[0].main}
                  this.setState({currentLocation: tempState})
                }, err => {
                  this.setState({loading: false})
                }).then(() => { this.setState({ alreadySearched: true,
                  loading: false }); })

    }

    this.runGeoAPI = (mode) => {
      if (mode == "search"){
        return fetch(`https://us1.locationiq.com/v1/search.php?key=fa6fb95ab37515&q=${this.state.query}&format=json`)
      } else return Promise.reject(false)
      
      /*this.setState({lat: data[0].lat,
        lng: data[0].lon})*/
    }
    this.handleClick = (e) => {

      if(this.state.mode != "point"){
        return false
      }
      
      this.setState({
        coords: e.latlng,
        error: false,
        loading: true
      })
      this.APIChain();
    
    }
     
    this.setFromGallery = (coords) => {
      if(this.state.mode != "explore"){
        return false
      }
      this.setState({coords, error: false, loading: true}, this.APIChain)

    }
  }

  
  render() {
    const mode = this.state.mode
    return (
      <div className="App">
        <TopNav onModeChange={this.modeSelect.bind(this)} handleSubmit={this.handleSubmit.bind(this)} />
        <MapContainer lat={this.state.coords.lat} lng={this.state.coords.lng} handleClick={this.handleClick.bind(this)} />
        <LargeTile alreadySearched={this.state.alreadySearched} mode={this.state.mode} data={this.state.currentLocation} loading={this.state.loading} error={this.state.error}/> {mode == "explore" ? <SmallTiles handleClick={this.setFromGallery.bind(this)} /> : null}

      </div>
    );
  }
}

export default App;
