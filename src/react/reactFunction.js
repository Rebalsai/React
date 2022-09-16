import React, { useState } from "react";
function App1(){
   const [ name,setName]=useState("hello");

    return(<>
 <h1>{name}</h1>
 <button onClick={()=>setName("Welcome")}>Click</button>
    </>
    )
}
export default App1;