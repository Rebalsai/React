import { useState } from "react";
import { Link } from "react-router-dom";

function Cars (){
     
    
    const [data,setData] = useState([])


  const  Data = [
        {
            Name:"Maruthi",
            Moddel:2097,
            tyres:"Mahendra"
        },
        {
            Name:"Aadi",
            Moddel:1111,
            tyres:"Tvs"
        },
        {
            Name:"Suzuki",
            Moddel:4322,
            tyres:"Mrf"
        }
    ]



    const  handleChange = (e) =>{ 
        debugger
        let obj=
        e.target.value;
//         if(Data.Name=="Maruthi"){
//    obj.name=e.target.value;
//         }
        // else if(){}
        // else if(){

        // }
        // console.lof(obj)
        // data.push(obj);
        // const{name,value} = e.target;
        //spred operator
        //setData({...data,[name] : value})
   
    }

     const onSubmit = (e) =>{
        debugger

          //e.preventDefault();
         // console.log(data)
        //  Data.push(data)
        //  console.log(Data) 
     }
    return(
      
         <>  

                 <form>
              Car Name: <input type="text" name="name" placeholder="Enter Car Name" onChange={(e)=>handleChange(e)}/><br/>
                Moddel: <input type="text" name="model" placeholder="Enter Car Moddel" onChange={handleChange}/><br/>
                tyres:  <input type="text" name="tyres" placeholder="Enter Car tyres" onChange={handleChange}/><br/>
                <button onClick={ onSubmit}>Submit</button>
            </form>
           

       <table border="1">
        <tr>
            <th>CarName</th>
            <th>Model</th>
            <th>Tyres</th>
        </tr>
        {
            data.map((val)=>
                <tr>
                <td>{val.Name}</td>
                <td>{val.Moddel}</td>
                <td>{val.tyres}</td>
                </tr>
            )
            
        }
       
       </table>
       {/* <diV> <Link to="info">  <li>Info</li> </Link></diV> */}
      
        </>
        
    )
}
export default Cars;