import React from "react";
import constants from "../../constants/Constants";
import "antd/dist/antd.css";
import "./login.scss";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Checkbox } from "antd";
const {
  ROUTES: { RESET, DASHBOARD },
  REMEMBER_ME_LABEL,
  FORGOT_PASSWORD_LABEL,
  LOG_IN_LABEL,
  EMAIL_LABEL,
  EMAIL_PLACEHOLDER,
  PASSWORD_LABEL,
  PASSWORD_PLACEHOLDER,
} = constants;
const Login = () => {
  const history = useHistory();
  const onFinish = (values) => {
    console.log("Success:", values);
    history.push(DASHBOARD);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleSubmit = (values) => {
    console.log("Submit", values);
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
          label={EMAIL_LABEL}
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

        <Form.Item
          label={PASSWORD_LABEL}
          name="password"
          rules={[
            {
              
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input.Password placeholder={PASSWORD_PLACEHOLDER} />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <div className="forgotpassfield">
            <Checkbox className="remembercheck">{REMEMBER_ME_LABEL}</Checkbox>
            <div className="forgotpassword">
              {" "}
              <a href onClick={() => history.push(RESET)}>
                {" "}
                {FORGOT_PASSWORD_LABEL}
              </a>
            </div>
          </div>
        </Form.Item>

        <Form.Item>
          <Button
            className="loginbtn"
            block
            htmlType="submit"
            onClick={handleSubmit}
          >
            {LOG_IN_LABEL}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;



