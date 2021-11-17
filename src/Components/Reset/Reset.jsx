import React from "react";
import "antd/dist/antd.css";
import constants from "../../constants/Constants";
import "../Login/login.scss";
import { Form, Input, Button } from "antd";
const { EMAIL_PLACEHOLDER, SUBMIT_BTN } = constants;
const Reset = () => {
 const onFinish = (values) => {
   console.log("Success:", values);
 };

 const onFinishFailed = (errorInfo) => {
   console.log("Failed:", errorInfo);
 };

 return (
   <div className="form_container">
     <Form
       requiredMark={false}
       name="basic"
       layout="vertical"
       onFinish={onFinish}
       onFinishFailed={onFinishFailed}
       autoComplete="off"
     >
       <Form.Item
         label="Email Address"
         name="emailId"
         rules={[
           {
             type: "email",
             required: true,
             message: "Please input your Email Address!",
           },
         ]}
       >
         <Input placeholder={EMAIL_PLACEHOLDER} />
       </Form.Item>

       <Form.Item>
         <Button block type="primary" htmlType="submit" className="loginbtn">
           {SUBMIT_BTN}
         </Button>
       </Form.Item>
     </Form>
   </div>
 );
};

export default Reset;
