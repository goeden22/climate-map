import React, { Component } from 'react';
import '../App.scss';
import norwaySmall from '../img/jpg/norway-small.jpg';
import people from '../img/svg/avatar.svg';
import time from '../img/svg/time-left.svg';
import weather from '../img/svg/cloud.svg';



class SmallTile extends Component {
    constructor(props) {
        super(props);


    }
    render() {
        return ( 
            <div class="smallTiles__tile" >
            <img src={norwaySmall} alt="" class="smallTiles__img"></img>
            <div className="smallTiles__text">
                <h1 class="primaryHeader primaryHeader--slarge">{this.props.number}</h1>
                <h1 class="primaryHeader primaryHeader--sshaded">Norway</h1>
                <div class="smallTiles__icons">
                    <img src={people} alt="" class="smallTiles__icon"></img>
                    <h1 class="primaryHeader primaryHeader--smedium">673k</h1>
                    <img src={time} alt="" class="smallTiles__icon"></img>
                    <h1 class="primaryHeader primaryHeader--smedium">UTC+1</h1>
               
                </div>
                <hr class="separator"></hr>
                <div class="smallTiles__info">
                <h1 class="primaryHeader primaryHeader--ssmall">Temperature</h1>
                <h1 class="primaryHeader primaryHeader--ssmall">Weather</h1>
                </div>
                <div class="smallTiles__info">
                <h1 class="primaryHeader primaryHeader--stemperature">3°C</h1>
                <img src={weather} alt="" class="smallTiles__iconL"></img>
                
                
                </div>
                
            </div>
        </div>
        );
    }
}


export default SmallTile;
