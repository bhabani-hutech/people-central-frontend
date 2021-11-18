/* eslint-disable no-unused-vars */
import React, { useState } from "react";
// import moment from "moment";
// import axios from "axios";
import {
  // Radio,
  Divider,
  // Button,
  Row,
  Col,
  Form,
  // Upload,
  // message,
  // Input,
  // DatePicker,
  // Select,
  // Table, Modal
} from "antd";
// import {
//   UploadOutlined,
//   CheckOutlined,
//   CloseOutlined,
// } from "@ant-design/icons";
import "./Emponboarding.scss";
import "antd/dist/antd.css";

import {useDispatch, useSelector} from 'react-redux'
import {clientonboard} from '../../action/useraction'

const currency = ["rupiya", "lira"];


const paymentterm = ["Upon receipt", "Advance payment"];


const Profile = () => {
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
 
 
  // const [employee, setEmployee] = useState({
  //   empFirstName: "robert",
  //   empLastName: "",
  //   phnoeNumber: "",
  //   gender: "",
  //   address1: "",
  //   address2: "",
  //   dateOfBirth: "",
  //   empId: "",
  //   empEmail: "",
  //   joiningDate: "",
  //   relievingDate: "",
  //   managerEmail: "",
  //   experience: "",
  //   qualication: "",
  //   bankAccountNo: "",
  //   ifscCode: "",
  //   bankName: "",
  //   branchName: "",
  //   employeement: "",
  //   designation: {
  //     designationName: "",
  //   },
  //   roles: {
  //     roleName: "",
  //   },
  //   department: {
  //     departmentName: "",
  //   },
  // });
  // const dispatch = useDispatch()


// const handelEmployeement = (e) => {
//   const name = e.target.name;
//   const value = e.target.value;
//   // console.log(value);
//   setEmployee({
//     [name]: value,
//   });
// };
//   console.log(employee);


  const onFinish = (values) => {
    console.log("Success:", values);

      
      
      
    form.resetFields();
    
    
    
    
  }

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  
  };

  // let handleclear = ()=>{
  //   form.resetFields();    
  // }  
  let clearform = ()=>{
    form.resetFields();
           
  }
 

  const [value, setValue] = React.useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <div>
        <div className="user_details">
          <div className="tab2_header">
            <div className="tab2_heading">Personal Info :</div>
          </div>
          <Divider></Divider>
          <Row justify="start">
            <Col style={{textAlign:'left'}} span={8}>
            <h2>Name</h2>  
             <p>robert</p>

             <h2>Blood group</h2>  
             <p>robert</p> 
            </Col>
            
            <Col style={{textAlign:'left'}} span={8}>
             
            <h2>Date of birth</h2>  
             <p>15/6/1994</p>
            
            <h2>Meritial status</h2>  
             <p>Merried</p>
            </Col>
            <Col style={{textAlign:'left'}} span={8}>
             
             <h2>Gender</h2>  
              <p>Female</p>
             </Col>
          </Row>
         

        

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            
            {/* <Button onClick={clearform} icon={<CloseOutlined />} className="cancelempbtn">
              Cancel
            </Button>
            <Button
              htmlType="submit"
              className="saveempbtn"
              icon={<CheckOutlined />}
            >
              Save
            </Button> */}
          </Form.Item>

          <section style={{height:'10px', backgroundColor:'white'}}></section>
          <div className="tab2_header">
            <div className="tab2_heading">Contact Info :</div>

           

          </div>
         
          <Divider></Divider>
          <Row justify="start">
            <Col style={{textAlign:'left'}} span={12}>
            <h2>Email id</h2>  
             <p >abc123@gmail.com</p>

             <h2>Phone number</h2>  
             <p>123456125</p> 
            </Col>
            
            <Col style={{textAlign:'left'}} span={12}>
             
            <h2>Date of birth</h2>  
             <p>15/6/1994</p>
            

            <h2>Alternate phone number</h2>  
             <p>123456125</p>
            </Col>
            {/* <Col span={8}>
             
             <h2>Gender</h2>  
              <p>Female</p>
             </Col> */}
          </Row>
          <section style={{height:'10px', backgroundColor:'white'}}></section>
          <div className="tab2_header">
            <div className="tab2_heading">Address: </div>

           

          </div>
         
          <Divider></Divider>
          <Row justify="start">
            <Col style={{textAlign:'left'}} span={12}>
            <h2>Current address</h2>  
             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, neque!</p>

             <h2>House type</h2>  
             <p>owned by sibling</p> 
             <h2>Staying at current residence since</h2>  
             <p>15/10/2005</p>

             <h2>Living in current city since</h2>  
             <p>15/10/2005</p>  
            
            </Col>
            
            <Col style={{textAlign:'left'}} span={12}>
            <h2>Address</h2>  
             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, aliquid.</p>
            

           
            </Col>
            {/* <Col span={8}>
             
             <h2>Gender</h2>  
              <p>Female</p>
             </Col> */}
          </Row> 

        

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            
            {/* <Button onClick={clearform} icon={<CloseOutlined />} className="cancelempbtn">
              Cancel
            </Button>
            <Button
              htmlType="submit"
              className="saveempbtn"
              icon={<CheckOutlined />}
            >
              Save
            </Button> */}
          </Form.Item>
        </div>
      {/* </Form> */}
    </div>


);
};
export default Profile