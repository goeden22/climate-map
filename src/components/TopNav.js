import React, { Component } from 'react';
import '../App.scss';
import TopNavOption from './TopNavOption'
import loupe from '../img/svg/loupe.svg'
import slider from '../img/svg/slider.svg';
import target from '../img/svg/target.svg';
import logo from '../img/jpg/logo.png'

class TopNav extends Component {
    constructor(props){
        super(props);

        this.state = {mode: 'search'}
        this.handleModeChange = (e) => {
            let mode = e.target.getAttribute('name') || e.target.parentNode.getAttribute('name');
            if(mode){
                this.setState({mode})
                this.props.onModeChange(mode);        
            }
                
        }
    }
    render() {
        return (
            <div className="topNav" onClick={this.handleModeChange}>
            <div className="topNav__container"><div class="topNav__logoContainer">
            <h2 className="secondaryHeader secondaryHeader--logo"><img className="topNav__logo" src={logo}></img></h2></div>
            <TopNavOption option="search" icon={loupe} active={this.state.mode == "search" ? true : false} handleSubmit={this.props.handleSubmit}/>
            <TopNavOption option="point" icon={target} active={this.state.mode == "point" ? true : false}/>
            <TopNavOption option="explore" icon={slider} active={this.state.mode == "explore" ? true : false}/></div>
            </div>
        );
    }
}


export default TopNav;
