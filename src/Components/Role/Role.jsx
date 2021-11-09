import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Row,
  Col,
  Divider,
  Table,
  Button,
  Modal,
  Form,
  Input,
 
} from "antd";
import "antd/dist/antd.css";
import "../Role/Role.scss";
import deleteimg from "../../assets/images/delete.png";
import edit from "../../assets/images/edit.png";
import { CheckOutlined, CloseOutlined, PlusOutlined } from "@ant-design/icons";

function handleRoleEdit(checked) {
  console.log(`switch to ${checked}`);
}
function handleRoledelete(checked) {
  console.log(`switch to ${checked}`);
}
const columns = [
  {
    title: "SL NO.",
    dataIndex: "key",
    key: "key",
  },
  {
    title: "Role ID",
    dataIndex: "viewRoleId",
    key: "roleid",
  },
  {
    title: "Role Name",
    dataIndex: "viewRoleName",
    key: "rolename",
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
            onClick={handleRoleEdit}
          />
        </span>
        <span style={{ marginLeft: "5%" }}>
          <img
            alt="delete"
            src={deleteimg}
            width="35px"
            height="36px"
            onClick={handleRoledelete}
          />
        </span>
      </>
    ),
  },
];

// const data = [
//   {
//     key: "1",
//     roleid: "201",
//     rolename: "Fullstack Devloper",
//   },
//   {
//     key: "2",
//     roleid: "202",
//     rolename: "Human Resource",
//   },
//   {
//     key: "3",
//     roleid: "203",
//     rolename: "Frontend Devloper",
//   },
// ];
const Role = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [rolename, setRolename] = useState("");
  const [roleId, setRoleId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [viewRoleData, setViewRoleData] = useState([
    {
      viewRoleId: "",
      viewRoleName: "",
    },
  ]);
  const [form] = Form.useForm();

useEffect(() => {
  axios
    .get("https://hutechpayrollapp.azurewebsites.net/application/viewRole")

    .then((response) => {
      console.log("response", response);
      const RoleData = response.data.map((item, i) => ({
        key: i + 1,
        viewRoleId: item.roleId,
        viewRoleName: item.roleName,
      }));

      setViewRoleData(RoleData);
    })
    .catch((err) => {
      console.log(err);
    });
}, []);




  const onFinish = (values) => {
    console.log("Success:", values);
    axios
      .post(
        "https://hutechpayrollapp.azurewebsites.net/application/createRole",
        values,
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => {
        console.log(res.data);
        setRolename("");
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(rolename);
    
    setLoading(true);
    setTimeout(() => {
      setIsModalVisible(false);
      setLoading(false);
      form.resetFields();
    }, 1000);
   alert("Role Created successfully");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handelRoleIdChange = (e) => {
    console.log(e);
    const name = e.target.name;
    console.log(name);
    const value = e.target.value;
    console.log(e.target.value);
    console.log(rolename);
    setRoleId({
      ...roleId,
      [name]: value,
    });
  };

  const handelRoleChange = (e) => {
    console.log(e);
    const name = e.target.name;
    console.log(name);
    const value = e.target.value;
    console.log(e.target.value);
    console.log(rolename);
    setRolename({
      ...rolename,
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
          <div className="roleheader">Role</div>
        </Col>
        <Col span={12}>
          <Button
            className="addrolebtn"
            icon={<PlusOutlined />}
            onClick={showModal}
          >
            Add Role
          </Button>

          <Modal
            title="Role"
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
                label="Role Id"
                value={roleId}
                name="roleId"
                onChange={handelRoleIdChange}
                rules={[
                  {
                    required: true,
                    message: "Please input Role Id!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Role Name"
                value={rolename}
                name="roleName"
                onChange={handelRoleChange}
                rules={[
                  {
                    required: true,
                    message: "Please input Role!",
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
                      // onClick={handlesuccess}
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
        dataSource={viewRoleData}
        loading={loading}
        scroll={{ x: 400 }}
      />
    </div>
  );
};

export default Role;

 
          