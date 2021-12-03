/* eslint-disable no-unused-vars */
import {
    CheckOutlined,
    CloseOutlined
} from "@ant-design/icons";
import {
    Button, Col, DatePicker, Divider, Form,
    Input, Row
} from "antd";
import "antd/dist/antd.css";
import React, { useState } from "react";
import "./Payslip.scss";

// import { useDispatch, useSelector } from "react-redux";
// import { clientonboard } from "../../action/useraction";

const { RangePicker } = DatePicker;
// const currency = ["rupiya", "lira"];

// const paymentterm = ["Upon receipt", "Advance payment"];

const Payslip = () => {
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

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

  // const dispatch = useDispatch();

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

  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = React.useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <div>
      <Form
        form={form}
        colon={false}
        requiredMark={false}
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
                label="Employee ID"
                name="empid"
                rules={[
                  {
                    required: true,
                    message: "Please input Employee ID",
                  },
                ]}
              >
                <Input placeholder="HT002" />
                {/* </div> */}
              </Form.Item>

              <Form.Item
                label="Consultant Name"
                name="consultant_name"
                rules={[
                  {
                    required: true,
                    message: "Please input Consultant Name",
                  },
                ]}
              >
                <Input placeholder="Consultant Name" />
              </Form.Item>
              <Form.Item
                label="Designation"
                name="designation"
                rules={[
                  {
                    required: true,
                    message: "Please input Designation Name",
                  },
                ]}
              >
                <Input placeholder="Designation Name" />
              </Form.Item>
              <Form.Item
                name="Employee Type"
                label="Employee Type"
                rules={[
                  {
                    required: true,
                    message: "Please input EMP Type!",
                  },
                ]}
              >
                <Input placeholder="EMP Type" />
              </Form.Item>

              {/* <Space direction="vertical" size={10}>
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
              </Space> */}
              <Form.Item
                name="department"
                label="Department"
                rules={[
                  {
                    required: true,
                    message: "Please input Department",
                  },
                ]}
              >
                <Input placeholder="Department" />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                label="No of Days in Month"
                name="no_day"
                rules={[
                  {
                    required: true,
                    message: "Please Input No of Day",
                  },
                ]}
              >
                <Input placeholder="No. of Day" />
              </Form.Item>
              <Form.Item
                name="doj"
                label="Date of Join"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <DatePicker
                  // className="datepicker"
                  placeholder="DD/MM/YYYY"
                  style={{ width: "100%" }}
                />
              </Form.Item>

              <Form.Item label="Working Day" name="working_day">
                <Input placeholder="Working Day" />
              </Form.Item>

              <Form.Item label="ESIC Number" name="esic_number">
                <Input placeholder="ESIC Number" />
              </Form.Item>
              <Form.Item label="Total Arrear Day" name="arrear">
                <Input placeholder="Arrear Day" />
              </Form.Item>
              <Form.Item label="Loss of Pay" name="lop">
                <Input placeholder="LOP" />
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
                <Input placeholder="Account number" />
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
                <Input placeholder="Bank name" />
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
                <Input placeholder="Branch name" />
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
