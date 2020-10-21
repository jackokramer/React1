import React, {Component} from 'react';

import Animal from './Animal';
import List from './List';
import Title from './Title'; // we can drop the .js file exentsion
import './App.css';
import './List.css';



class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            message:""
        }
    }
    render(){
        let users = ['eddy', 'jane', 'sarah', 'melissa', 'jean'];
        return(
            <div className="container">
                <List users={users} loggedIn="jean"/>
                </div>
        )
    }
    /*ANIMAL FARM**
    
    handleMessage(name){
        const newMessage = `You just pet the ${name}`
        this.setState({message: newMessage})
    }
    render(){
        return(
            <div className="container">
                <h2>Petting Zoo</h2>
        <h3>{this.state.message}</h3>
                <div className="jumbotron">
                    <Animal name="Horse" onPetAnimal={(name)=> this.handleMessage(name)}/>
                    <Animal name="Goat" onPetAnimal={(name)=> this.handleMessage(name)}/>
                    <Animal name="Monkey" onPetAnimal={(name)=> this.handleMessage(name)}/>
                    <Animal name="Sheep" onPetAnimal={(name)=> this.handleMessage(name)}/>
                </div>
            </div>
        )
    } */
}

/*
class HelloJs extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            // any number of key value pairs:
            greeting: 'hola',
            excitement: 'Go fuck yourself'
        }
    }
    render(){
         return(
        <div className="jumbotron">
                <h2 onClick={()=> this.setState({greeting: 'Goodbye'})} className="text-center p-3"> {this.state.greeting}</h2>
                    <h1>Here's {this.props.title}</h1>
                        <p>Pretty cool ehhh</p>
                            <Title/>
                            <p className="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quia, fuga molestias maxime distinctio consectetur aspernatur expedita a velit nam illo quidem corporis tenetur quod perspiciatis. Culpa incidunt esse aut.
                            {this.props.title} and {this.props.description}</p>
                            <button className="btn btn-primary mx-auto" onClick={()=> this.setState((prevState) =>({
                                excitement: prevState.excitement +'!!!!!!!!!'
                            }))}>Click Me</button>
    </div> 
         )    
}
}
*/

/*
const App = (props) =>{
    return(
        <div className="jumbotron">
        <h2 className="text-center p-3"> Hola react</h2>
    <h1>Here's {props.title}</h1>
            <p>Pretty cool ehhh</p>
        <Title/>
        <p className="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quia, fuga molestias maxime distinctio consectetur aspernatur expedita a velit nam illo quidem corporis tenetur quod perspiciatis. Culpa incidunt esse aut.
        {props.title} and {props.description}</p>
    </div>
    )
}
*/

export default App;