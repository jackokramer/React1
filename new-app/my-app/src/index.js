import ReactDOM from 'react-dom';
import React from 'react';

import App from './components/App'
import Animal from './components/Animal'



const props ={
    title: 'React',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quia, fuga molestias maxime distinctio consectetur aspernatur expedita a velit nam illo quidem corporis tenetur quod perspiciatis. Culpa incidunt esse aut.'
}
/*const HolaReact = () =>{
    return(
        <div className="jumbotron">
        <h2 className="text-center p-3"> Hola react</h2>
        <p className="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quia, fuga molestias maxime distinctio consectetur aspernatur expedita a velit nam illo quidem corporis tenetur quod perspiciatis. Culpa incidunt esse aut.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quia, fuga molestias maxime distinctio consectetur aspernatur expedita a velit nam illo quidem corporis tenetur quod perspiciatis. Culpa incidunt esse aut.</p>
    </div>
    );
}
//const practice = <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quia, fuga molestias maxime distinctio consectetur aspernatur expedita a velit nam illo quidem corporis tenetur quod perspiciatis. Culpa incidunt esse aut.</p>;
*/

ReactDOM.render(<App title="Angular" description="We are here......." />, document.getElementById('root'));
