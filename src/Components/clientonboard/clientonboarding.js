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


const paymentterm = ["Custom", "Upon receipt", "Advance payment"];





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
 




const handelEmployeement = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  // console.log(value);
  setEmployee({
    [name]: value,
  });
};
  console.log(employee);


  const onFinish = (values) => {
    console.log("Success:", values);
    const d = new Date();
    // const Jdate = moment(new Date(values.joiningDate));
    // values.joiningDate=Jdate.format("DD/MM/YYYY");
    // console.log(values.joiningDate);
 
    const employeeDetails = {
      empFirstName: values.empFirstName,
      empLastName: values.empLastName,
      phnoeNumber: values.phnoeNumber,
      gender: values.gender,
      address1: values.address1,
      address2: values.address2,
      dateOfBirth: values.dateOfBirth,
      // image: values.image,
      // resume: values.resume,
      empId: values.empId,
      empEmail: values.empEmail,
      joiningDate: d.toLocaleDateString(values.joiningDate._d),
      relievingDate: values.relievingDate,
      managerEmail: values.managerEmail,
      experience: values.experience,
      qualication: values.qualication,
      bankAccountNo: values.bankAccountNo,
      bankName: values.bankName,
      branchName: values.branchName,
      ifscCode: values.ifscCode,
      employeement: values.employeement,
      designation: {
        designationName: values.designationName,
      },
      roles: {
        roleName: values.roleName,
      },
      department: {
        departmentName: values.departmentName,
      },
    };
     
    axios
      .post(
        "https://hutechpayrollapp.azurewebsites.net/application/addEmployee",
        { employeeDetails },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          },
        }
      )
      .then((res) => {
        console.log(res);
        
      })
      .catch((err) => {
        console.log(err);
      });
    
    // console.log(employee);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      form.resetFields();
    }, 3000);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handelEmployee = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(value);
    setEmployee({
      [name]: value,
    });
  };
 

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
                onChange={handelEmployee}
                rules={[
                  {
                    required: true,
                    message: "Please input customer name!",
                  },
                ]}
              >
                {/* <div className="wrapasterik">
                  <span className="asterik">*</span> */}
                <Input placeholder="currency" />
                {/* </div> */}
              </Form.Item>

              <Form.Item
                label="Website"
                name="website"
                onChange={handelEmployee}
                rules={[
                  {
                    required: true,
                    message: "Please input customer name!",
                  },
                ]}
              >
                {/* <div className="wrapasterik">
                  <span className="asterik">*</span> */}
                <Input placeholder="website" />
                {/* </div> */}
              </Form.Item>

              <Form.Item
                  name="Currency"
                  onChange={handelEmployee}
                  label="currency"
                  
                >
                  <Select
                    placeholder="Select Designation"
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
                onChange={handelEmployee}
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
                  onChange={handelEmployee}
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
                onChange={handelEmployee}
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
                onChange={handelEmployee}
              >
                {/* <div className="wrapasterik">
                  <span className="asterik"> &nbsp;&nbsp;</span> */}
                <Input placeholder="Address line 2" />
                {/* </div> */}
              </Form.Item>
              <Form.Item
                label="GSTN number"
                name="gstn"
                onChange={handelEmployee}
              >
                {/* <div className="wrapasterik">
                  <span className="asterik"> &nbsp;&nbsp;</span> */}
                <Input placeholder="GSTN number" />
                {/* </div> */}
              </Form.Item>
              <Form.Item
                label="CIN number"
                name="cin"
                onChange={handelEmployee}
              >
                {/* <div className="wrapasterik">
                  <span className="asterik"> &nbsp;&nbsp;</span> */}
                <Input placeholder="CIN number" />
                {/* </div> */}
              </Form.Item>
              <Form.Item
                  name="paymentterm"
                  onChange={handelEmployee}
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
            <Button className="cancelempbtn" icon={<CloseOutlined />}>
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