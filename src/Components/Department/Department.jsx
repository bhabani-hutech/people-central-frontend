import React, { useState } from "react";
import axios from "axios";
import { Row, Col, Divider, Table, Button, Modal, Form, Input } from "antd";
import "antd/dist/antd.css";
import "../Department/Department.scss";
import deleteimg from "../../assets/images/delete.png";
import edit from "../../assets/images/edit.png";
import { PlusOutlined, CheckOutlined, CloseOutlined } from "@ant-design/icons";
// import Adddepartment from "./Adddepartment";

function handleDepartmentEdit(checked) {
  console.log(`switch to ${checked}`);
}
function handleDepartmentdelete(checked) {
  console.log(`switch to ${checked}`);
}
const columns = [
  {
    title: "SL NO.",
    dataIndex: "key",
    key: "key",
  },
  {
    title: "Department ID",
    dataIndex: "deptid",
    key: "deptid",
  },
  {
    title: "Department Name",
    dataIndex: "deptname",
    key: "deptname",
  },

  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    render: (action) => (
      // action === true
      <>
        <span>
          <img
            alt="edit"
            src={edit}
            width="35px"
            height="36px"
            onClick={handleDepartmentEdit}
          />
        </span>
        <span style={{ marginLeft: "5%" }}>
          <img
            alt="delete"
            src={deleteimg}
            width="35px"
            height="36px"
            onClick={handleDepartmentdelete}
          />
        </span>
      </>
    ),
  },
];

const data = [
  {
    key: "1",
    deptid: "101",
    deptname: "Default",
  },
  {
    key: "2",
    deptid: "102",
    deptname:"Marketing",
  },
  {
    key: "3",
    deptid: "103",
    deptname: "Finance",
  },
];
const Department = () => {
   const [isModalVisible, setIsModalVisible] = useState(false);
  const [departmentId, setDepartmentId] = useState(null);
  const [department, setDepartment] = useState("");
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  
 const onFinish = (values) => {
   console.log("Success:", values);
   const { departmentId, department } = values; 
   axios
     .post(
       "https://hutechpayrollapp.azurewebsites.net/application/createDepartment",
       values,
       { headers: { "Content-Type": "application/json" } }
     )
     .then((res) => {
       console.log(res.data);
       setDepartment("");
     })
     .catch((err) => {
       console.log(err);
     });
   console.log(department);
   console.log(departmentId);
    console.log(typeof departmentId);


   setLoading(true);
   setTimeout(() => {
     setIsModalVisible(false);
     setLoading(false);
     form.resetFields();
   }, 1000);
   alert("Department Created successfully");
 };
 const onFinishFailed = (errorInfo) => {
   console.log("Failed:", errorInfo);
 };


  const handelDepartmentIdChange = (e) => {
  console.log(e);
  const name = e.target.name;
  console.log(name);
  const value = e.target.value;
  console.log(e.target.value);
  console.log(department);
  
    setDepartmentId({
      ...departmentId,
      [name]: value,
    });
};
const handelDepartmentChange = (e) => {
  console.log(e);
  const name = e.target.name;
  console.log(name);
  const value = e.target.value;
  console.log(e.target.value);
  console.log(department);
  setDepartment({
    ...department,
    [name]: value,
  });
  
};



  const showModal = () => {
   setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
     setIsModalVisible(false);
  };

  return (
    <div>
      <Row>
        <Col span={12}>
          {" "}
          <div className="departmentheader">Department</div>
        </Col>
        <Col span={12}>
          <Button
            className="adddepartmentbtn"
            icon={<PlusOutlined />}
            onClick={showModal}
          >
            Add Department
          </Button>
          <Modal
            title="Department"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
          >
            <Form
              form={form}
              // requiredMark={false}
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Department Id"
                value={departmentId}
                name="departmentId"
                onChange={handelDepartmentIdChange}
                rules={[
                  {
                    required: true,
                    message: "Please input Department Id!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Department Name"
                value={department}
                name="departmentName"
                onChange={handelDepartmentChange}
                rules={[
                  {
                    required: true,
                    message: "Please input Department!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Row>
                <Col span={19}>
                  <Form.Item>
                    <Button
                      className="cancelbtn"
                      key="back"
                      icon={<CloseOutlined />}
                      onClick={handleCancel}
                    >
                      Cancel
                    </Button>
                  </Form.Item>
                </Col>
                <Col span={5}>
                  <Form.Item>
                    <Button
                      htmlType="submit"
                      className="savebtn"
                      icon={<CheckOutlined />}
                    >
                      Save
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Modal>
        </Col>
      </Row>

      <Divider />
      <Table
        className="tablestyle"
        columns={columns}
        dataSource={data}
        scroll={{ x: 400 }}
      />
    </div>
  );
};

export default Department;



//  <Modal
//    visible={visible}
//    title="Department"
//    onOk={handleOk}
//    onCancel={handleCancel}
//    footer={[
//      <Button
//        className="cancelbtn"
//        key="back"
//        icon={<CloseOutlined />}
//        onClick={handleCancel}
//      >
//        Cancel
//      </Button>,
//      <Button
//        className="savebtn"
//        key="submit"
//        loading={loading}
//        icon={<CheckOutlined />}
//        onClick={handleOk}
//      >
//        Save
//      </Button>,
//    ]}
//  >
//    <Adddepartment />
//  </Modal>;