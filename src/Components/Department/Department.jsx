import React, { useState } from "react";
import { Row, Col, Divider, Table, Button, Modal } from "antd";
import "antd/dist/antd.css";
import "../Department/Department.scss";
import deleteimg from "../../assets/images/delete.png";
import edit from "../../assets/images/edit.png";

import { PlusOutlined, CheckOutlined, CloseOutlined } from "@ant-design/icons";
import Adddepartment from "./Adddepartment";

function handleEdit(checked) {
  console.log(`switch to ${checked}`);
}
function handledelete(checked) {
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
            onClick={handleEdit}
          />
        </span>
        <span style={{ marginLeft: "5%" }}>
          <img
            alt="delete"
            src={deleteimg}
            width="35px"
            height="36px"
            onClick={handledelete}
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
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const showModal = () => {
    setVisible(true);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setVisible(false);
      setLoading(false);
    }, 3000);
  };

  const handleCancel = () => {
    setVisible(false);
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
            visible={visible}
            title="Department"
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
              <Button
                className="cancelbtn"
                key="back"
                icon={<CloseOutlined />}
                onClick={handleCancel}
              >
                Cancel
              </Button>,
              <Button
                className="savebtn"
                key="submit"
                loading={loading}
                icon={<CheckOutlined />}
                onClick={handleOk}
              >
                Save
              </Button>,
            ]}
          >
            <Adddepartment />
          </Modal>
        </Col>
      </Row>

      <Divider />
      <Table className="tablestyle" columns={columns} dataSource={data} />
    </div>
  );
};

export default Department;
