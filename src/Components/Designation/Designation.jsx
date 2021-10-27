import React, { useState } from "react";
import { Row, Col, Divider, Table, Button, Modal } from "antd";
import "antd/dist/antd.css";
import "../Designation/Designation.scss";
import deleteimg from "../../assets/images/delete.png";
import edit from "../../assets/images/edit.png";

import {
  PlusOutlined,
  CheckOutlined,
  CloseOutlined
} from "@ant-design/icons";
import Adddesignation from "./Adddesignation";

// state = {
//   loading: false,
//   visible: false,
// };

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
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
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
        <span style={{marginLeft:"5%"}}>
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
    //    ? ( <span>
    //       <Switch onChange={onChange} defaultChecked={true} />
    //     </span>
    //   ) : (
    //     <span>
    //       <Switch onChange={onChange} defaultChecked={false} />
    //     </span>
    //   ),
  },
];

const data = [
  {
    key: "1",
    name: "Junior Devloper",
    description: "Junior Devloper",
  },
  {
    key: "2",
    name: "Senior Developer",
    description: "Senior Developer",
  },
  {
    key: "3",
    name: "Business Analyst",
    description: "Business Analyst",
  },
];
const Designation = () => {
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
          <div className="designationheader">Designation</div>
        </Col>
        <Col span={12}>
          <Button
            className="addbtn"
            icon={<PlusOutlined />}
            onClick={showModal}
          >
            Add Designation
          </Button>
          <Modal
            visible={visible}
            title="Designation"
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
                // type="primary"
                loading={loading}
                icon={<CheckOutlined />}
                onClick={handleOk}
              >
                Save
              </Button>
            ]}
          >
            <Adddesignation />
          </Modal>
        </Col>
      </Row>

      <Divider />
      <Table className="tablestyle" columns={columns} dataSource={data} />
    </div>
  );
};

export default Designation;
