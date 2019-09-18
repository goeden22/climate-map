import React, { Component } from 'react';
import '../App.scss';

class TopNavOption extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            tempQuery: ""
        }

        this.handleChange = (e) => {
            this.setState({tempQuery: e.target.value})
        }
        this.onHandleSubmit = (e) => {
            e.preventDefault();
            this.props.handleSubmit(this.state.tempQuery)
        }
    }

    
    render() {
        return (
            <div className={"topNav__option" + (this.props.active ? ' activeOption' : '')} name={this.props.option} style={this.props.active &&  this.props.option === "search" ? {flex: 3} : {flex: 1}}>
                <h2 className="secondaryHeader topNav__optionName">{this.props.option}</h2>
                {this.props.option === "search" ? <form onSubmit={this.onHandleSubmit}><input onChange={this.handleChange} type="text" className={'topNav__search primaryHeader primaryHeader--smedium'} style={this.props.active ? {display: 'inline'} : {display:"none"}}></input></form> : null}
                <img src={this.props.icon} class="topNav__icon" alt="option__icon"></img>
                
            </div>
        );
    }
}


export default TopNavOption;
