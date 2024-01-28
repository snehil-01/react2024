import { useState } from "react";

function App() {
  const [count, setCount] = useState(15);

  const addValue = () => {
    setCount(count + 20);
    setCount(count + 1);
    setCount(count + 2);
    // console.log("clicked!!",count);
  }
  const decValue = () => {
    setCount(count - 20);
    setCount(count - 19);
    setCount(count - 2); // in such cases the last one gets executed.reason:fibre(diffing algo) doesnot updates state immedielty. it updates in batches in more controlled manner.


    /***********OG way **********/
    setCount((prev) => {
      return prev - 1;
    })
    setCount(prev => prev - 2);
    setCount(count-1); //last wala race jeet jaata h
    console.log("cliclked", count);
  }
  return (
    <>
      <h3>Hello world!!</h3>
      <h2>Counter Value : {count}</h2>
      <button onClick={addValue}>+{count}</button>
      <br />
      <button onClick={decValue}>-{count}</button>
    </>
  )
}

export default App
