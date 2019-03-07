import React, { Component } from 'react';
import '../App.scss';
import people from '../img/svg/avatar.svg';
import time from '../img/svg/time-left.svg';
import weather from '../img/svg/cloud.svg';
import {exclusiveCity, exclusiveCountry} from '../data/validationList';




class SmallTile extends Component {
    constructor(props) {
        super(props);

        this.setImg = (country, city) => {
           let exCity = exclusiveCity.filter(exclusive => {
              return exclusive.replace(/\s+/g,"").toLowerCase() == city.replace(/\s+/g,"").toLowerCase()
           })
           if (exCity.length != 0){
          
               return exCity[0].replace(/\s+/g,"").toLowerCase()
           }
           let exCountry = exclusiveCountry.filter(exclusive => {
           return exclusive.replace(/\s+/g,"").toLowerCase() == country.replace(/\s+/g,"").toLowerCase()
        }) 
        if (exCountry.length != 0){
            return exCountry[0].replace(/\s+/g,"").toLowerCase()
        }
            return 'default'
        }

        this.handleClick = () => {
            this.props.handleClick(this.props.place.coords)
        }

    }
    render() {
    
        return ( 
            <div class="smallTiles__tile" onClick={this.handleClick}>
            <img src={require(`../img/jpg/${this.setImg(this.props.place.country, this.props.place.city)}-small.jpg`)} alt="" class="smallTiles__img"></img>
            <div className="smallTiles__text">
                <h1 class="primaryHeader primaryHeader--slarge">{this.props.place.city}</h1>
                <h1 class="primaryHeader primaryHeader--sshaded">{this.props.place.country}</h1>
                <div class="smallTiles__icons">
                    <img src={people} alt="" class="smallTiles__icon"></img>
                    <h1 class="primaryHeader primaryHeader--smedium">673k</h1>
                    <img src={time} alt="" class="smallTiles__icon"></img>
                    <h1 class="primaryHeader primaryHeader--smedium">UTC+1</h1>
               
                </div>
                <hr class="separator"></hr>
                <div class="smallTiles__info">
                <h1 class="primaryHeader primaryHeader--ssmall">Info:</h1>

                </div>
                <div class="smallTiles__info">
                
                
                
                </div>
                
            </div>
        </div>
        );
    }
}


export default SmallTile;
