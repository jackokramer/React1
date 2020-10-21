import React, {Component} from 'react';
import './App.css';

let users = ['eddy', 'jane', 'sarah', 'melissa', 'jean'];
let userList = [`<li>eddy</li>`, `<li>jane</li>`, `<li>sarah</li>`, `<li><melissa/li>`, `<li><jean/li>`];

class List extends Component{
    constructor(props){
        super(props);
        this.state = {
            message:""
        }
    }

render (){
    let userList = this.props.users.map((user, index)=>{
        if(user == this.props.loggedIn){
        return <li key={index} className="logged-in">{user}</li>
        } else{
                return <li key={index}>{user}</li>
        }
    })
    return(
        <div className="container">
            <h1>List Components</h1>
            <ul>
                {userList}
            </ul>
        </div>
    )
};
}

export default List