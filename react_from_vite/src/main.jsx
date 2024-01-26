import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

console.log("yo")
const anotherElement=(
  <h1>hi </h1>
)
ReactDOM.createRoot(document.getElementById('root')).render(
  App()
  // <App/>
)
