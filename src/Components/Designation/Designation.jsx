/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Divider, Table, Button, Modal, Form, Input } from "antd";
import "antd/dist/antd.css";
import "../Designation/Designation.scss";
import deleteimg from "../../assets/images/delete.png";
import edit from "../../assets/images/edit.png";
import { PlusOutlined, CheckOutlined, CloseOutlined } from "@ant-design/icons";

function handleDesignationEdit(checked) {
  console.log(`switch to ${checked}`);
}
function handleDesignationdelete(checked) {
  console.log(`switch to ${checked}`);
}
const columns = [
  {
    title: "SL NO.",
    dataIndex: "key",
    key: "key",
  },
  {
    title: "Desgnation ID",
    dataIndex: "viewDesgnId",
    key: "designationid",
  },
  {
    title: "Desgnation Name",
    dataIndex: "viewDesgnName",
    key: "name",
  },
  {
    title: "Description",
    dataIndex: "viewDesgnDescription",
    key: "description",
  },
  // {
  //   title: "Action",
  //   dataIndex: "action",
  //   key: "action",
  //   render: (action) => (
  //     // action === true
  //     <>
  //       <span>
  //         <img
  //           alt="edit"
  //           src={edit}
  //           width="35px"
  //           height="36px"
  //           onClick={handleDesignationEdit}
  //         />
  //       </span>
  //       <span style={{ marginLeft: "5%" }}>
  //         <img
  //           alt="delete"
  //           src={deleteimg}
  //           width="35px"
  //           height="36px"
  //           onClick={handleDesignationdelete}
  //         />
  //       </span>
  //     </>
  //   ),
  // },
];

const Designation = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [designation, setDesignation] = useState([
    {
      desgnId: "",
      desgnName: "",
      desgndescription: "",
    },
  ]);
  const [designationId, setDesignationId] = useState(null);
  const [designationName, setDesignationName] = useState("");
  const [description, setDescription] = useState("");
  const [form] = Form.useForm();

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        "https://peoplecentral.herokuapp.com/application/viewDesignation"
      )

      .then((response) => {
        console.log("response", response);

        const DesgnData = response.data.map((item, i) => ({
          key: i + 1,
          viewDesgnId: item.designationId,
          viewDesgnName: item.designationName,
          viewDesgnDescription: item.description,
        }));
        setDesignation(DesgnData);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const onFinish = (values) => {
    console.log("Success:", values);
    // const designationDetails = {
    //   desgnId: values.desgnId,
    //   desgnName: values.desgnName,
    //   desgndescription: values.desgndescription,
    // };
    axios
      .post(
        "https://peoplecentral.herokuapp.com/application/createDesignation",
        // designationDetails,
        values,
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(designation);
    console.log(designationId);
    console.log(designationName);
    console.log(description);
    setLoading(true);
    setTimeout(() => {
      setIsModalVisible(false);
      setLoading(false);
      form.resetFields();
    }, 1000);
    alert("Designation Created successfully");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handelDesignationId = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(value);
    setDesignationId({
      [name]: value,
    });
  };
  const handelDesignationName = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(value);
    setDesignationName({
      [name]: value,
    });
  };
  const handelDescription = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(value);
    setDescription({
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
            visible={isModalVisible}
            title="Designation"
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
          >
            <Form
              form={form}
              requiredMark={false}
              colon={false}
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
                label="Designation ID"
                value={designationId}
                name="designationId"
                onChange={handelDesignationId}
                rules={[
                  {
                    required: true,
                    message: "Please input Designation ID!",
                  },
                ]}
              >
                {/* <div className="wrapasterik">
                  <span className="asterik">*</span> */}
                <Input />
                {/* </div> */}
              </Form.Item>
              <Form.Item
                label="Designation Name"
                value={designationName}
                name="designationName"
                onChange={handelDesignationName}
                rules={[
                  {
                    required: true,
                    message: "Please input Designation!",
                  },
                ]}
              >
                {/* <div className="wrapasterik">
                  <span className="asterik">*</span> */}
                <Input />
                {/* </div> */}
              </Form.Item>

              <Form.Item
                label="Description"
                value={description}
                name="description"
                onChange={handelDescription}
              >
                {/* <div className="wrapasterik">
                  <span className="asterik"> &nbsp;&nbsp;</span> */}
                <Input.TextArea />
                <div className="degn_textarea">
                  0 characters remaining of 100 characters
                </div>

                {/* </div> */}
              </Form.Item>

              <Row>
                <Col span={19}>
                  <Button
                    className="cancelbtn"
                    key="back"
                    icon={<CloseOutlined />}
                    onClick={handleCancel}
                  >
                    Cancel
                  </Button>
                </Col>
                <Col span={5}>
                  <Button
                    htmlType="submit"
                    className="savebtn"
                    icon={<CheckOutlined />}
                  >
                    Save
                  </Button>
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
        loading={loading}
        dataSource={designation}
        scroll={{ x: 400 }}
      />
    </div>
  );
};

export default Designation;

