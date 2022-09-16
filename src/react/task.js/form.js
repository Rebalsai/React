// import { useState } from "react";
//  import { Button, Col, Form, Input, Row, Select,Radio,DatePicker } from 'antd';
//  const { Option } = Select;



// function TaskForm (){
//     const[name,setName] = useState("")
//     const[lName,setLName] = useState("")
//     const[date,setDate] = useState("")
//     const[date2,setDate2] = useState("")
//     const[designition,setDesignition] = useState("")
//     const[department ,setDepartment] = useState("")
//     const[email,setEmail] = useState("")
//     const[pnumber,setPnumber] = useState("")
//     const[gender,setGender] = useState("")
//     const[experience,setExperience] = useState("")
//     const[list,setList] = useState([])


//     const onSubmit = (e)=>{
//         e.preventDefault();
//         console.log(name,email,date)
//         const date ={name,lName,date,date2,designition,department,email,pnumber,gender,experience}
//         if(name&&lName&&date&&date2&&designition&&department&&email&&pnumber&&gender&&experience){
//             setList((val)=>[...val,date])
//             setName("")
//             setLName("")
//             setDate("")
//             setDate2("")
//             setDesignition("")
//             setDepartment("")
//             setEmail("")
//             setPnumber("")
//             setGender("")
//             setExperience("")
           
//         }
//     }

//     return(
//        <>
//             <Form>
//                     <Row>
//                         <Col>
//                             <br />
//                             <Form.Item                               
//                                 style={{ width: "320px" }}
//                                 rules={[{required: true }]} 
//                             >
//                                 <label>First name</label>
//                                 <Input placeholder="firstname" value={name}  onChange={(e)=>setName(e.target.value)}/>
//                             </Form.Item>
//                         </Col>&emsp;
                        
//                         <Col>
//                             <br />
//                             <Form.Item  style={{ width: "320px" }}
//                             rules={[{required: true }]}  >
//                                 <label>Last name</label>
//                                 <Input placeholder="lastname" value={lName} onChange={(e)=>setLName(e.target.value)} />
//                             </Form.Item>
//                         </Col>&emsp;
//                         <Col>
//                             <br />
//                             <Form.Item  rules={[{required: true }]} >
//                                 <label>DOB</label>
//                                 <br/>
//                                 <DatePicker style={{ width: "320px" }} value={date} onChange={(e)=>setDate(e.target.value)}/>
//                             </Form.Item>
//                         </Col>&emsp;
//                         <Col>
//                             <br />
//                             <Form.Item  rules={[{required: true }]} >
//                                 <label>Date of Joining</label>
//                                 <br/>
//                                 <DatePicker style={{ width: "320px" }} value={date2} onChange={(e)=>setDate2(e.target.value)}/>
//                             </Form.Item>
//                         </Col>&emsp;
                        
//                         <Col>
//                             <Form.Item  
//                                 rules={[{ required: true }]}
//                                 style={{ width: "320px" }}
//                             >
//                                 <label>Desgination</label>
//                                 <Select placeholder="Please select a desgination" value={designition} onChange={(e)=>setDesignition(e.target.value)}>
//                                     <Option value="FrentEnd">FrentEnd</Option>
//                                     <Option value="BackEnd ">BackEnd </Option>
//                                     <Option value="FullStack ">FullStack </Option>
//                                 </Select>
//                             </Form.Item>
//                         </Col>&emsp;
//                         <Col>
//                             <Form.Item 
//                                 rules={[{ required: true }]}
//                                 style={{ width: "320px" }}
//                             >
//                                 <label>Department</label>
//                                 <Select placeholder="Please select a department" value={department} onChange={(e)=>setDepartment(e.target.value)}> 
//                                     <Option value="jr.developer">Jr.developer</Option>
//                                     <Option value="sr.developer ">Sr.developer </Option>
//                                     <Option value="trinee  ">Trinee </Option>
//                                     <Option value="designer">Designer </Option>
//                                 </Select>
//                             </Form.Item>
//                         </Col>&emsp;
//                         <Col>
//                             <Form.Item  style={{ width: "320px" }} rules={[{ required: true }]}>
//                                 <label>Email</label>
//                                 <Input placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
//                             </Form.Item>
//                         </Col>&emsp;
//                         <Col>
//                             <Form.Item  style={{ width: "320px" }} rules={[{ required: true }]}>
//                                 <label>Phone</label>
//                                 <Input placeholder="phone" value={pnumber} onChange={(e)=>setPnumber(e.target.value)}/>
//                             </Form.Item>
//                         </Col>&emsp;
                        
//                         <Col>
//                             <Form.Item rules={[{ required: true}]} style={{ width: "320px" }}>
//                                 <label>Gender</label>
//                                 <br />
//                                 <Radio.Group>
//                                     <Radio value="Male" name="gender"  onChange={(e)=>setGender(e.target.value)}> Male </Radio>
//                                     <Radio value="Female" name="gender"  onChange={(e)=>setGender(e.target.value)}> Female </Radio>
//                                 </Radio.Group>
//                             </Form.Item>
//                         </Col>&emsp;
//                         <Col>
//                             <Form.Item  rules={[{ required: true}]} style={{ width: "320px" }}>
//                                 <label>Experience</label>
//                                 <Input placeholder="Enter your experience" value={experience} onChange={(e)=>setExperience(e.target.value)} />
//                             </Form.Item>
//                         </Col>
//                     </Row>
//                     <Form.Item>
//                     <Button onClick={onSubmit}
//                         htmlType="Submit"
//                         type="primary"
//                     >
//                         Save
//                     </Button>
//                     </Form.Item>                
//                 </Form>
//                 <center>
//       <table border="1">
//         <tr>
//             <th></th>
//             <th>first Name</th>
//             <th>Designition</th>
//             <th>Department</th>
//             <th>Date of joining</th>
//             <th>Status</th>
//         </tr>
//         {
//            list.map((val)=>
           
//               <tr>
//                 <th>{val.name}</th>
//                 <th>{val.lName}</th>
//                 <th>{val.date}</th>
//                 <th>{val.date2}</th>
//                 <th>{val.designition}</th>
//                 <th>{val.department}</th>
//                 <th>{val.email}</th>
//                 <th>{val.pnumber}</th>
//                 <th>{val.gender}</th>
//                 <th>{val.experience}</th>
//               </tr>
            
//             )
//         }
//       </table>
//       </center>

//        </>
//     )
// }
// export default TaskForm;


import React, { useState } from "react";
import { Form, Row, Col, Input, DatePicker, Select, Radio, Button, } from "antd";
import { Option } from "rc-select";
// import Moment from "react-moment";
import moment from "moment";






function TaskForm() {

    const [table, setTable] = useState([]);

    const [data, setData] = useState({

        FirstName: "",
        LastName: "",
        Dateofbirth: "",
        Dateofjoining: "",
        designition: "",
        department: "",
        Gender: "",
        Email: "",
        Phonenumber: "",
        Experience: ""

    })

    const handleform = (e) => {

        const { name, value } = e.target;
        setData({ ...data, [name]: value });
        console.log(data)

    }

const dateChange = (e) =>{
    let formatDate = e ? moment(e).format("DD-MM-YYYY") : "";
    // console.log(formatDate)
    const { name, value } = e.target;
            setData({ ...data, [name]: value });
//             console.log(data)
 }

    const handleform2 = (e) => {

         e.preventDefault();
        //  console.log(data)
        console.log(data)
        table.push(data)
         console.log(table)

    }

    return (

        <>

            <Form >
                <Row>
                    <Col>
                        <div>
                            <Form.Item
                                rules={[{ required: true }]}
                                style={{ width: "300px" }}
                            > <label> First name</label>
                                <Input name="FirstName"
                                    maxLength={50} onChange={(e) => handleform(e)} />
                            </Form.Item>
                        </div>
                    </Col>&emsp;
                    <Col>
                        <div>
                            <Form.Item
                                rules={[{ required: true }]}
                                style={{ width: "300px" }}
                            > <label>Last name</label>
                                <Input name="LastName"
                                    maxLength={50} onChange={(e) => handleform(e)} />
                            </Form.Item>
                        </div>
                    </Col>&emsp;
                    <Col>
                        <div>
                            <Form.Item rules={[{ required: true }]} >
                                <label>DOB</label>
                               <br />
                                <DatePicker style={{ width: "300px" }} name="Dateofbirth"  format={"DD/MM/YYYY"} onChange={(e) => dateChange(e)} />
                            </Form.Item>
                        </div>
                    </Col>&emsp;
                    <Col>
                        <div>
                            <Form.Item rules={[{ required: true }]} >
                                <label>Date of Joining</label>
                                <br />
                                <DatePicker style={{ width: "300px" }} name="Dateofjoining"  format={"DD/MM/YYYY"} onChange={(e) => dateChange(e)} />
                            </Form.Item>
                        </div>
                    </Col>&emsp;
                    <Col>
                        <div>
                            <Form.Item
                                rules={[{ required: true }]}
                                style={{ width: "320px" }}
                            >
                                <label>Desgination</label>
                                <Select placeholder=" select" name="designition">
                                    <Option value=" WebDevelopner"> Web Developner</Option>
                                    <Option value="Tester">Tester </Option>
                                    <Option value="DevopsEngineer">Devops Engineer </Option>
                                </Select>
                            </Form.Item>
                        </div>
                    </Col>&emsp;
                    <Col>
                        <div>
                            <Form.Item
                                rules={[{ required: true }]}
                                style={{ width: "320px" }}
                            >
                                <label>Department</label>
                                <Select placeholder=" select" name="department">
                                    <Option value="ApplicationDevelopment">Application Development</Option>
                                    <Option value=" BusinessProcessManagement "> Business Process Management </Option>
                                    <Option value="ConsultingServices ">Consulting Services </Option>
                                </Select>
                            </Form.Item>
                        </div>
                    </Col>&emsp;
                    <Col>
                        <div>
                            <Form.Item rules={[{ required: true }]} style={{ width: "300px" }}>
                                <label>Gender:</label><br />
                                <Radio.Group onChange={(e) => handleform(e)}>
                                    <Radio value="male" name="Gender" > Male </Radio>
                                    <Radio value="female" name="Gender" > Female </Radio>
                                </Radio.Group>
                            </Form.Item>
                        </div>
                    </Col>&emsp;
                    <Col>
                        <div>
                            <Form.Item
                                rules={[{ required: true }]}
                                style={{ width: "300px" }}
                            > <label> Email</label>
                                <Input name="Email"
                                    maxLength={50} />
                            </Form.Item>
                        </div>
                    </Col>&emsp;
                    <Col>
                        <div>
                            <Form.Item
                                rules={[{ required: true }]}
                                style={{ width: "300px" }}
                            > <label>Phone number</label>
                                <Input
                                    name="Phonenumber"
                                    maxLength={50} onChange={(e) => handleform(e)} />
                            </Form.Item>
                        </div>
                    </Col>&emsp;
                    <Col>
                        <div>
                            <Form.Item
                                rules={[{ required: true }]}
                                style={{ width: "300px" }}
                            > <label> Experience</label>
                                <Input
                                    name="Experience"
                                    maxLength={50} onChange={(e) => handleform(e)} />
                            </Form.Item>
                        </div>
                    </Col>&emsp;
                </Row>
                <Button htmlType="Submit" onClick={(e) => handleform2(e)}>SUBMIT</Button>
            </Form>
</>)
}
export default TaskForm;
