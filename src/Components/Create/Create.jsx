import React from "react";
import "antd/dist/antd.css";
import "../Login/login.scss";
import constants from "../../constants/Constants";
import { Form, Input, Button } from "antd";
const {
  CREATE_PASSWORD,
  CONFIRM_NEW_PASSWORD,
  CREATE_PASSWORD_PLACEHOLDER,
  CONFIRM_CREATE_PASSWORD_PLACEHOLDER,
  SAVE_BTN,
} = constants;
const Create = () => {
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
          name="password"
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
          <Button block type="primary" htmlType="submit">
            {SAVE_BTN}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Create;
