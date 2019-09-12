import React, { Component } from 'react';
import '../App.scss';
import loupe from '../img/svg/loupe.svg'
import slider from '../img/svg/slider.svg';
import target from '../img/svg/target.svg';
import logo from '../img/jpg/logodark.png';
import x from '../img/svg/x.svg'
import information from '../img/svg/information.svg';
import { CSSTransition} from 'react-transition-group'


class Help extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            active: false
        }
        this.toggle = () => {
            let newState = !this.state.active;
            this.setState({active: newState})
        }
    }
    
    componentDidMount(){
        this.setState({active: true})
    }

    render() {

        return (
            
            <div className="help">
            {this.state.active ? 
                <CSSTransition in={this.state.active} appear={true} timeout={500} classNames="fade">
                <div className="help__container">
              <div className="help__tile">
              <img className="help__logo" src={logo}></img>
              <p className="help__optionDesc primaryParagraph">Welcome to my climate app, you can use multpiple tools to check current weather and temperature with climate description in choosen place.</p>
              <div className="help__option"><img className="help__optionLogo" src={loupe}></img><h2 className="secondaryHeader">Search</h2></div>
              <p className="help__optionDesc primaryParagraph">You can type name of any place that you want in search bar, engine will find it on the map and return info about current weather and temperature with short description of climate.</p>
              <div className="help__option"><img className="help__optionLogo" src={target}></img><h2 className="secondaryHeader">Point</h2></div>
              <p className="help__optionDesc primaryParagraph">
              Just click on any place on the map with cursor, or tap screen of your touchscreen in any place on the map you want to get info about this place and its climate</p>
              <div className="help__option"><img className="help__optionLogo" src={slider}></img><h2 className="secondaryHeader">Explore</h2></div>
              <p className="help__optionDesc primaryParagraph">Check my gallery of one of the most beautiful cities in the world, just click on any of the featured places to locate it on the map and get information about current weather</p>
              <div className="help__innerButton" onClick={this.toggle.bind(this)} ><img src={x}></img></div>
              <h2 className="primaryParagraph help__credits">Made by Aleksander Pilarski - <a href="https://github.com/goeden22">Check my github account</a></h2>
              </div>
              </div>
              </CSSTransition>
              : ""    
        }
              
                <div className="help__outerButton" onClick={this.toggle.bind(this)}><img src={information}></img></div>
                
            </div>
        );
    }
}


export default Help;
