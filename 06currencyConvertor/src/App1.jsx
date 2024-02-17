import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import { useCallback } from 'react'

function App1() {

  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('ind')
  const [fromVal, setFromVal] = useState(0)
  const [toVal, setToVal] = useState(0)


  // useEffect(() => {
  //   console.log("use Effect!!") // func is executed after the page is loaded 
  // }, [])

  // console.log("App Component!!")

  const clickHandler = () => {
    setTo(from)
    setFrom(to)
  }

  const convertor = useCallback(() => {
    if(from=='usd' && to=='ind'){
    setToVal(fromVal*80)
   }else if(from == 'ind' && to == 'usd'){
    setToVal(fromVal/80);
   }
  }, [from,fromVal,to])

  useEffect(() => {
    convertor()
  }, [convertor])

  return (
    <h1>

      <div className='m-2'>
        <input type="number" min={0} value={fromVal} onChange={(e) => {
          setFromVal(e.target.value)
        }} />
        <select className='m-5' value={from} onChange={(e) => setFrom(e.target.value)}>
          <option value="usd">usd</option>
          <option value="ind">ind</option>
          <option value="euro">euro</option>
          <option value="pound">pound</option>
        </select>
      </div>
      <div className='m-2'>
        <input type="number" min={0} value={toVal} readOnly/>
        <select className='m-5' value={to} onChange={(e) => setTo(e.target.value)}>
          <option value="usd">usd</option>
          <option value="ind">ind</option>
          <option value="euro">euro</option>
          <option value="pound">pound</option>
        </select>
      </div>
      <button onClick={clickHandler}>swap</button>
    </h1>
  )
}

export default App1
