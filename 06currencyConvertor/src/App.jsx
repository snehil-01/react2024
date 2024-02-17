import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
    // const [cnt,setCnt] = useState(20);
    // // useDemoHook(setCnt);
    // // if(2){
    // //     useDemoHook(21);
    // // }
    // useEffect(()=>{
    //     console.log(`new cnt is ${cnt}`)
    // },[cnt])
    useCurrencyInfo('usd');

    return (<>
        <h1 className="bg-green-400">Currency App</h1>
        <InputBox/>
    </>
    )
}

export default App;