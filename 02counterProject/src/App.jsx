import { useState } from "react";

function App() {
  const [count,setCount]=useState(15);

  const addValue=()=>{
    setCount(count+1);
    console.log("clicked!!",count);
  }
  const decValue= ()=>{
    setCount(count-1);
    console.log("cliclked",count);
  }
    return(
      <> 
      <h3>Hello world!!</h3>
      <h2>Counter Value : {count}</h2>
      <button onClick={addValue}>+{count}</button>
      <br/>
      <button>-{count}</button>
      </>
    )
}

export default App
