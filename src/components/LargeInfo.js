import React, { Component } from 'react';
import '../App.scss';
import norway from '../img/jpg/norway.jpg';
import people from '../img/svg/avatar.svg';
import time from '../img/svg/time-left.svg';
import weather from '../img/svg/cloud.svg';
import temperature from '../img/svg/thermometer.svg';
import {exclusiveCity, exclusiveCountry, groups} from '../data/validationList';
import {setSmall, ifContains} from './utils/utils.js'
import { CSSTransition, TransitionGroup } from 'react-transition-group'



class LargeInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
                city: this.props.data.city || undefined,
                village: this.props.data.village || undefined,
                county: this.props.data.county || "countryside",
                country: this.props.data.country || "undefined",
                population: this.props.data.population || "no data",
                temperature: this.props.data.temperature || {
                    weather:  "no data",
                    temperature: false
                }  ,
                appear: false


            }
        }
      
        
        this.setImg = (country,city) =>{
            if(city){
                if (ifContains(exclusiveCity, city)){
                    return ifContains(exclusiveCity, city)
                } 
            }
            if (ifContains(exclusiveCountry, country)){
                return ifContains(exclusiveCountry, country)
            }
            let countryFromGroup = groups.find(obj => {
                return obj.countries.includes(setSmall(country))
            })
            if(countryFromGroup) {
                return countryFromGroup.name
            } else {
                return "default"
            }
          }
            
          
        
    }
    componentDidMount(){
           this.setState({appear:true})   
    }

    render() {
    
        return (
            <CSSTransition in={this.state.appear} appear={true} timeout={500} classNames="fade">
            <div className="largeTile__content">

                <img src={require(`../img/jpg/${this.setImg(this.state.data.country, this.state.data.city)}.jpg`) || norway} alt="" class="largeTile__img"></img>
                <div className="largeTile__text">
                    <h1 class="primaryHeader primaryHeader--large">{this.state.data.city || this.state.data.village || this.state.data.county || "Countryside"}</h1>
                    <h1 class="primaryHeader primaryHeader--shaded">{this.state.data.country}</h1>
                    <div class="largeTile__icons">
        
                        <img src={time} alt="" class="largeTile__icon"></img>
                        <h1 class="primaryHeader primaryHeader--medium">UTC+1</h1>
                        <img src={weather} alt="" class="largeTile__icon"></img>
                        <h1 class="primaryHeader primaryHeader--medium">{this.state.data.temperature.weather || "undefined"}</h1>
                        <img src={temperature} alt="" class="largeTile__icon"></img>
                        <h1 class="primaryHeader primaryHeader--temperature">{!this.state.data.temperature.temperature ? "no data" : this.state.data.temperature.temperature + "°C"} </h1>
                    </div>
                    <hr class="separator"></hr>
                    <h1 class="primaryHeader primaryHeader--small">Info:</h1>
                    <p className="primaryParagraph">Because of Norway's high latitude, there are large seasonal variations in daylight. From late May to late July, the sun never completely descends beneath the horizon in areas north of the Arctic Circle (hence Norway's description as the "Land of the Midnight sun"), and the rest of the country experiences up to 20 hours of daylight per day. Conversely, from late November to late January, the sun never rises above the horizon in the north, and daylight hours are very short in the rest of the country.</p>
                </div>
            </div>
            </ CSSTransition>

        );
    }
}


export default LargeInfo;