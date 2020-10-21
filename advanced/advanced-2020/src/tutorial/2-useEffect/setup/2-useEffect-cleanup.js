import React, { useState, useEffect } from 'react';

// cleanup function
// second argument
// check size of the window

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth)

const checkSize = () =>{
  setSize(window.innerWidth)
}

  useEffect(()=>{
    console.log("useEffect")
    window.addEventListener('resize', checkSize);
    return()=>{
      console.log('cleanup')
      window.removeEventListener('resize', checkSize)
    }
  })
  console.log('render')
  return ( 
  <>
  <h2>useEffect CleanUp</h2>
  <h2>{size}Px</h2>
  </>
  );
};

export default UseEffectCleanup;
