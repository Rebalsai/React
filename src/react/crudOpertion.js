import { Component } from "react";

class Crud extends Component{
    constructor(){
        super()
        this.state = {
            Data :[],
            act : 0,
            index : ""
        }
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        let Data = this.state.Data;
        let name = this.refs.txtName.value;
        let age = this.refs.txtAge.value;

        if(this.state.act === 0){
            let newData = {
                "name" : name,
                "age" : age
            }
            Data.push(newData)

        } else{
            let index = this.state.index;
            Data[index].name = name;
            Data[index].age = age;
        }

        this.setState({
            Data : Data,
            act : 0
        })

        this.refs.myForm.reset();
    }
      
    handleEdit = (i) =>{
        let Data = this.state.Data[i];
        this.refs.txtName.value = Data.name;
        this.refs.txtAge.value = Data.age;

        this.setState({
            Data : Data,
            act : 1,
            index : i
        })
    } 


    handleDelete = (i) =>{
      let Data = this.state.Data;
      Data.splice(i,1);
      this.setState({
        Data : Data
      })
    }

    render(){
        let  Data = this.state.Data
        return(
            <>            <form ref="myForm">
                Name: <input type="text" ref="txtName" placeholder="Enter Name"/><br/>
                Age: <input type="number" ref="txtAge" placeholder="Enter Age"/><br/>
                <button onClick={e => this.handleSubmit(e)}>Submit</button>
            </form>

            <table>
                 <tr>
                    <th>Name</th>
                    <th>Age</th>
                 </tr>
                 {
                    Data.map((data,i)=>
                    <tr key={i}>
                        <td>{data.name}</td>
                        <td>{data.age}</td>
                        <td>
                            <button onClick={this.handleEdit}>Edit</button>
                        </td>
                        <td>
                            <button onClick={this.handleDelete}> Delete </button>
                    
                        </td>
                    </tr>

                    )
                 }
            </table>
            </>

        )
    }
}
export default Crud;