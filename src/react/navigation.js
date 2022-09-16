// import React from "react";
import { Link } from "react-router-dom";

const Navbar = () =>{

    return(
    <div>
           {/* to means home page */}
         <Link to="/home">   Home </Link>&emsp;
         <Link to="/form">  Form </Link>&emsp;
         <Link to="/timer">  Timer </Link>&emsp;

        
    </div>
    )
}
export default Navbar;