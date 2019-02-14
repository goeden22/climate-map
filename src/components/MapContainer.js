import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet'
import '../App.scss';



class MapContainer extends React.Component {

  

    
  render() {
    let position = [this.props.lat, this.props.lng];
    return(
    <Map className="mapContainer" center={position} zoom={13} zoomControl={false}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png" 
        />
        <ZoomControl position="bottomright" />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        
      </Map>
    )
  }
}

export default MapContainer;