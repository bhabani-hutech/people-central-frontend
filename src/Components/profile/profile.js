import React, { useState } from "react";
import moment from "moment";
import axios from "axios";
import {
  Radio,
  Divider,
  Button,
  Row,
  Col,
  Form,
  Upload,
  message,
  Input,
  DatePicker,
  Select,
  // Table, Modal
} from "antd";
import {
  UploadOutlined,
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import "./Emponboarding.scss";
import "antd/dist/antd.css";

import {useDispatch, useSelector} from 'react-redux'
import {clientonboard} from '../../action/useraction'
// const props = {
//   name: "file",
//   action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
//   headers: {
//     authorization: "authorization-text",
//   },
//   onChange(info) {
//     if (info.file.status !== "uploading") {
//       console.log(info.file, info.fileList);
//     }
//     if (info.file.status === "done") {
//       message.success(`${info.file.name} file uploaded successfully`);
//     } else if (info.file.status === "error") {
//       message.error(`${info.file.name} file upload failed.`);
//     }
//   },
// };
const currency = ["rupiya", "lira"];


const paymentterm = ["Upon receipt", "Advance payment"];


const Profile = () => {
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
 
 
  const [employee, setEmployee] = useState({
    // image: "",
    // resume: "",
    empFirstName: "robert",
    empLastName: "",
    phnoeNumber: "",
    gender: "",
    address1: "",
    address2: "",
    dateOfBirth: "",
    empId: "",
    empEmail: "",
    joiningDate: "",
    relievingDate: "",
    managerEmail: "",
    experience: "",
    qualication: "",
    bankAccountNo: "",
    ifscCode: "",
    bankName: "",
    branchName: "",
    employeement: "",
    designation: {
      designationName: "",
    },
    roles: {
      roleName: "",
    },
    department: {
      departmentName: "",
    },
  });
  const dispatch = useDispatch()


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


  // const handelEmployee = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   console.log(value);
  //   setEmployee({
  //     [name]: value,
  //   });
  // };
 

  const [value, setValue] = React.useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <div>
      {/* <Form
        form={form}
        // colon={false}
        // requiredMark={false}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      > */}

         
        


        <div className="user_details">
          <div className="tab2_header">
            <div className="tab2_heading">Personal Info :</div>

            {/* <div className="tab2_subheading">
              <span className="span_heading">*</span>&nbsp;indicates mandatory
              fields
            </div> */}
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