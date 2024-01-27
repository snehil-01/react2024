function App() {
  let cnt=15;
  const addValue=()=>{
    console.log("clicked!!",cnt++);
  }
    return(
      <> 
      <h3>Hello world!!</h3>
      <h2>Counter Value : {cnt}</h2>
      <button onClick={addValue}>+</button>
      <br/>
      <button>-</button>
      </>
    )
}

export default App
