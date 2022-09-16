// const Find = () => {
//     const employees = [
//       {id: 1, name: 'venkat'},
//       {id: 2, name: 'sugar'},
//       {id: 3, name: 'live'},
//     ];

//     const found = employees.find(element => {
//       return element.id === 1;
//     });
  
//    // console.log(found); 
  
//     return (
//       <div>
//         <div>{found && <h2>{found.name}</h2>}</div>
//       </div>
//     );
//   };
  
//   export default Find;


import { Component } from "react";
class Find extends Component {
    render() {
      var array1 = [8,5, 12, 8, 130, 44];
      var found = array1.find(function (element) {
        return element < 10;
      });
  
      return (<div>{found}</div>);
    }
  }
  export default Find;
