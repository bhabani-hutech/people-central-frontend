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

const emptype = ["Part Time", "Full Time", "Contract"];
const Department = ["Default", "Marketing", "Development"];
const permission = ["Admin", "Employee", "Manager"];
const Designation = [
  "HRBPA",
  "Human Resources",
  "Developer",
  "Junior Developer",
  "Senior Developer",
];
const bloodGrouptype = ["A+","A-","B+","B-","AB+","AB-","O+","O-"]

const Emponboarding = () => {
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const [fileUpload, setFileupload] = useState({
    selectedFile: null,
    selectedFileList: [],
  });
  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };

  const onChangefile = (info) => {
    const nextState = {};
    switch (info.file.status) {
      case "uploading":
        nextState.selectedFileList = [info.file];

        break;
      case "done":
        nextState.selectedFile = info.file;
        nextState.selectedFileList = [info.file];
        break;

      default:
        // error or removed
        nextState.selectedFile = null;
        nextState.selectedFileList = [];
    }
    setFileupload(() => nextState);
  };

  const Imageprops = {
    name: "image",
    action: "//jsonplaceholder.typicode.com/posts/",

    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
        console.log(info.file, info.fileList);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    const formData = new FormData();
    // var reader = new FileReader();
    // var fileByteArray = [];
   
    // var array = new Uint32Array(values.image.file);
    // console.log("_+_array:", array); // the array is empty!

    // for (var i = 0; i < array.length; i++) {
    //   fileByteArray.push(array[i]);
    // }

   
    // formData.append("image", values.image.file);
    // formData.append("resume", values.resume.file);
    console.log(values.image.file);
    

     var array = new Uint32Array(values.image.file);
     console.log("_+_array:", array); // the array is empty!
     var binaryString = String.fromCharCode.apply(String, array);
     console.log("__binaryString:", binaryString);
    formData.append("image", array);




    var filearray = new Uint32Array(values.resume.file);
    console.log("_+_filearray:", filearray); // the array is empty!
    var binaryStringfile = String.fromCharCode.apply(String, filearray);
    console.log("__binaryStringfile:", binaryStringfile);
    formData.append("resume", filearray);

   
    const Jdate = moment(new Date(values.joiningDate._d));
    const Rdate = moment(new Date(values.relievingDate._d));
    const Bdate = moment(new Date(values.dateOfBirth._d));
    values.joiningDate = Jdate.format("DD-MM-YYYY");
    values.relievingDate = Rdate.format("DD-MM-YYYY");
    values.dateOfBirth = Bdate.format("DD-MM-YYYY");
    console.log(values.joiningDate);
    const employeeDetails = {
      empFirstName: values.empFirstName,
      empLastName: values.empLastName,
      phnoeNumber: values.phnoeNumber,
      gender: values.gender,
      address1: values.address1,
      address2: values.address2,
      dateOfBirth: values.dateOfBirth,
      empBloodGroup: values.empBloodGroup,
      martialStatus: values.martialStatus,
      anniversary: values.anniversary,
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
      pan: values.pan,
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


    axios
      .post(
        `https://hutechpayrollapp.azurewebsites.net/application/addMultipartfile/${values.empId}`,

        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
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
  };;;

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
        requiredMark={false}
        colon={false}
        // labelAlign="left"
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
                rules={[
                  {
                    required: true,
                    message: "Please input First name!",
                  },
                ]}
              >
                <Input placeholder="First Name" />
              </Form.Item>

              <Form.Item
                label="Last Name"
                name="empLastName"
                rules={[
                  {
                    required: true,
                    message: "Please input Last name!",
                  },
                ]}
              >
                <Input placeholder="Last Name" />
              </Form.Item>

              <Form.Item
                name="phnoeNumber"
                label="Phone Number"
                rules={[
                  {
                    required: true,
                    message: "Please input Phone number!",
                  },
                ]}
              >
                <Input placeholder="Phone Number" />
              </Form.Item>

              <Form.Item
                name="empBloodGroup"
                label="Blood Group"
                rules={[
                  {
                    required: true,
                    message: "Please input Blood Group!",
                  },
                ]}
              >
                <Select placeholder="Select Blood Group">
                  {bloodGrouptype.map((fr, index) => {
                    return (
                      <Select.Option key={index} value={fr}>
                        {fr}
                      </Select.Option>
                    );
                  })}
                </Select>
              </Form.Item>

              <Form.Item
                label="Gender"
                name="gender"
                rules={[
                  {
                    required: true,
                    message: "Please input Gender!",
                  },
                ]}
              >
                <Radio.Group onChange={onChange} value={value}>
                  <Radio value="Male">Male</Radio>
                  <Radio value="Female">Female</Radio>
                  <Radio value="Others">Others</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Address line 1"
                name="address1"
                rules={[
                  {
                    required: true,
                    message: "Please input Address 1!",
                  },
                ]}
              >
                <Input placeholder="Address line 1" />
              </Form.Item>

              <Form.Item label="Address line 2" name="address2">
                <Input placeholder="Address line 2" />
              </Form.Item>

              <Form.Item
                name="dateOfBirth"
                label="Date of Birth"
                rules={[
                  {
                    required: true,
                    message: "Please input Date of Birth!",
                  },
                ]}
              >
                <DatePicker
                  className="datepicker"
                  placeholder="DD/MM/YYYY"
                  style={{ width: "100%" }}
                />
              </Form.Item>

              <Form.Item
                label="Marital Status"
                name="martialStatus"
                rules={[
                  {
                    required: true,
                    message: "Please input Martial Status!",
                  },
                ]}
              >
                <Input placeholder="Martial Status" />
              </Form.Item>

              <Form.Item name="anniversary" label="Marriage Annivarsary">
                <DatePicker
                  className="datepicker"
                  placeholder="DD/MM/YYYY"
                  style={{ width: "100%" }}
                />
              </Form.Item>

              <Form.Item label="Image" name="image">
                <Upload
                  {...Imageprops}
                  // customRequest={uploadImage}
                  // onRemove={handleRemove}
                  // onChange={handleUpload}
                >
                  <Button icon={<UploadOutlined />} style={{ width: "100%" }}>
                    Choose a file or Drag an image
                  </Button>
                </Upload>
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
                  rules={[
                    {
                      required: true,
                      message: "Please input Employee ID!",
                    },
                  ]}
                >
                  <Input placeholder="Employee ID" />
                </Form.Item>

                <Form.Item
                  name="empEmail"
                  label="Email Address"
                  rules={[
                    {
                      type: "email",
                      required: true,
                      message: "Please input Email Address!",
                    },
                  ]}
                >
                  <Input placeholder="Email Address" />
                </Form.Item>

                <Form.Item label="Date of joining" name="joiningDate">
                  <DatePicker
                    style={{ width: "100%" }}
                    // className="datepicker"
                    placeholder="DD/MM/YYYY"
                  />
                </Form.Item>

                <Form.Item
                  name="employeement"
                  label="Employment Type"
                  rules={[
                    {
                      required: true,
                      message: "Please input Employeement",
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
                  name="designationName"
                  label="Designation"
                  rules={[
                    {
                      required: true,
                      message: "Please input Designation Name",
                    },
                  ]}
                >
                  <Select
                    placeholder="Select Designation"
                    // className="empdropdown"
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
                  label="Department"
                  rules={[
                    {
                      required: true,
                      message: "Please input Department Name",
                    },
                  ]}
                >
                  <Select
                    placeholder="Select Department"
                    // className="empdropdown"
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
                <Form.Item label="Experienece" name="experience">
                  <Input placeholder="Experienece " />
                </Form.Item>

                <Form.Item label="Highest Qualification" name="qualication">
                  <Input placeholder="Highest Academic Qualification" />
                </Form.Item>

                <Form.Item label="Exit Date" name="relievingDate">
                  <DatePicker
                    // className="datepicker"
                    style={{ width: "100%" }}
                    placeholder="DD/MM/YYYY"
                  />
                </Form.Item>

                <Form.Item
                  name="managerEmail"
                  label="Manager/Supervisor"
                  rules={[
                    {
                      type: "email",
                      required: true,
                      message: "Please input Manager's Email Address!",
                    },
                  ]}
                >
                  <Input placeholder="manager@gmail.com" />
                </Form.Item>

                <Form.Item
                  name="roleName"
                  label="Permission Level"
                  rules={[
                    {
                      required: true,
                      message: "Please input Permission Level",
                    },
                  ]}
                >
                  <Select
                    placeholder="Select Permission"
                    // className="empdropdown"
                    // style={{ marginLeft: "7%" }}
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
                  name="empSalary"
                  label="Salary"
                  rules={[
                    {
                      required: true,
                      message: "Please input Salary!",
                    },
                  ]}
                >
                  <Input placeholder="Salary" />
                </Form.Item>

                <Form.Item label="Resume" name="resume">
                  <Upload
                    fileList={fileUpload.selectedFileList}
                    customRequest={dummyRequest}
                    onChange={onChangefile}
                  >
                    <Button icon={<UploadOutlined />} style={{ width: "100%" }}>
                      Choose a file or Drag an resume
                    </Button>
                  </Upload>
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
                  rules={[
                    {
                      required: true,
                      message: "Please input Bank Name!",
                    },
                  ]}
                >
                  <Input placeholder="Bank Name" />
                </Form.Item>

                <Form.Item
                  name="branchName"
                  label="Branch Name"
                  rules={[
                    {
                      required: true,
                      message: "Please input Branch Name !",
                    },
                  ]}
                >
                  <Input placeholder="Branch Name" />
                </Form.Item>

                <Form.Item
                  label="PAN No."
                  name="pan"
                  rules={[
                    {
                      required: true,
                      message: "Please input PAN No!",
                    },
                  ]}
                >
                  <Input placeholder="PAN No." />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  label="IFSC Code"
                  name="ifscCode"
                  rules={[
                    {
                      required: true,
                      message: "Please input IFSC Code!",
                    },
                  ]}
                >
                  <Input placeholder="IFSC Code" />
                </Form.Item>
                <Form.Item
                  label="Bank Account No."
                  name="bankAccountNo"
                  rules={[
                    {
                      required: true,
                      message: "Please input Bank Account No!",
                    },
                  ]}
                >
                  <Input placeholder="Bank Account No." />
                </Form.Item>
              </Col>
            </Row>
          </div>

          {/* <Form.Item wrapperCol={{ offset: 8, span: 16 }}> */}
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
          {/* </Form.Item> */}
        </div>
      </Form>
    </div>
  );
};

export default Emponboarding;
