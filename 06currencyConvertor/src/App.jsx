import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [amt, setAmt] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  let cnt=0;
  
  let info;

  useEffect(() => {
    // fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`)
    // .then((res) => res.json())
    // .then(data => {
    //   info=data[from];
    // })
    info =60
  },[from])

  return (
    <>
    <button onClick={() => cnt++}>+</button>
    {cnt}
    <button onClick={() => console.log(info)}>show</button>
      <div>
        <input type="number" />{" "}
        <select
          name="from"
          id="from"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        >
          <option value="usd">USD</option>
          <option value="inr">INR</option>
          <option value="aus">AUS</option>
        </select>
      </div>

      <button onClick={() => {
        setFrom(to)
        setTo(from)
      }}>SWAP</button>

      <div>
        <input type="number" disabled />{" "}
        <select
          name="to"
          id="to"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        >
          <option value="usd">USD</option>
          <option value="inr">INR</option>
          <option value="aus">AUS</option>
        </select>
      </div>
    </>
  );
}

export default App;
