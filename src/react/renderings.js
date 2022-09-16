import { Component } from "react";

class Rendering extends Component{

    render(){
        const isLoggedIn = true;
        let mesage;
        if(isLoggedIn){
            mesage= <h1>you are Eligible for going to the Office</h1>
        }else{
            mesage=<h1>you are disqualified</h1>
        }
        return mesage;

         //terminary operator
       // return <h1>Welcome {isLoggedIn? "sai" : "Guest"}</h1>
      
    }
}
export default Rendering;