import React from 'react'
import { Map, TileLayer, Marker, ZoomControl } from 'react-leaflet'
import '../App.scss';



class MapContainer extends React.Component {

  

    
  render() {
    let position = [this.props.lat, this.props.lng];
    return(
    <Map className="mapContainer" center={position} zoom={5} zoomControl={false} onClick={this.props.handleClick}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
        />
        <ZoomControl position="bottomright" />
        <Marker position={position}>
        </Marker>
        
      </Map>
    )
  }
}

export default MapContainer;