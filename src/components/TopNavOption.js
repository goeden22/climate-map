import React, { Component } from 'react';
import '../App.css';

class TopNavOption extends Component {
    constructor(props){
        super(props)       
    }
    render() {
        return (
            <div class="topNav__option">
                <h2 class="topNav__label">{this.props.option}</h2>
                <img src={this.props.icon} class="topNav__icon"></img>
            </div>
        );
    }
}


export default TopNavOption;
