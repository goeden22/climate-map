import React, { Component } from 'react';
import '../App.scss';
import norway from '../img/jpg/norway.jpg';
import people from '../img/svg/avatar.svg';
import time from '../img/svg/time-left.svg';
import weather from '../img/svg/cloud.svg';
import temperature from '../img/svg/thermometer.svg';
import LargeInfo from './LargeInfo';
import loader from '../img/svg/puffs.svg'
import { CSSTransition, TransitionGroup } from 'react-transition-group'


class LargeTile extends Component {
    constructor(props) {
        super(props);
        

    }

    render() {
        
        return (
            
            <div className="largeTile">
                <div class="largeTile__tile">
                {this.props.error ? <h1>ERROR</h1> : (this.props.alreadySearched && this.props.mode == "point" && !this.props.loading) || (this.props.alreadySearched && this.props.mode == "search" && !this.props.loading)  || (this.props.alreadySearched && this.props.mode == "explore" && !this.props.loading) ?  <LargeInfo alreadySearched={this.props.alreadySearched} data={this.props.data} /> :
                     !this.props.alreadySearched && this.props.mode =="point" && !this.props.loading ?
                        <div className="largeTile__notPointed largeTile__text">            
                        <h1 class="primaryHeader primaryHeader--large">Point your target</h1>
                        <hr class="separator"></hr>
                        <p class="primaryHeader primaryHeader--shaded">Point your own target from the map, and get all the info about 
                        the place</p>
                        </div> : this.props.mode == "search" && !this.props.alreadySearched && !this.props.loading ?<div className="largeTile__notPointed largeTile__text">            
                        <h1 class="primaryHeader primaryHeader--large">Search your target</h1>
                        <hr class="separator"></hr>
                        <p class="primaryHeader primaryHeader--shaded">Type your target name in search input and get all the cool info about the place</p>
                        </div> : this.props.mode == "explore" && !this.props.alreadySearched && !this.props.loading ? <div className="largeTile__notPointed largeTile__text">            
                        <h1 class="primaryHeader primaryHeader--large">Pick one of featured places</h1>
                        <hr class="separator"></hr>
                        <p class="primaryHeader primaryHeader--shaded">Pick one of the places from gallery to get all the cool info about it.</p>
                        </div>
                        : this.props.loading && !this.props.error ?   
                            <img src={loader} className="largeTile__loader"></img>
                        : null}
                
                    
                </div>
            </div>
        );
    }
}


export default LargeTile;
