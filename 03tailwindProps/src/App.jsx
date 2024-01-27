import './App.css'
import Card from './components/Card'

function App() {
  let myObj={
    name:'snehil',
    age:19
  }
  return (
    <>
      {/* <Card/>
       */}
       {/* {Card()}
       {Card()} */}
       <h1 style={{backgroundColor:'black'}}>YOOOO</h1>
       <Card channel="chai aur code" desc="idhar hum react seekhte h" btnText="click me"/>
       <Card channel="mark manson" desc="idhar hum jeevan ka gyan lete h" btnText="idfag"/>
    </>
  )
}

export default App
