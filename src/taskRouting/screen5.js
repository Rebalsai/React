import { Link,useNavigate } from "react-router-dom";

function App1 (){

    let navigate = useNavigate()

    const backToHome = () =>{
        navigate("/home")
    }

    let user = [
        {name:"venkat",id:17850136},
        {name:"upendra",id:174013},
        {name:"divya",id:17151194},
        {name:"naresh",id:174769},
    ]
    return (
        <>
        Welcome To Students id(Parameter Routing)
        {
            
            user.map((val)=>
            <div><Link to={"/screen5/"+val.id}>{val.name}</Link>
           {/* {val.name==="venkat" && <>hai</>} */}          
           </div> 
            )
        }
         <button onClick={backToHome}>BackToScreen1</button>
        </>
    )
}
export default App1;