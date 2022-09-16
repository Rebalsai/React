import { useEffect, useState } from "react";

function State(){

    const Countries =[
        {id:'1',name:'INDIA'},
        {id:'2',name:'USA'}
    ];

    const States = [
        {id:'1',countryId:'1',name:'A.P'},
        {id:'2',countryId:'1',name:'Telengaana'},
        {id:'3',countryId:'2',name:'California'},
        {id:'4',countryId:'2',name:'Texas'}
    ]

    const[country,setCountry] = useState([]);
    const[state,setState] = useState([]);
      
    // useEffect =  render avinapudu api call call avataniki(without api call static gaa )
    useEffect(()=>{
        setCountry(Countries);
    },[])

    const handleCountry =(id)=>{
         const dt = States.filter(x => x.countryId === id )
         setState(dt)
    }

    return(
        <>
        <select onChange={(e)=>handleCountry(e.target.value)}>
            <option>Select Country</option>
            {
                country &&
                country !== undefined ?
                // key = Array lo index possion 
                country.map((val,index)=>{
                    return(
                        <option key={index} value={val.id}>{val.name}</option>
                    )
                })
                :"No Country"
            }
        </select>
        <br/><br/>
        <select >
            <option>Select State</option>
            {
                state &&
                state !== undefined ?
                state.map((val,index)=>{
                    return(
                        <option key={index} value={val.id}>{val.name}</option>
                    )
                })
                :"No State"
            }
        </select>
        
        </>
    )
}
export default State;