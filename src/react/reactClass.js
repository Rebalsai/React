import { Component } from "react";

class App2 extends Component{
    

   state = {name:"ziraff"}

  //  changeName = () => {
  //   this.setState({name: "yellowblock"});
  // }
    render(){
        
        return(<>
        <h1>{this.state.name}</h1>
       <button onClick={()=>this.setState({name:"yellowblock"})}>Click</button> 
      {/* <button onClick={this.changeName}>Click</button> */}
        </>
        )
    }
}
export default App2;