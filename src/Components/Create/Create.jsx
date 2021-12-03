import { CheckCircleFilled } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
// import { useHistory } from "react-router-dom";
import "antd/dist/antd.css";
import axios from "axios";
import React, { useEffect } from "react";
import constants from "../../constants/Constants";
import "../Login/login.scss";

const {
  CREATE_PASSWORD,
  CONFIRM_NEW_PASSWORD,
  CREATE_PASSWORD_PLACEHOLDER,
  CONFIRM_CREATE_PASSWORD_PLACEHOLDER,
  SAVE_BTN,
} = constants;
const Create = () => {
  const [form] = Form.useForm();
// let history = useHistory();
useEffect(() => {
  axios
    .get(
      "https://hutechpayrollapp.azurewebsites.net/application/verifyEmployee"
    )

    .then((response) => {
      console.log("response", response);
    })
    .catch((err) => {
      console.log(err);
    });
}, []);


  const onFinish = (values) => {
    console.log("Success:", values);
    alert("Your password has been created successfully");
    // history.push("/activation");
     form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="form_container">
      <div style={{ color: "green", fontSize: "1.5rem" }}>
        {" "}
        <CheckCircleFilled /> Your account is activated successfully!!!
      </div>
      <div style={{ color: "green", fontSize: "1.5rem", fontWeight: "bold" }}>
        Please create your password
      </div>
      <Form
        form={form}
        requiredMark={false}
        colon={false}
        name="basic"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label={CREATE_PASSWORD}
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input.Password placeholder={CREATE_PASSWORD_PLACEHOLDER} />
        </Form.Item>

        <Form.Item
          label={CONFIRM_NEW_PASSWORD}
          labelAlign="right"
          name="cpassword"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input.Password placeholder={CONFIRM_CREATE_PASSWORD_PLACEHOLDER} />
        </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit" className="loginbtn">
            {SAVE_BTN}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Create;
