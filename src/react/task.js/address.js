import React, { useState } from "react";
import { PlusCircleOutlined,EditOutlined,DeleteOutlined } from '@ant-design/icons'
import { Modal} from 'antd';

const Address = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const[type,setType] = useState("")
    const[address,setAddress] = useState("")
    const[country,setCountry] = useState("")
    const[state,setState] = useState("")
    const[city,setCity] = useState("")
    const[zip,setZip] = useState("")
    const[list,setList] = useState([])
    const[error,setError] = useState(false)
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = (e) => {
       // setIsModalVisible(false);
        e.preventDefault();
        if( type.length==0 || address.length==0 || country.length==0 || state.length==0 || city.length==0 || zip.length==0){
            setError(true)
           }
       // console.log(type,address,country,state,city,zip)
       const date2 ={type,address,country,state,city,zip}
       if(type,address,country,state,city,zip){
        setList((val)=>[...val,date2])
        setType("")
        setAddress("")
        setCountry("")
        setState("")
        setCity("")
        setZip("")

    }
    if(date2.type!=="",date2.address!=="",date2.country!=="",date2.state!=="",date2.city!=="",
     date2.zip!==""){
      setIsModalVisible(false)
     }
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const handleSubmit=(e)=>{
    e.preventDefault();
    let data=data;
    // let Type=name.Type.value;
    // let address=name.Address.value;
    // let ZipCode=name.ZipCode.value;
    }
    return (<>
   &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <PlusCircleOutlined onClick={showModal} />&emsp;
        <EditOutlined />&emsp;
        <DeleteOutlined />
        <table border="1
        ">
            <tr>
                <th>check</th>
                <th>Type</th>
                <th>Address</th>
                <th>Country</th>
                <th>State</th>
                <th>City</th>
                <th>ZipCode</th>
            </tr>
            {
        list.map((a)=>
            <tr>
                <th><input type="checkbox"/></th>
                <th> {a.type} </th>
                <th> {a.address}  </th>
                <th> {a.country}    </th>
                <th> {a.state}   </th>
                <th> {a.city} </th>
                <th> {a.zip}</th>
                
           </tr>
       )
       }
        </table>
        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <form>
               
            <div class="row">
     <div class="column">
                 <div>Type</div>
                        <select onChange={(e)=>setType(e.target.value)} >
                        <option>select one</option>
                            <option value="perminant">perminant</option>
                            <option value="residencial">residencial </option>
                        </select>
                        {error && address.length<=0?
    <label >*IsRequired</label>:""}
                        </div>
                      
                       
                        <div class="column">
                        <div> address</div>
                            <input placeholder="Enter Address" value={address} onChange={(e)=>setAddress(e.target.value)}/>
                            {error && address.length<=0?
    <label >*IsRequired</label>:""}
                            </div>

                            <div class="column">
                    <div> Country</div>
                        <select onChange={(e)=>setCountry(e.target.value)}>
                        <option>select one</option>
                            <option value="india">India</option>
                            <option value="china ">USA </option>
                        </select>
                        {error && country.length<=0?
    <label >*IsRequired</label>:""}
                        </div>
                        </div>
                  
                        <div class="row">
                <div class="column">
                <div>state</div>
                        <select onChange={(e)=>setState(e.target.value)}>
                            <option>select one</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Andhrapradesh">Andhrapradesh </option>
                            <option value="Chicago">Chicago </option>
                        </select>
                        {error && state.length<=0?
    <label >*IsRequired</label>:""}
                        </div>
                       

                        <div class="column">
                <div>City</div>
                <input onChange={(e)=>setCity(e.target.value)} value={city}   placeholder="Enter City" />
                {error && city.length<=0?
    <label >*IsRequired</label>:""}
                </div>
               
                <div class="">
              <div> zipcode</div>
               <input  placeholder="Enter zipcode" value={zip} onChange={(e)=>setZip(e.target.value)}/>
              
               {error && zip.length<=0?
    <label >*IsRequired</label>:""} </div>
               </div>
            </form>
        </Modal>

    </>)
}
export default Address;