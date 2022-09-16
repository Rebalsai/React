import { Link } from "react-router-dom";

const NavigationRouting = () =>{

    return(
    <div>
           {/* to means home page */}
         <Link to="/home" style={{color:"red"}}>   Screen1 </Link>&emsp;
         <Link to="/screen2" style={{color:"purple"}}>  Screen2 </Link>&emsp;
         <Link to="/screen3/:id" style={{color:"black"}}>  Screen3 </Link>&emsp;
         <Link to="/screen4" style={{color:"green"}}>  Screen4 </Link>&emsp;
         <Link to="/screen5/:id" style={{color:"orange"}}>  Screen5 </Link>&emsp;

        
    </div>
    )
}
export default NavigationRouting;