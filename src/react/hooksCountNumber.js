import { useState } from "react";

function Hooks(){
    const [count,setCount]=useState(0)

  const  increase = ()=>{
        setCount(count+1);
    }
    const  decrease = ()=>{
        setCount(count-1);
    }


    return(
        <>
        <h1>{count}</h1>
        {/* <button onClick={()=>setCount(count+1)}>Add</button> */}
        <button onClick={increase}>Increse</button>
        <button onClick={decrease}>decrese</button>
        </>
    )
}
export default Hooks;