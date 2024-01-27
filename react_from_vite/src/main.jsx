import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

console.log("yo")
const anotherElement=(
  <h1> hi </h1>
)

let ReactElement=(<a href="https://google.com">This will take you to google</a>)
React.createElement('a',
{
  href:'https://google.com',
  target:'_blank'
},
'This will take you to google'
)
console.log(ReactElement)
ReactDOM.createRoot(document.getElementById('root')).render(
  // App()
  // <App/>
  ReactElement
)
