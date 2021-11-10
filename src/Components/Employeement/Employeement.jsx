/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import { Row, Col, Divider, Table, Button, Modal, Form, Input } from "antd";
import "antd/dist/antd.css";
import "../Employeement/Employeement.scss";
import deleteimg from "../../assets/images/delete.png";
import edit from "../../assets/images/edit.png";
import { CheckOutlined, CloseOutlined, PlusOutlined } from "@ant-design/icons";

function handleEmployeementEdit(checked) {
  console.log(`switch to ${checked}`);
}
function handleEmployeementdelete(checked) {
  console.log(`switch to ${checked}`);
}
const columns = [
  {
    title: "SL NO.",
    dataIndex: "key",
    key: "key",
  },
  {
    title: "Employeement ID",
    dataIndex: "employeementid",
    key: "employeementid",
  },
  {
    title: "Employeement Name",
    dataIndex: "employeementname",
    key: "employeementname",
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
            onClick={handleEmployeementEdit}
          />
        </span>
        <span style={{ marginLeft: "5%" }}>
          <img
            alt="delete"
            src={deleteimg}
            width="35px"
            height="36px"
            onClick={handleEmployeementdelete}
          />
        </span>
      </>
    ),
  },
];

const data = [
  {
    key: "1",
    employeementid: "201",
    employeementname: "Fullstack Devloper",
  },
  {
    key: "2",
    employeementid: "202",
    employeementname: "Human Resource",
  },
  {
    key: "3",
    employeementid: "203",
    employeementname: "Frontend Devloper",
  },
];
const Role = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [employeement, setEmployeement] = useState({});
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Success:", values);
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        Accept: "application/json",
      },
    };
    axios
      .post(
        "https://hutechpayrollapp.azurewebsites.net/application/createEmployeement",
        values,
        console.log(values),
        axiosConfig
        // {
        //   headers: {
        //     "Content-Type": "application/json",
        //     "Access-Control-Allow-Origin": "*",
        //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        //   },
        // }
      )
      .then((res) => {
       console.log("RESPONSE RECEIVED: ", res);
        setEmployeement("");
      })
      .catch((err) => {
       console.log("AXIOS ERROR: ", err);
      });
    console.log(employeement);

    setLoading(true);
    setTimeout(() => {
      setIsModalVisible(false);
      setLoading(false);
      form.resetFields();
    }, 3000);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handelEmployeementChange = (e) => {
    const name = e.target.name;
    // console.log(name);
    const value = e.target.value;
    console.log(e.target.value);
    console.log(employeement);
    console.log({[name]: value})
    setEmployeement({
      ...employeement,
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
          <div className="employeementheader">Employeement</div>
        </Col>
        <Col span={12}>
          <Button
            className="addemployeementbtn"
            icon={<PlusOutlined />}
            onClick={showModal}
          >
            Add Employeement
          </Button>

          <Modal
            title="Employeement"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
          >
            <Form
              form={form}
              requiredMark={false}
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
                label="Employeement Name"
                value={employeement}
                name="employeementName"
                onChange={handelEmployeementChange}
                rules={[
                  {
                    required: true,
                    message: "Please input Employeement!",
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
      <Table className="tablestyle" columns={columns} dataSource={data} />
    </div>
  );
};

export default Role;

// import React, { useState } from "react";
// import axios from "axios";
// import { Row, Col, Divider, Table, Button, Modal, Form, Input } from "antd";
// import "antd/dist/antd.css";
// import "../Employement/Employement.scss";
// import deleteimg from "../../assets/images/delete.png";
// import edit from "../../assets/images/edit.png";
// import { PlusOutlined, CheckOutlined, CloseOutlined } from "@ant-design/icons";

// function handleEmployeementEdit(checked) {
//   console.log(`switch to ${checked}`);
// }
// function handleEmployeementdelete(checked) {
//   console.log(`switch to ${checked}`);
// }
// const columns = [
//   {
//     title: "SL NO.",
//     dataIndex: "key",
//     key: "key",
//   },
//   {
//     title: "Employeement ID",
//     dataIndex: "employeementid",
//     key: "employeementid",
//   },
//   {
//     title: "Employeement Name",
//     dataIndex: "employeementname",
//     key: "employeementname",
//   },
//   {
//     title: "Action",
//     dataIndex: "action",
//     key: "action",
//     render: (action) => (
//       // action === true
//       <>
//         <span>
//           <img
//             alt="edit"
//             src={edit}
//             width="35px"
//             height="36px"
//             onClick={handleEmployeementEdit}
//           />
//         </span>
//         <span style={{ marginLeft: "5%" }}>
//           <img
//             alt="delete"
//             src={deleteimg}
//             width="35px"
//             height="36px"
//             onClick={handleEmployeementdelete}
//           />
//         </span>
//       </>
//     ),
//   },
// ];

// const data = [
//   {
//     key: "1",
//     employeementid: "301",
//     employeementname: "Intern",
//   },
//   {
//     key: "2",
//     employeementid: "302",
//     employeementname: "Part Time",
//   },
//   {
//     key: "3",
//     employeementid: "303",
//     employeementname: "Full Time",
//   },
// ];
// const Employeement = () => {
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [employeement, setEmployeement] = useState("");
//   const [loading, setLoading] = useState(false);

//    const [form] = Form.useForm();

//   const onFinish = (values) => {
//     console.log("Success:", values);
//     axios
//       .post(
//         "https://hutechpayrollapp.azurewebsites.net/application/createEmployeement",
//         values,
//         { headers: { "Content-Type": "application/json" } }
//       )
//       .then((res) => {
//         console.log(res.data);
//         setEmployeement("");
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//     console.log(employeement);

//     setLoading(true);
//     setTimeout(() => {
//       setIsModalVisible(false);
//       setLoading(false);
//       form.resetFields();
//     }, 3000);
//   };
//   const onFinishFailed = (errorInfo) => {
//     console.log("Failed:", errorInfo);
//   };

//    const handelEmployeementChange = (e) => {
//      console.log(e);
//      const name = e.target.name;
//      console.log(name);
//      const value = e.target.value;
//      console.log(e.target.value);
//      console.log(employeement);
//      setEmployeement({
//        ...employeement,
//        [name]: value,
//      });
//    };

//   const showModal = () => {
//     setIsModalVisible(true);
//   };

//   const handleOk = () => {
//     setIsModalVisible(false);
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//   };

//   return (
//     <div>
//       <Row>
//         <Col span={12}>
//           {" "}
//           <div className="employeementheader">Employeement</div>
//         </Col>
//         <Col span={12}>
//           <Button
//             className="addemployeementbtn"
//             icon={<PlusOutlined />}
//             onClick={showModal}
//           >
//             Add Employeement
//           </Button>
//           <Modal
//             title="Employeement"
//             visible={isModalVisible}
//             onOk={handleOk}
//             onCancel={handleCancel}
//             footer={null}
//           >
//             <Form
//               form={form}
//               requiredMark={false}
//               name="basic"
//               labelCol={{
//                 span: 8,
//               }}
//               wrapperCol={{
//                 span: 16,
//               }}
//               initialValues={{
//                 remember: true,
//               }}
//               onFinish={onFinish}
//               onFinishFailed={onFinishFailed}
//               autoComplete="off"
//             >
//               <Form.Item
//                 label="Employeement Name"
//                 value={employeement}
//                 name="employeementName"
//                 onChange={handelEmployeementChange}
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please input Employeement!",
//                   },
//                 ]}
//               >
//                 <Input />
//               </Form.Item>
//               <Row>
//                 <Col span={19}>
//                   <Form.Item>
//                     <Button
//                       className="cancelbtn"
//                       key="back"
//                       icon={<CloseOutlined />}
//                       onClick={handleCancel}
//                     >
//                       Cancel
//                     </Button>
//                   </Form.Item>
//                 </Col>
//                 <Col span={5}>
//                   <Form.Item>
//                     <Button
//                       htmlType="submit"
//                       className="savebtn"
//                       icon={<CheckOutlined />}
//                     >
//                       Save
//                     </Button>
//                   </Form.Item>
//                 </Col>
//               </Row>
//             </Form>
//           </Modal>
//         </Col>
//       </Row>

//       <Divider />
//       <Table className="tablestyle" columns={columns} dataSource={data} />
//     </div>
//   );
// };

// export default Employeement;

// //  <Modal
// //    visible={visible}
// //    title="Employeement"
// //    onOk={handleOk}
// //    onCancel={handleCancel}
// //    footer={[
// //      <Button
// //        className="cancelbtn"
// //        key="back"
// //        icon={<CloseOutlined />}
// //        onClick={handleCancel}
// //      >
// //        Cancel
// //      </Button>,
// //      <Button
// //        className="savebtn"
// //        key="submit"
// //        loading={loading}
// //        icon={<CheckOutlined />}
// //        onClick={handleOk}
// //      >
// //        Save
// //      </Button>,
// //    ]}
// //  >
// //    <Addemployeement />
// //  </Modal>;
