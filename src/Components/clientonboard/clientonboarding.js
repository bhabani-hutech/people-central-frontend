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
const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
const currency = ["rupiya", "lira"];


const paymentterm = ["Upon receipt", "Advance payment"];


const Clientonboarding = () => {
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const [employee, setEmployee] = useState({
    // image: "",
    // resume: "",
    empFirstName: "",
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


  const clientcreate = useSelector(state => state.clientcreate)
  
  let {loading:clientloading, client, success, error} = clientcreate




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
    let website = values.website
    let urlcheck = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    if(!website.match(urlcheck)){
         alert('wrong url')
    }

    else {
      
      let client = {
       customerName:values.customername,
       website:values.website,
       
       
       email:values.empEmail,
       addressLine1:values.address1,



       addressLine2:values.address2,
       phoneNumber:values.phnoeNumber,
       gSTNumber:values.gstn,
       cIN:values.cin,
       paymentTerms:values.paymentterm,
       
       currency:values.Currency
      }
     
      dispatch(clientonboard(client))     
      if(success){
        
        alert('client onboarded')
      }
        }
    console.log(website)
    form.resetFields();
    
    
    
    
  };

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
      <Form
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
      >
        <div className="user_details">
          <div className="tab2_header">
            <div className="tab2_heading">Client onboarding :</div>

            <div className="tab2_subheading">
              <span className="span_heading">*</span>&nbsp;indicates mandatory
              fields
            </div>
          </div>
          <Divider></Divider>
          <Row justify="start">
            <Col span={12}>
              <Form.Item
                label="Customer Name"
                name="customername"
                
                rules={[
                  {
                    required: true,
                    message: "Please input customer name!",
                  },
                ]}
              >
                {/* <div className="wrapasterik">
                  <span className="asterik">*</span> */}
                
                
                
                <Input placeholder="Customer name" />
                {/* </div> */}
              </Form.Item>

              <Form.Item
                label="Website"
                name="website"
                
                rules={[
                  {
                    required: true,
                    message: "Please input customer name!",
                  },
                ]}
              >
                {/* <div className="wrapasterik">
                  <span className="asterik">*</span> */}
                <Input placeholder="Website" />
                {/* </div> */}
              </Form.Item>

              <Form.Item
                  name="Currency"
                
                  label="Currency"
                  
                >
                  <Select
                    placeholder="Select currency"
                    className="empdropdown"
                  >
                    {currency.map((fr, index) => {
                      return (
                        <Select.Option key={index} value={fr}>
                          {fr}
                        </Select.Option>
                      );
                    })}
                  </Select>
                </Form.Item>
  
              

              <Form.Item
                name="phnoeNumber"
                
                label="Phone Number"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                {/* <div className="wrapasterik">
                  <span className="asterik">*</span> */}
                <Input placeholder="Phone Number" />
                {/* </div> */}
              </Form.Item>
              <Form.Item
                  name="empEmail"
                  
                  label="Email Address"
                  rules={[
                    {
                      type: "email",
                      required: true,
                      message: "Please input your Email Address!",
                    },
                  ]}
                >
                  {/* <div className="wrapasterik">
                    <span className="asterik">*</span> */}
                  <Input placeholder="Email Address" />
                  {/* </div> */}
                </Form.Item>
              
            </Col>
            <Col span={12}>
              <Form.Item
                label="Address line 1"
                name="address1"
                
                rules={[
                  {
                    required: true,
                    message: "Please input address!",
                  },
                ]}
              >
                {/* <div className="wrapasterik">
                  <span className="asterik">*</span> */}
                <Input placeholder="Address line 1" />
                {/* </div> */}
              </Form.Item>
              <Form.Item
                label="Address line 2"
                name="address2"
              >
                {/* <div className="wrapasterik">
                  <span className="asterik"> &nbsp;&nbsp;</span> */}
                <Input placeholder="Address line 2" />
                {/* </div> */}
              </Form.Item>
              <Form.Item
                label="GSTN Number"
                name="gstn"
              
              >
                {/* <div className="wrapasterik">
                  <span className="asterik"> &nbsp;&nbsp;</span> */}
                <Input placeholder="GSTN Number" />
                {/* </div> */}
              </Form.Item>
              <Form.Item
                label="CIN Number"
                name="cin"
                
              >
                {/* <div className="wrapasterik">
                  <span className="asterik"> &nbsp;&nbsp;</span> */}
                <Input placeholder="CIN number" />
                {/* </div> */}
              </Form.Item>
              <Form.Item
                  name="paymentterm"
              
                  label="Payment term"
                  rules={[
                    {
                      required: true,
                      message: "enter payment term",
                    },
                  ]}
                >
                  <Select
                    placeholder="Select payment term"
                    className="empdropdown"
                  >
                    {paymentterm.map((fr, index) => {
                      return (
                        <Select.Option key={index} value={fr}>
                          {fr}
                        </Select.Option>
                      );
                    })}
                  </Select>
                </Form.Item>
            
            </Col>
          </Row>
         

        

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            
            <Button onClick={clearform} icon={<CloseOutlined />} className="cancelempbtn">
              Cancel
            </Button>
            <Button
              htmlType="submit"
              className="saveempbtn"
              icon={<CheckOutlined />}
            >
              Save
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>


);
};
export default Clientonboarding