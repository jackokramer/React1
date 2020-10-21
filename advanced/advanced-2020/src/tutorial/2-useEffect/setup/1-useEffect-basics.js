import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter

//hooks cannot be called conditionally
const UseEffectBasics = () => {

    const [value, setValue] = useState(0);

  useEffect(()=>{
      console.log('call userEffect');
      if(value>1){
      document.title = `New message (${value})`;
      }
  }, [value]) // array of dependancy if let blank it'll only run once
  console.log('render component');
  useEffect(()=>{
    console.log('hello world')
  }, [value]) //  <--adding the variable in the array will cause it to run more than once
  return <>
    <h3>useEffect Basics</h3>
<h2>{value}</h2>
<button className="btn" onClick={()=> setValue(value+1)}>Click Me</button>
  </>;
};

export default UseEffectBasics;
