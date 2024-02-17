import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [len, setLen] = useState(8);
  const [numChecked, setNumChecked] = useState(false)
  const [charChecked, setCharChecked] = useState(false)
  const [count, setCount] = useState(10);
  const [password, setPassword] = useState('');
  const inputRef = useRef(null);

  const generatePassword = useCallback(function () {
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numChecked) charset += '0123456789';
    if (charChecked) charset += '~!@#$%^&*()'
    let retVal = "";
    for (var i = 0, n = charset.length; i < len; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    // return retVal;
    setPassword(retVal);
  }, [len, charChecked, numChecked]) // if we keep it empty same chached function will be returned ie(changing len,numChecked and charCheked will not create any impact)

  const copyToClipborad = useCallback(() => {
    inputRef?.current?.select()
    inputRef?.current?.setSelectionRange?.(1, 4);
    window.navigator.clipboard.writeText(password);
  }, [password])

  useEffect(() => {
    generatePassword();
  }, [generatePassword]); // if we dont use useCallback it will result in infinte loop as the function changes on every render

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      {/* <div>
        {count}
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={()=>setCount(count-1)}>-</button>
      </div> if we dont call generatePassword in useEffect(but in jsx) it will change pass even if we change count */}
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          ref={inputRef}
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          readOnly />

        <button onClick={copyToClipborad}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>
      <div>
        <input type="range" min="1" max="100" value={len} id="myRange" onChange={(e) => setLen(e.target.value)} />
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="text"
            value={len}
            onChange={(e) => setLen(e.target.value)} />
        </div>

        <div className="flex items-center gap-x-1">
          <input 
          type="checkbox" 
           onClick={() => {
            // generatePassword(length, !numChecked, charChecked);
            setNumChecked(!numChecked)
          }} />
          <label htmlFor="num">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox"  
          onClick={() => {
            // generatePassword(length, numChecked, !charChecked)
            setCharChecked(!charChecked)
          }} />
        <label htmlFor="char">Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
