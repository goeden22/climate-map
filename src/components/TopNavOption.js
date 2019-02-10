import React, { Component } from 'react';
import '../App.scss';

class TopNavOption extends Component {
    constructor(props){
        super(props)       
    }
    render() {
        return (
            <div className={"topNav__option" + (this.props.active ? ' activeOption' : '')} name={this.props.option}>
                <h2 className="secondaryHeader">{this.props.option}</h2>
                <img src={this.props.icon} class="topNav__icon"></img>
            </div>
        );
    }
}


export default TopNavOption;
