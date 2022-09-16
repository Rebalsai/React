// import { Component } from "react";

// class Filter extends Component{


//     state=["sai","sugar"]

//     render(){
//         return(
//             <>
           
//             </>
//         )
//     }


// }
// export default Filter;


function Filter (){

    const names =['apple','banana','kiwi','mango']
      // name means pina vuna values name ki asign avutundi
      // includes means a value este aa value matrame store chesukuntundi
    const filtered = names.filter(name=>name.includes('n'))

    return(
        <>
        {/* browser lo display cheyataniki map ni vadutaamu */}
        {
           filtered.map(item=><li>{item}</li>)
        }
        
        </>                                                                                                                                                                                                                                                                                                       
    )
}
export default Filter;