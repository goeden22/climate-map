import React, { Component } from 'react';
import '../App.scss';
import warning from '../img/svg/warning.svg'


class Error extends Component {
    constructor(props) {
        super(props);
        
  
    }


    render() {

        return (
            
            <div className="errorTile">
            <h1 class="primaryHeader primaryHeader--large">Error</h1>
                <img className="errorTile__img" src={warning} />
                <p class="primaryHeader primaryHeader--shaded">Sorry, something went wrong and the engine could not
                locate speccified location, or the maximum limit of geolocation engine,
                has been exceeded. Please try to pick another place (geolotaion is limited to land locations)
                or try again later.</p>
            </div>
        );
    }
}


export default Error;
