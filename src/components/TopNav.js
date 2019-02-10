import React, { Component } from 'react';
import '../App.css';
import TopNavOption from './TopNavOption'

class TopNav extends Component {
    constructor(props){
        super(props)       
    }
    render() {
        return (
            <div className="topNav"><div class="topNav__logoContaioner"></div>
            <TopNavOption option="search"/>
            <TopNavOption option="point"/>
            <TopNavOption option="explore"/></div>
        );
    }
}


export default TopNav;
