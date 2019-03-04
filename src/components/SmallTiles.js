import React, { Component } from 'react';
import '../App.scss';
import SmallTile from './SmallTile';
import places from '../data/places';


class SmallTiles extends Component {
    constructor(props) {
        super(props);

        this.state = {
            places: places.places,
            position: 0,
            interval: 3000,
            tileHeight: 450,
            direction: -1,
            stop: false
        };
        this.Container = React.createRef();
        this.moveContainer = () =>{
            if(!this.state.stop){
                const moveRange = (this.state.places.length * this.state.tileHeight) - (4 * this.state.tileHeight);
                const position = this.state.position + this.state.tileHeight;
                console.log(position)
                if (position < -moveRange){
                    this.setState({direction: 1})
                } else if (position > 0){
                    this.setState({direction: -1})
                }
        
    
                    this.setState({position: this.state.position + (this.state.tileHeight * this.state.direction)})
            } else{
                return null
            }


                
        }
        this.intervalStart = () => {setInterval(this.moveContainer.bind(this), this.state.interval);}
        this.handleMouseOver = () => {
            this.setState({stop: !this.state.stop})
            console.log(this.state.stop)
        }
        this.handleMouseOut = () => {
            this.setState({stop: !this.state.stop})
            console.log(this.state.stop)
        }




    }
    componentDidMount() {
      this.intervalStart();
      
      }
    render() {

        return (

            <div className="smallTiles" >
                <div className="smallTiles__container" ref={this.Container} style={{transform: `translateY(${this.state.position}px)`}} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
                    {this.state.places.map((place,i) => {
                        return <SmallTile country={place.country} city={place.city} img={place.img}/>
                    })}
                </div>
            </div>
        );
    }
}
//handleMouseMove={this.handleMouseOver.bind(this)} handleMouseOut={this.handleMouseOut.bind(this)


export default SmallTiles;
