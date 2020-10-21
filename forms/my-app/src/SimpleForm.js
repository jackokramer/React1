import React, {Component} from 'react';
import './App'


class SimpleForm extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            text: ""
        };
    }
    onInputChange = (event) =>{
        this.setState({text: event.target.value});
    }
    onFormSubmit = (event) =>{
        event.preventDefault();
        alert(`${this.state.text} was submitted`);
        this.setState({text: ''})
    }
    render(){
        return(
            <form className="mx-auto text-center" onSubmit={this.onFormSubmit}>
                <p className="p-3"> First Name: <input type="text" name="first_name"
                // value is controlled by the state
                value = {this.state.text}
                // we will call back when input changes
                onChange={this.onInputChange} className=""/>
                </p>
                <p> Last Name: <input type="text" name="last_name"
                // value is controlled by the state
                value = {this.state.text}
                // we will call back when input changes
                onChange={this.onInputChange} className=""/>
                </p>
                <p> Email: <input type="text" name="email"
                // value is controlled by the state
                value = {this.state.text}
                // we will call back when input changes
                onChange={this.onInputChange} className=""/>
                </p>
                <button className="btn btn-secondary mx-auto m-4">Submit</button>

            </form>
        )
    }
}


export default SimpleForm 