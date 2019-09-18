import React, { Component } from 'react';
import '../App.scss';
import SmallTile from './SmallTile';
import places from '../data/places';
import { CSSTransition} from 'react-transition-group'


class SmallTiles extends Component {
    constructor(props) {
        super(props);

        this.state = {
            places: places.places,
            position: 0,
            interval: 2000,
            tileHeight: 450,
            direction: -1,
            stop: false,
            appear:false
        };
    
        this.moveContainer = () =>{
            if(!this.state.stop){
                const moveRange = (this.state.places.length * this.state.tileHeight) - (4 * this.state.tileHeight);
                const position = this.state.position + this.state.tileHeight;
                
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
            
        }
        this.handleMouseOut = () => {
            this.setState({stop: !this.state.stop})
           
        }
        this.handleClick = (coords) => {
            this.props.handleClick(coords)
        }




    }
    componentDidMount() {
        this.setState({appear:true})
        this.intervalStart();
      
      
      }
    render() {

        return (
           
            <div className="smallTiles" >
             <CSSTransition in={this.state.appear} appear={true} timeout={500} classNames="faded">
                <div className="smallTiles__container" ref={this.Container} style={{transform: `translateY(${this.state.position}px)`}} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
               
                    {this.state.places.map((place,i) => {
                        return <SmallTile place={place} setFromGallery={this.props.setFromGallery} handleClick={this.handleClick.bind(this)}/>
                    })}
                    
                </div>
                </CSSTransition>
            </div>
            
        );
    }
}



export default SmallTiles;
