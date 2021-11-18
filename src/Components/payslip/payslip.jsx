/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import moment from "moment";
// import axios from "axios";
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
  Space,
  // Table, Modal
} from "antd";
import {
  UploadOutlined,
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import "./Payslip.scss";
import "antd/dist/antd.css";

import { useDispatch, useSelector } from "react-redux";
import { clientonboard } from "../../action/useraction";
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
const { RangePicker } = DatePicker;
const currency = ["rupiya", "lira"];

const paymentterm = ["Upon receipt", "Advance payment"];

const Payslip = () => {
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

  const dispatch = useDispatch();

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
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  let clearform = () => {
    form.resetFields();
  };

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
            <div className="tab2_heading">Employee detail: </div>

            <div className="tab2_subheading">
              <span className="span_heading">*</span>&nbsp;indicates mandatory
              fields
            </div>
          </div>
          <Divider></Divider>
          <Row justify="start">
            <Col span={12}>
              <Form.Item
                label="Employee id"
                name="empid"
                rules={[
                  {
                    required: true,
                    message: "Please input employee id",
                  },
                ]}
              >
                <Input placeholder="HT002" />
                {/* </div> */}
              </Form.Item>

              <Form.Item
                label="Consultant name"
                name="consultant_name"
                rules={[
                  {
                    required: true,
                    message: "Please input consultant name",
                  },
                ]}
              >
                {/* <div className="wrapasterik">
                  <span className="asterik">*</span> */}
                <Input placeholder="Consultant Name" />
                {/* </div> */}
              </Form.Item>
              <Form.Item
                label="Designation"
                name="designation"
                rules={[
                  {
                    required: true,
                    message: "Please input designation name",
                  },
                ]}
              >
                {/* <div className="wrapasterik">
                  <span className="asterik">*</span> */}
                <Input placeholder="Designation Name" />
                {/* </div> */}
              </Form.Item>
              <Form.Item
                name="Employee Type"
                label="Employee Type"
                rules={[
                  {
                    required: true,
                    message: "Please input your EMP type!",
                  },
                ]}
              >
                {/* <div className="wrapasterik">
                  <span className="asterik">*</span> */}
                <Input placeholder="EMP Type" />
                {/* </div> */}
              </Form.Item>
              {/*  */}
              <Space direction="vertical" size={10}>
                <RangePicker
                  ranges={{
                    Today: [moment(), moment()],
                    "This Month": [
                      moment().startOf("month"),
                      moment().endOf("month"),
                    ],
                  }}
                  onChange={onChange}
                />{" "}
              </Space>
              <Form.Item
                name="department"
                label="Department"
                rules={[
                  {
                    required: true,
                    message: "Please input your department",
                  },
                ]}
              >
                {/* <div className="wrapasterik">
                    <span className="asterik">*</span> */}
                <Input placeholder="department" />
                {/* </div> */}
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                label="No of days in month"
                name="no_day"
                rules={[
                  {
                    required: true,
                    message: "Please input no of day",
                  },
                ]}
              >
                {/* <div className="wrapasterik">
                  <span className="asterik">*</span> */}
                <Input placeholder="Address line 1" />
                {/* </div> */}
              </Form.Item>
              <Form.Item
                name="doj"
                label="Date of join"
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

              <Form.Item label="Working day" name="working_day">
                {/* <div className="wrapasterik">
                  <span className="asterik"> &nbsp;&nbsp;</span> */}
                <Input placeholder="" />
                {/* </div> */}
              </Form.Item>

              <Form.Item label="ESIC number" name="esic_number">
                {/* <div className="wrapasterik">
                  <span className="asterik"> &nbsp;&nbsp;</span> */}
                <Input placeholder="ESIC number" />
                {/* </div> */}
              </Form.Item>
              <Form.Item label="total Arrear day" name="arrear">
                {/* <div className="wrapasterik">
                  <span className="asterik"> &nbsp;&nbsp;</span> */}
                <Input placeholder="" />
                {/* </div> */}
              </Form.Item>
              <Form.Item label="Loss of pay" name="lop">
                {/* <div className="wrapasterik">
                  <span className="asterik"> &nbsp;&nbsp;</span> */}
                <Input placeholder="LOP" />
                {/* </div> */}
              </Form.Item>

              {/* <Form.Item
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
                </Form.Item> */}
            </Col>
          </Row>

          <div className="tab2_header">
            <div className="tab2_heading">Bank detail:</div>
          </div>
          <Divider></Divider>

          <Row justify="start">
            <Col span={12}>
              <Form.Item
                label="Account Number"
                name="account_number"
                rules={[
                  {
                    required: true,
                    message: "Please input your account number",
                  },
                ]}
              >
                {/* <div className="wrapasterik">
                  <span className="asterik">*</span> */}
                <Input placeholder="Account number" />
                {/* </div> */}
              </Form.Item>
              <Form.Item
                label="Bank Name"
                name="Bank name"
                rules={[
                  {
                    required: true,
                    message: "Please input your bank name",
                  },
                ]}
              >
                {/* <div className="wrapasterik">
                  <span className="asterik">*</span> */}
                <Input placeholder="Bank name" />
                {/* </div> */}
              </Form.Item>
              <Form.Item
                label="Branch Name"
                name="branch_name"
                rules={[
                  {
                    required: true,
                    message: "Please input your branch name",
                  },
                ]}
              >
                {/* <div className="wrapasterik">
                  <span className="asterik">*</span> */}
                <Input placeholder="Branch name" />
                {/* </div> */}
              </Form.Item>
            </Col>
            <Col span={12}></Col>
          </Row>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button
              onClick={clearform}
              icon={<CloseOutlined />}
              className="cancelempbtn"
            >
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
export default Payslip;
