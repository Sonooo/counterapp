import React from 'react';
import { useState } from 'react';
import "./style.css"

const App = () => {
  const [count,setCount]= useState(0)
  return (
    <div className='App'>
    <header>
      <h1>Counter app using State</h1>
    </header>
    <h2>{count}</h2>
    <button onClick={()=> setCount(0)}>Reset Counter</button>
    <button onClick={()=> count>=10? setCount("stop here"):setCount(count+1)}>Increase Counter</button>
    <button onClick={()=> count<=0? setCount("stop here"):setCount(count-1)}>Decrease Counter</button>
  </div>
  );
}

export default App;
