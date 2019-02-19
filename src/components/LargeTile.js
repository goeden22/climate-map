import React, { Component } from 'react';
import '../App.scss';
import norway from '../img/jpg/norway.jpg';
import people from '../img/svg/avatar.svg';
import time from '../img/svg/time-left.svg';
import weather from '../img/svg/cloud.svg';
import temperature from '../img/svg/thermometer.svg'


class LargeTile extends Component {
    constructor(props) {
        super(props);


    }
    render() {
        return (
            <div className="largeTile">
                <div class="largeTile__tile">
                    <img src={norway} alt="" class="largeTile__img"></img>
                    <div className="largeTile__text">
                    <h1 class="primaryHeader primaryHeader--large">Oslo</h1>
                    <h1 class="primaryHeader primaryHeader--shaded">Norway</h1>
                    <div class="largeTile__icons">
                        <img src={people} alt="" class="largeTile__icon"></img>
                        <h1 class="primaryHeader primaryHeader--medium">673k</h1>
                        <img src={time} alt="" class="largeTile__icon"></img>
                        <h1 class="primaryHeader primaryHeader--medium">UTC+1</h1>
                        <img src={weather} alt="" class="largeTile__icon"></img>
                        <h1 class="primaryHeader primaryHeader--medium">Cloudy</h1>
                        <img src={temperature} alt="" class="largeTile__icon"></img>
                        <h1 class="primaryHeader primaryHeader--temperature">3°C</h1>
                    </div>
                    <hr class="separator"></hr>
                    <h1 class="primaryHeader primaryHeader--small">Info:</h1>
                    <p className="primaryParagraph">Because of Norway's high latitude, there are large seasonal variations in daylight. From late May to late July, the sun never completely descends beneath the horizon in areas north of the Arctic Circle (hence Norway's description as the "Land of the Midnight sun"), and the rest of the country experiences up to 20 hours of daylight per day. Conversely, from late November to late January, the sun never rises above the horizon in the north, and daylight hours are very short in the rest of the country.</p>
                    </div>
                </div>
            </div>
        );
    }
}


export default LargeTile;
