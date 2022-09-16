import { Route,Link } from "react-router-dom";

function Nestead2 (props) {

    // const backToScreen = () =>{
    //   debugger
    //      // console.log("hello")

    //      props.history?.push?.("/home");
    // }

    return (<>
     
           
        <h1> Welcome To Redirect the page </h1> <br/>
          <Link to="/home">
        <button>GoBackScreen1</button>
        </Link>
        {/* <button onClick={backToScreen}>back</button> */}
    </>)
}
export default Nestead2;