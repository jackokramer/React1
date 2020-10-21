import React, {Component} from 'react';
import './App.css';

const Animal= (prop) =>{
    return (
        <div className="animal card">
            <h2>{prop.name}</h2>
            <hr/>
    <button onClick={()=> prop.onPetAnimal(prop.name)} className="btn btn-primary">{`Pet the ${prop.name}`}</button>
        </div>
    )
}

export default Animal;