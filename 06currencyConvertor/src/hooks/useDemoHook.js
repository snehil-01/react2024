// import { useEffect } from "react";

function useDemoHook(setVal){
    // useEffect(()=>{
    //     console.log(`dependency has changed ${dependency}`)
    // },[dependency])
    setVal(2);
}

export {useDemoHook};