import { useState } from 'react';
import './App.css'
const body = document.querySelector('body');

function App() {
  const colors = ['red', 'green', 'blue', 'olive', 'gray'];
  const [bgColor, setBgColor] = useState('black');
  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      backgroundColor: bgColor
    }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {colors.map((color) => {
            return <button style={{ backgroundColor: color }} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" key={String(Symbol(color))} onClick={() => setBgColor(color)}>{color}</button>
            // return <button style={{backgroundColor:color}} key={String(Symbol(color))} onClick={()=>body.style.backgroundColor=color}>{color}</button> -->when div styles is not there!! (badWay) 
          })}
        </div>

      </div>
    </div>
  )
}
// onClick={()=>{
//    setBgColor(color);
//    return 20;
// }}

/*
OnCLick expects a function
onClick{fun} chalega
onClick{fun(args)} Nahi chalega
onClick{()=>fun(args)} chalega
onClick{function(){
  func(args)
}} chalega

onClick={()=>{
  return setBgColor(color);
}} is same as onClick={()=>setBgColor(color)}

In React event handlers, returning a value isn't necessary for void functions like state updates. React only concerns itself with the execution of the function, not its return value.
Both expressions call setBgColor(color) when the click event occurs, effectively updating the state. 

-->>>>The return value is essentially ignored.


function onClick(fn){
  fn() -> it just executes the functio. isko is function ki return value se farak nahi padta 
}
isko esa smjh onClick(()=>{
  func();
})

onClick={()=>{
   setBgColor(color);
   return 20;
}} what about this 
The function then returns 20, but this value is not used by React's event handling mechanism.
React only cares about the execution of setBgColor, not the return value.
*/
export default App
