import React from "react";
import "antd/dist/antd.css";
import "../Login/login.scss";
import constants from "../../constants/Constants";
import { Form, Input, Button } from "antd";
const {
  PASSWORD: { NEW_PASSWORD, CONFIRM_PASSWORD },
  NEW_PASSWORD_PLACEHOLDER,
  CONFIRM_PASSWORD_PLACEHOLDER,
  SAVE_PASSWORD_BTN,
} = constants;
const Forgot = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="form_container">
      <Form
        name="basic"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label={NEW_PASSWORD}
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input.Password placeholder={NEW_PASSWORD_PLACEHOLDER} />
        </Form.Item>

        <Form.Item
          label={CONFIRM_PASSWORD}
          labelAlign="right"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input.Password placeholder={CONFIRM_PASSWORD_PLACEHOLDER} />
        </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit">
            {SAVE_PASSWORD_BTN}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Forgot;