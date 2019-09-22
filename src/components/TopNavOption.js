import React, { Component } from 'react';
import '../App.scss';

class TopNavOption extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            tempQuery: "",
            validationError: false
        }
        this.textInput = React.createRef();

        this.handleChange = (e) => {
            this.setState({tempQuery: e.target.value})
        }
        this.onHandleSubmit = (e) => {
            e.preventDefault();
            this.setState({validationError: false})
            let tempQuery = this.state.tempQuery.replace(/\s/g, '');
            let testRegEx = RegExp('^[a-zA-Z0-9-]*$', 'g')
            if(!testRegEx.test(tempQuery) || tempQuery.length < 3){
              this.setState({validationError: true})
              this.textInput.current.blur();
              return false
              
            }
            
            this.props.handleSubmit(this.state.tempQuery)
            this.textInput.current.blur();
        }
    }

    
    render() {
        return (
            <div className={"topNav__option" + (this.props.active ? ' activeOption' : '')} name={this.props.option} style={this.props.active &&  this.props.option === "search" ? {flex: 3} : {flex: 1}}>
                <h2 className="secondaryHeader topNav__optionName">{this.props.option}</h2>
                {this.props.option === "search" ? <form onSubmit={this.onHandleSubmit}><input  onChange={this.handleChange} type="text" ref={this.textInput} className={`topNav__search primaryHeader primaryHeader--smedium ${this.state.validationError ? "topNav__error" : ""}`} style={this.props.active ? {display: 'inline'} : {display:"none"}}></input>{this.state.validationError ? <h2 className="topNav__errorMessage">Only alphanumeric or postcodes, 3+ characters</h2> : ""}</form> : null}
                <img src={this.props.icon} class="topNav__icon" alt="option__icon"></img>
                
            </div>
        );
    }
}


export default TopNavOption;
