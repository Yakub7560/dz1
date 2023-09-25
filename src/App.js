
import './App.css';
import { useState } from 'react';


function ShowHide() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(prevCount => prevCount + 1)
  }

  function decrement() {
    setCount(prevCount => prevCount - 1)
  }

  return (
    <>
     
      <button onClick={increment}>+</button>
      <span>{count}</span>
      <button onClick={decrement}>-</button>
    </>
  );
}



export default ShowHide;

