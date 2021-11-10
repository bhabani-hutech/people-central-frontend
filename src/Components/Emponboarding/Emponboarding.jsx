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
  Input,
  DatePicker,
  Select,
  message,
} from "antd";
import {
  UploadOutlined,
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import "./Emponboarding.scss";
import "antd/dist/antd.css";


const Imageprops = {
  action: "//jsonplaceholder.typicode.com/posts/",
  onChange({ file, fileList }) {
    if (file.status !== "uploading") {
      console.log(file, fileList);
    }
  },
};
// const Resumeprops = {
//   action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
//   onChange({ file, fileList }) {
//     if (file.status !== "uploading") {
//       console.log(file, fileList);
//     }
//   },
// };

const Resumeprops = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const emptype = ["Part Time", "Full Time", "Contract", "Intern"];
const Department = ["Default", "Marketing", "finance", "HR"];
const permission = ["Admin", "Employee", "Manager"];
const Designation = [
  "HRBPA",
  "Business analyst Level",
  "Developer",
  "Junior Developer",
  "Senior Developer",
];

const Emponboarding = () => {
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  // const [fileUpload, setFileupload] = useState({
  //   selectedFile: null,
  //   selectedFileList: [],
  // });
  // const onChangefile = (info) => {
  //   const nextState = {};
  //   switch (info.file.status) {
  //     case "uploading":
  //       nextState.selectedFileList = [info.file];
  //       break;
  //     case "done":
  //       nextState.selectedFile = info.file;
  //       nextState.selectedFileList = [info.file];
  //       break;

  //     default:
  //       // error or removed
  //       nextState.selectedFile = null;
  //       nextState.selectedFileList = [];
  //   }
  //   setFileupload(() => nextState);
  // };

  // const [employee, setEmployee] = useState({
  //   // image: "",
  //   // resume: "",
  //   empFirstName: "",
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

  // const handelEmployeement = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   // console.log(value);
  //   setEmployee({
  //     [name]: value,
  //   });
  // };
  // console.log(employee);

  //  const d = new Date();
  //  const Jdate = d.toLocaleDateString(values.joiningDate._d);
  const onFinish = (values) => {
    console.log("Success:", values);

    const Jdate = moment(new Date(values.joiningDate._d));
    const Rdate = moment(new Date(values.relievingDate._d));
    const Bdate = moment(new Date(values.dateOfBirth._d));
    values.joiningDate = Jdate.format("DD-MM-YYYY");
    values.relievingDate = Rdate.format("DD-MM-YYYY");
    values.dateOfBirth = Bdate.format("DD-MM-YYYY");
    console.log(values.joiningDate);
    //  const exp = parseInt(values.experience);
    const employeeDetails = {
      empFirstName: values.empFirstName,
      empLastName: values.empLastName,
      phnoeNumber: values.phnoeNumber,
      gender: values.gender,
      address1: values.address1,
      address2: values.address2,
      dateOfBirth: values.dateOfBirth,
      empId: values.empId,
      empEmail: values.empEmail,
      joiningDate: values.joiningDate,
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
        employeeDetails,
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    const empfiles = {
      employee: {
        empId: values.empId,
      },
      image: values.image,
      resume: values.resume,
    };

    axios
      .post(
        "https://hutechpayrollapp.azurewebsites.net/application/addMultipartfile",
        empfiles,
        {
          headers: {
            // "Accept": "application/json", ":":"multipart/form-data"
            // "Content-Type": "application/json",":":
            "Content-Type": "multipart/mixed",
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

  const [value, setValue] = React.useState(1);

  const onChange = (e) => {
    console.log(e);
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <div>
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        // autoComplete="off"
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
                name="empFirstName"
                // onChange={handelEmployee}
                rules={[
                  {
                    required: true,
                    message: "Please input first name!",
                  },
                ]}
              >
                {/* <div className="wrapasterik">
                  <span className="asterik">*</span> */}
                <Input placeholder="First Name" />
                {/* </div> */}
              </Form.Item>

              <Form.Item
                label="Last Name"
                name="empLastName"
                // onChange={handelEmployee}
                rules={[
                  {
                    required: true,
                    message: "Please input first name!",
                  },
                ]}
              >
                {/* <div className="wrapasterik">
                  <span className="asterik">*</span> */}
                <Input placeholder="Last Name" />
                {/* </div> */}
              </Form.Item>

              <Form.Item
                name="phnoeNumber"
                // onChange={handelEmployee}
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
                label="Gender"
                name="gender"
                // onChange={handelEmployee}
                rules={[
                  {
                    required: true,
                    message: "Please input gender!",
                  },
                ]}
              >
                {/* <div className="wrapasterik">
                  <span className="asterik">*</span> */}
                <Radio.Group onChange={onChange} value={value}>
                  <Radio value="Male">Male</Radio>
                  <Radio value="Female">Female</Radio>
                  <Radio value="Others">Others</Radio>
                </Radio.Group>
                {/* </div> */}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Address line 1"
                name="address1"
                // onChange={handelEmployee}
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
                // onChange={handelEmployee}
              >
                {/* <div className="wrapasterik">
                  <span className="asterik"> &nbsp;&nbsp;</span> */}
                <Input placeholder="Address line 2" />
                {/* </div> */}
              </Form.Item>

              <Form.Item
                name="dateOfBirth"
                // onChange={handelEmployee}
                label="Date of Birth"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <DatePicker
                  className="datepicker"
                  placeholder="DD/MM/YYYY"
                  // style={{ width: "100%" }}
                />
              </Form.Item>

              <Form.Item label="Image" name="image">
                {/* <div className="wrapasterik">
                  <span className="asterik">*</span> */}
                {/* <Upload {...props}>
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload> */}

                <Upload {...Imageprops}>
                  <Button icon={<UploadOutlined />} style={{ width: "120%" }}>
                    Choose a file or Drag an image
                  </Button>
                </Upload>
                {/* </div> */}
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
                  name="empId"
                  // onChange={handelEmployeement}
                  rules={[
                    {
                      required: true,
                      message: "Please input your Employee ID!",
                    },
                  ]}
                >
                  {/* <div className="wrapasterik">
                    <span className="asterik">*</span> */}
                  <Input placeholder="Employee ID" />
                  {/* </div> */}
                </Form.Item>

                <Form.Item
                  name="empEmail"
                  // onChange={handelEmployee}
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

                <Form.Item
                  label="Date of joining"
                  name="joiningDate"
                  // onChange={handelEmployee}
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <DatePicker
                    className="datepicker"
                    placeholder="DD/MM/YYYY"
                    // style={{ width: "100%" }}
                  />
                </Form.Item>
                <Form.Item
                  name="employeement"
                  // onChange={handelEmployee}
                  label="Employment Type"
                  rules={[
                    {
                      required: true,
                      message: "Missing Employeement",
                    },
                  ]}
                >
                  <Select
                    placeholder="Select Employment Type"
                    className="empdropdown"
                  >
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
                  name="designationName"
                  // onChange={handelEmployee}
                  label="Designation"
                  rules={[
                    {
                      required: true,
                      message: "Missing Designation Name",
                    },
                  ]}
                >
                  <Select
                    placeholder="Select Designation"
                    className="empdropdown"
                  >
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
                  name="departmentName"
                  // onChange={handelEmployee}
                  label="Department"
                  rules={[
                    {
                      required: true,
                      message: "Missing Department Name",
                    },
                  ]}
                >
                  <Select
                    placeholder="Select Department"
                    className="empdropdown"
                  >
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
                <Form.Item
                  label="Experienece"
                  name="experience"
                  // onChange={handelEmployeement}
                >
                  {/* <div className="wrapasterik">
                    <span className="asterik"> &nbsp;&nbsp;</span> */}
                  {/* <Input placeholder="Experienece " /> */}
                  <Input
                    placeholder="Experienece "
                    // onChange={onChange}
                  />
                  {/* </div> */}
                </Form.Item>

                <Form.Item
                  label="Highest Qualification"
                  name="qualication"
                  // onChange={handelEmployee}
                >
                  {/* <div className="wrapasterik">
                    <span className="asterik"> &nbsp;&nbsp;</span> */}
                  <Input placeholder="Highest Academic Qualification" />
                  {/* </div> */}
                </Form.Item>

                <Form.Item
                  label="Exit Date"
                  name="relievingDate"
                  // onChange={handelEmployee}
                >
                  <DatePicker
                    className="datepicker"
                    placeholder="DD/MM/YYYY"
                    // style={{ width: "100%" }}
                  />
                </Form.Item>

                <Form.Item
                  name="managerEmail"
                  // onChange={handelEmployee}
                  label="Manager/Supervisor"
                  rules={[
                    {
                      type: "email",
                      required: true,
                      message: "Please input Manager's Email Address!",
                    },
                  ]}
                >
                  {/* <div className="wrapasterik">
                    <span className="asterik">*</span> */}
                  <Input placeholder="manager@gmail.com" />
                  {/* </div> */}
                </Form.Item>

                <Form.Item
                  name="roleName"
                  // onChange={handelEmployee}
                  label="Permission Level"
                  rules={[
                    {
                      required: true,
                      message: "Missing Permission Level",
                    },
                  ]}
                >
                  <Select
                    placeholder="Select Permission"
                    className="empdropdown"
                    style={{ marginLeft: "7%" }}
                  >
                    {permission.map((fr, index) => {
                      return (
                        <Select.Option key={index} value={fr}>
                          {fr}
                        </Select.Option>
                      );
                    })}
                  </Select>
                </Form.Item>

                <Form.Item
                  label="Resume"
                  name="resume"
                  // onChange={handelEmployee}
                >
                  {/* <div className="wrapasterik">
                    <span className="asterik"> &nbsp;&nbsp;</span> */}
                  <Upload {...Resumeprops}>
                    <Button icon={<UploadOutlined />} style={{ width: "110%" }}>
                      Choose a file or Drag an resume
                    </Button>
                  </Upload>
                  {/* <Upload
                    fileList={fileUpload.selectedFileList}
                    customRequest={dummyRequest}
                    onChange={onChangefile}
                  >
                    <Button icon={<UploadOutlined />} style={{ width: "110%" }}>
                      Choose a file or Drag an resume
                    </Button>
                  </Upload> */}

                  {/* </div> */}
                </Form.Item>
              </Col>
            </Row>
          </div>

          <div className="bank_details">
            <div className="tab2_header">
              <div className="tab2_heading">Bank Details :</div>
            </div>
            <Divider></Divider>
            <Row>
              <Col span={12}>
                <Form.Item
                  label="Bank Name"
                  name="bankName"
                  // onChange={handelEmployee}
                  rules={[
                    {
                      required: true,
                      message: "Please input your Bank Name!",
                    },
                  ]}
                >
                  {/* <div className="wrapasterik">
                    <span className="asterik">*</span> */}
                  <Input placeholder="Bank Name" />
                  {/* </div> */}
                </Form.Item>

                <Form.Item
                  // value={employee.branchName}
                  name="branchName"
                  // onChange={handelEmployee}
                  label="Branch Name"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Branch Name !",
                    },
                  ]}
                >
                  {/* <div className="wrapasterik">
                    <span className="asterik">*</span> */}
                  <Input placeholder="Branch Name" />
                  {/* </div> */}
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  label="Bank Account No."
                  name="bankAccountNo"
                  // onChange={handelEmployee}
                  rules={[
                    {
                      required: true,
                      message: "Please input your Bank Account No!",
                    },
                  ]}
                >
                  {/* <div className="wrapasterik">
                    <span className="asterik">*</span> */}
                  <Input placeholder="Bank Account No." />
                  {/* </div> */}
                </Form.Item>

                <Form.Item
                  label="IFSC Code"
                  name="ifscCode"
                  // onChange={handelEmployee}
                  rules={[
                    {
                      required: true,
                      message: "Please input your IFSC Code!",
                    },
                  ]}
                >
                  {/* <div className="wrapasterik">
                    <span className="asterik">*</span> */}
                  <Input placeholder="IFSC Code" />
                  {/* </div> */}
                </Form.Item>
              </Col>
            </Row>
          </div>

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

export default Emponboarding;
