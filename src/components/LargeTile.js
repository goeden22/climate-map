import React, { Component } from 'react';
import '../App.scss';
import LargeInfo from './LargeInfo';
import loader from '../img/svg/puffs.svg'
import Error from './Error'


class LargeTile extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            appear:false
        }
    }

    componentDidMount(){
        this.setState({appear:true})   
     }

    render() {

        return (
            
            <div className="largeTile">
                <div class="largeTile__tile">
                {(this.props.alreadySearched && !this.props.loading && this.props.smallView) || (this.props.error && this.props.smallView)?<div className="largeTile__reset" onClick={this.props.nextSearch}><h1 className="secondaryHeader">Search again > </h1></div> : "" }
                {(this.props.loading && !this.props.error) || !this.state.appear ?  <img src={loader} className="largeTile__loader" alt="loader"></img> : this.props.error ? < Error /> : (this.props.alreadySearched && this.props.mode === "point" && !this.props.loading) || (this.props.alreadySearched && this.props.mode === "search" && !this.props.loading)  || (this.props.alreadySearched && this.props.mode === "explore" && !this.props.loading) ?  <LargeInfo alreadySearched={this.props.alreadySearched} data={this.props.data} /> :
                     !this.props.alreadySearched && this.props.mode ==="point" && !this.props.loading ?
                        <div className="largeTile__notPointed largeTile__text">            
                        <h1 class="primaryHeader primaryHeader--large">Point your target</h1>
                        <hr class="separator"></hr>
                        <p class="primaryHeader primaryHeader--shaded">Point your own target from the map, and get all the info about 
                        the place</p>
                        </div> : this.props.mode === "search" && !this.props.alreadySearched && !this.props.loading ?<div className="largeTile__notPointed largeTile__text">            
                        <h1 class="primaryHeader primaryHeader--large">Search your target</h1>
                        <hr class="separator"></hr>
                        <p class="primaryHeader primaryHeader--shaded">Type your target name in search input and get all the cool info about the place</p>
                        </div> : this.props.mode === "explore" && !this.props.alreadySearched && !this.props.loading ? <div className="largeTile__notPointed largeTile__text">            
                        <h1 class="primaryHeader primaryHeader--large">Pick one of featured places</h1>
                        <hr class="separator"></hr>
                        <p class="primaryHeader primaryHeader--shaded">Pick one of the places from gallery to get all the cool info about it.</p>
                        </div>
                        : null}
                
                    
                </div>
            </div>
        );
    }
}


export default LargeTile;
