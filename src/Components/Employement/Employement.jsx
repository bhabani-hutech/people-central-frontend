import React, { useState } from "react";
import { Row, Col, Divider, Table, Button, Modal } from "antd";
import "antd/dist/antd.css";
import "../Employement/Employement.scss";
import deleteimg from "../../assets/images/delete.png";
import edit from "../../assets/images/edit.png";

import { PlusOutlined, CheckOutlined, CloseOutlined } from "@ant-design/icons";
import Addemployement from "./Addemployement";

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
    title: "Employement ID",
    dataIndex: "employmentid",
    key: "employmentid",
  },
  {
    title: "Employement Name",
    dataIndex: "employmentname",
    key: "employmentname",
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
    employmentid: "301",
    employmentname: "Fullstack Devloper",
  },
  {
    key: "2",
    employmentid: "302",
    employmentname: "Human Resource",
  },
  {
    key: "3",
    employmentid: "303",
    employmentname: "Frontend Devloper",
  },
];
const Employement = () => {
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
          <div className="employementheader">Employement</div>
        </Col>
        <Col span={12}>
          <Button
            className="addemployementbtn"
            icon={<PlusOutlined />}
            onClick={showModal}
          >
            Add Employement
          </Button>
          <Modal
            visible={visible}
            title="Employement"
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
            <Addemployement />
          </Modal>
        </Col>
      </Row>

      <Divider />
      <Table className="tablestyle" columns={columns} dataSource={data} />
    </div>
  );
};

export default Employement;
