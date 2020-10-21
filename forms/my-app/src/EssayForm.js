import React, {Component} from 'react';
import './App'

class EssayForm extends React.Component{
    constructor(more_info){
        super(more_info);
        this.state ={
            value: "please write an essay about your favorite DOM Element"
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({value: event.target.value})
    }
    handleSubmit(event){
        alert('an essay was submitted:' + this.state.value)
        event.preventDefault()
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit} className="text-center">
                <label>
                    <h1>Essay</h1>

                    <textarea value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input className="btn btn-danger" type="submit" value="Submit"/>
                </form>
        )
    }
}

export default EssayForm