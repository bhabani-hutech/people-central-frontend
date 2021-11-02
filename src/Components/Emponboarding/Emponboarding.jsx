import React from "react";
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
} from "antd";
import {
  UploadOutlined,
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import "./Emponboarding.scss";
import "antd/dist/antd.css";
import axios from "axios";

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

const emptype = ["Part Time", "Full Time", "Contract", "Intern"];
// const places = ["Bengaluru", "Chennai"];
const Department = ["Default", "Marketing", "Finance", "HR"];
const permission = ["Admin", "Employee", "Manager"];
const Designation = [
  "HRBP",
  "Business analyst Level",
  "Developer",
  "Junior Developer",
  "Senior Developer",
];

const Emponboarding = () => {
  let [form] = Form.useForm()
  
  
  const onFinish = (values) => {
    console.log("Success:", values);
    //  axios.post('/',{})
    // form.resetFields().then((=>{})).catch(()=>{

    // })     

  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
   

  let handleclear = ()=>{

    form.resetFields()     
  }

  const [value, setValue] = React.useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <div>
      <Form
        requiredMark={false}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        form={form}
      >
        <div className="user_details">
          <div className="tab2_header">
            <div className="tab2_heading">User Details :</div>

            <div className="tab2_subheading">
              <span className="span_heading">*</span>&nbsp;indicates mandatory
              fields
            </div>
          </div>
          <Divider></Divider>
          <Row justify="start">
            <Col span={12}>
              <Form.Item
                label="First Name"
                name="firstname"
                rules={[
                  {
                    required: true,
                    message: "Please input first name!",
                  },
                ]}
              >
                <div className="wrapasterik">
                  <span className="asterik">*</span>
                  <Input placeholder="First Name" />
                </div>
              </Form.Item>

              <Form.Item
                label="Last Name"
                name="lastname"
                rules={[
                  {
                    required: true,
                    message: "Please input first name!",
                  },
                ]}
              >
                <div className="wrapasterik">
                  <span className="asterik">*</span>
                  <Input placeholder="Last Name" />
                </div>
              </Form.Item>

              <Form.Item
                name="phone"
                label="Phone Number"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <div className="wrapasterik">
                  <span className="asterik">*</span>
                  <Input placeholder="Phone Number" />
                </div>
              </Form.Item>

              <Form.Item
                label="Gender"
                name="gender"
                rules={[
                  {
                    required: true,
                    message: "Please input gender!",
                  },
                ]}
              >
                <div className="wrapasterik">
                  <span className="asterik">*</span>
                  <Radio.Group onChange={onChange} value={value}>
                    <Radio value={1}>Male</Radio>
                    <Radio value={2}>Female</Radio>
                    <Radio value={3}>Others</Radio>
                  </Radio.Group>
                </div>
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
                <div className="wrapasterik">
                  <span className="asterik">*</span>
                  <Input placeholder="Address line 1" />
                </div>
              </Form.Item>

              <Form.Item label="Address line 2" name="address2">
                <div className="wrapasterik">
                  <span className="asterik"> &nbsp;&nbsp;</span>
                  <Input placeholder="Address line 2" />
                </div>
              </Form.Item>

              <Form.Item
                name="DOB"
                label="Date of Birth"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
               
                <DatePicker
                  placeholder="DD/MM/YYYY"
                  style={{ width: "100%" }}
                />
              
              </Form.Item>

              <Form.Item label="Image" name="image">
                <div className="wrapasterik">
                  <span className="asterik">*</span>
                  <Upload {...props}>
                    <Button icon={<UploadOutlined />} style={{ width: "120%" }}>
                      Choose a file or Drag an image
                    </Button>
                  </Upload>
                </div>
              </Form.Item>
            </Col>
          </Row>
          <div className="employment_details">
            <div className="tab2_header">
              <div className="tab2_heading">Employment Details :</div>
            </div>
            <Divider></Divider>
            <Row>
              <Col span={12}>
                <Form.Item
                  label="Employee ID"
                  name="empid"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Employee ID!",
                    },
                  ]}
                >
                  <div className="wrapasterik">
                    <span className="asterik">*</span>
                    <Input placeholder="Employee ID" />
                  </div>
                </Form.Item>

                <Form.Item
                  name="empemailid"
                  label="Email Address"
                  rules={[
                    {
                      type: "email",
                      required: true,
                      message: "Please input your Email Address!",
                    },
                  ]}
                >
                  <div className="wrapasterik">
                    <span className="asterik">*</span>
                    <Input placeholder="Email Address" />
                  </div>
                </Form.Item>

                <Form.Item
                  name="DOJ"
                  label="Date of joining"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                 
                  <DatePicker
                    placeholder="DD/MM/YYYY"
                    style={{ width: "100%" }}
                  />
                 
                </Form.Item>
                <Form.Item
                  name="Employment"
                  label="Employment Type"
                  rules={[
                    {
                      required: true,
                      message: "Missing Employment",
                    },
                  ]}
                >
                  <Select placeholder="Select Employment Type">
                    {emptype.map((fr, index) => {
                      return (
                        <Select.Option key={index} value={fr}>
                          {fr}
                        </Select.Option>
                      );
                    })}
                  </Select>
                </Form.Item>

                <Form.Item
                  name="designation"
                  label="Designation"
                  rules={[
                    {
                      required: true,
                      message: "Missing Designation",
                    },
                  ]}
                >
                  <Select placeholder="Select Designation">
                    {Designation.map((fr, index) => {
                      return (
                        <Select.Option key={index} value={fr}>
                          {fr}
                        </Select.Option>
                      );
                    })}
                  </Select>
                </Form.Item>

                <Form.Item
                  name="department"
                  label="Department"
                  rules={[
                    {
                      required: true,
                      message: "Missing Department",
                    },
                  ]}
                >
                  <Select placeholder="Select Department">
                    {Department.map((fr, index) => {
                      return (
                        <Select.Option key={index} value={fr}>
                          {fr}
                        </Select.Option>
                      );
                    })}
                  </Select>
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item label="Experienece" name="experienece">
                  <div className="wrapasterik">
                    <span className="asterik"> &nbsp;&nbsp;</span>
                    <Input placeholder="Experienece " />
                  </div>
                </Form.Item>

                <Form.Item label="Highest Qualification" name="qualification">
                  <div className="wrapasterik">
                    <span className="asterik"> &nbsp;&nbsp;</span>
                    <Input placeholder="Highest Academic Qualification" />
                  </div>
                </Form.Item>

                <Form.Item label="Exit Date" name="DOE">
                 
                  <DatePicker
                    placeholder="DD/MM/YYYY"
                    style={{ width: "100%" }}
                  />
                 
                </Form.Item>

                <Form.Item
                  name="manageremailid"
                  label="Manager/Supervisor"
                  rules={[
                    {
                      type: "email",
                      required: true,
                      message: "Please input Manager's Email Address!",
                    },
                  ]}
                >
                  <div className="wrapasterik">
                    <span className="asterik">*</span>
                    <Input placeholder="manager@gmail.com" />
                  </div>
                </Form.Item>

                <Form.Item
                  name="permission"
                  label="Permission Level"
                  rules={[
                    {
                      required: true,
                      message: "Missing Permission",
                    },
                  ]}
                >
                  <Select placeholder="Select Permission">
                    {permission.map((fr, index) => {
                      return (
                        <Select.Option key={index} value={fr}>
                          {fr}
                        </Select.Option>
                      );
                    })}
                  </Select>
                </Form.Item>
               

                <Form.Item label="Resume" name="resume">
                  <div className="wrapasterik">
                    <span className="asterik"> &nbsp;&nbsp;</span>
                    <Upload {...props}>
                      <Button
                        icon={<UploadOutlined />}
                        style={{ width: "120%" }}
                      >
                        Choose a file or Drag an image
                      </Button>
                    </Upload>
                  </div>
                </Form.Item>
              </Col>
            </Row>
          </div>
         
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button onClick={handleclear} icon={<CloseOutlined />} className="cancelbtn">
              Cancel
            </Button>
            <Button
              htmlType="submit"
              className="savebtn"
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



export default Emponboarding;