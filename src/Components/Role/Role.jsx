import React, { useState } from "react";
import axios from "axios";
import { Row, Col, Divider, Table, Button, Modal, Form, Input } from "antd";
import "antd/dist/antd.css";
import "../Role/Role.scss";
import deleteimg from "../../assets/images/delete.png";
import edit from "../../assets/images/edit.png";
import { CheckOutlined, CloseOutlined, PlusOutlined } from "@ant-design/icons";
// const baseURL = "https://hutechpayrollapp.azurewebsites.net/application";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

function handleEdit(checked) {
  console.log(`switch to ${checked}`);
}
function handledelete(checked) {
  console.log(`switch to ${checked}`);
}
// const columns = [
//   {
//     title: "SL NO.",
//     dataIndex: "key",
//     key: "key",
//   },
//   {
//     title: "Role ID",
//     dataIndex: "roleid",
//     key: "roleid",
//   },
//   {
//     title: "Role Name",
//     dataIndex: "rolename",
//     key: "rolename",
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
//             onClick={handleEdit}
//           />
//         </span>
//         <span style={{ marginLeft: "5%" }}>
//           <img
//             alt="delete"
//             src={deleteimg}
//             width="35px"
//             height="36px"
//             onClick={handledelete}
//           />
//         </span>
//       </>
//     ),
//   },
// ];

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
  const [rolename, setRolename] = useState("");
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const handelChange = (e) => {
    console.log(e);
    const name = e.target.name;
    console.log(name);
    const value = e.target.value;
    console.log(e.target.value);
    console.log(rolename);
    setRolename({
      ...rolename,
      // name: value,
      // value: value,
      [name]: value,
    });
  };
  const showModal = () => {
    setVisible(true);
  };
  const handleSubmit = () => {
    // e.preventDefault();
    // alert(rolename);
    console.log(rolename);
     axios.post(
        "https://hutechpayrollapp.azurewebsites.net/application/createRole",
        rolename,
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => {
        console.log(res.data);
        setRolename("");
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(true);
    setTimeout(() => {
      setVisible(false);
      setLoading(false);
    }, 3000);

    // e.preventDefault();
    // alert(rolename);
    // console.log(e.target.value);
    // console.log(rolename);
  };;;

  const handleCancel = () => {
    setVisible(false);
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
          <Modal visible={visible} title="Role" footer={null}>
            <Form
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
                label="Role Name"
                value={rolename}
                name="name"
                onChange={handelChange}
                rules={[
                  {
                    required: true,
                    message: "Please input Role!",
                  },
                ]}
              >
                <div className="wrapasterik">
                  <span className="asterik">*</span>
                  <Input />
                </div>
              </Form.Item>
              <Button
                className="cancelbtn"
                key="back"
                icon={<CloseOutlined />}
                onClick={handleCancel}
              >
                Cancel
              </Button>
              ,
              <Button
                className="savebtn"
                key="submit"
                loading={loading}
                icon={<CheckOutlined />}
                onClick={handleSubmit}
              >
                Save
              </Button>
              ,
            </Form>
          </Modal>
        </Col>
      </Row>

      <Divider />
      {/* <Table className="tablestyle" columns={columns} dataSource={data} /> */}
    </div>
  );
};

export default Role;

// import React, { useState } from "react";
// import axios from "axios";
// import { Row, Col, Divider, Table, Button, Modal, Form, Input } from "antd";
// import "antd/dist/antd.css";
// import "../Role/Role.scss";
// import deleteimg from "../../assets/images/delete.png";
// import edit from "../../assets/images/edit.png";
// import {CheckOutlined,CloseOutlined, PlusOutlined,} from "@ant-design/icons";
// // const baseURL = "https://hutechpayrollapp.azurewebsites.net/application";

// const onFinish = (values) => {
//   console.log("Success:", values);
// };
// const onFinishFailed = (errorInfo) => {
//   console.log("Failed:", errorInfo);
// };

// function handleEdit(checked) {
//   console.log(`switch to ${checked}`);
// }
// function handledelete(checked) {
//   console.log(`switch to ${checked}`);
// }
// const columns = [
//   {
//     title: "SL NO.",
//     dataIndex: "key",
//     key: "key",
//   },
//   {
//     title: "Role ID",
//     dataIndex: "roleid",
//     key: "roleid",
//   },
//   {
//     title: "Role Name",
//     dataIndex: "rolename",
//     key: "rolename",
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
//             onClick={handleEdit}
//           />
//         </span>
//         <span style={{ marginLeft: "5%" }}>
//           <img
//             alt="delete"
//             src={deleteimg}
//             width="35px"
//             height="36px"
//             onClick={handledelete}
//           />
//         </span>
//       </>
//     ),
//   },
// ];

// const data = [
//   {
//     key: "1",
//     roleid:"201",
//     rolename: "Fullstack Devloper",
//   },
//   {
//     key: "2",
//     roleid:"202",
//     rolename: "Human Resource",
//   },
//   {
//     key: "3",
//     roleid:"203",
//     rolename: "Frontend Devloper",
//   },
// ];
// const Role = () => {
//   const [rolename, setRolename] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [visible, setVisible] = useState(false);

//   const handelchange = (e) => {
//     console.log(e.target.value)
//   }
//   const showModal = () => {
//     setVisible(true);
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(rolename);
//     console.log(e.target.value);
//     console.log(rolename);
//     axios
//       .post(
//         "https://hutechpayrollapp.azurewebsites.net/application/createRole",
//         rolename,
//         { headers: { "Content-Type": "application/json" } }
//       )
//       .then((res) => {
//         console.log(res.data);
//         setRolename("");
//       })
//       .catch((err) => {
//         console.log(err);
//       });

//     setLoading(true);
//     setTimeout(() => {
//       setVisible(false);
//       setLoading(false);
//     }, 3000);
//   };

//   const handleCancel = () => {
//     setVisible(false);
//   };

//   return (
//     <div>
//       <Row>
//         <Col span={12}>
//           {" "}
//           <div className="roleheader">Role</div>
//         </Col>
//         <Col span={12}>
//           <Button
//             className="addrolebtn"
//             icon={<PlusOutlined />}
//             onClick={showModal}
//           >
//             Add Role
//           </Button>
//           <Modal visible={visible} title="Role" footer={null}>
//             <Form
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
//                 label="Role Name"
//                 value={rolename}
//                 name="rolename"
//                 onChange={handelchange}
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please input Role!",
//                   },
//                 ]}
//               >
//                 <div className="wrapasterik">
//                   <span className="asterik">*</span>
//                   <Input />
//                 </div>
//               </Form.Item>
//               <Button
//                 className="cancelbtn"
//                 key="back"
//                 icon={<CloseOutlined />}
//                 onClick={handleCancel}
//               >
//                 Cancel
//               </Button>
//               ,
//               <Button
//                 className="savebtn"
//                 key="submit"
//                 loading={loading}
//                 icon={<CheckOutlined />}
//                 onClick={handleSubmit}
//               >
//                 Save
//               </Button>
//               ,
//             </Form>
//           </Modal>
//         </Col>
//       </Row>

//       <Divider />
//       <Table className="tablestyle" columns={columns} dataSource={data} />
//     </div>
//   );
// };

// export default Role;



// const columns = [
//   {
//     title: "SL NO.",
//     dataIndex: "key",
//     key: "key",
//   },
//   {
//     title: "Role ID",
//     dataIndex: "roleid",
//     key: "roleid",
//   },
//   {
//     title: "Role Name",
//     dataIndex: "rolename",
//     key: "rolename",
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
//             onClick={handleEdit}
//           />
//         </span>
//         <span style={{ marginLeft: "5%" }}>
//           <img
//             alt="delete"
//             src={deleteimg}
//             width="35px"
//             height="36px"
//             onClick={handledelete}
//           />
//         </span>
//       </>
//     ),
//   },
// ];

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