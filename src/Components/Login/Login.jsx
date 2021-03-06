/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Button, Checkbox, Form, Input } from "antd";
import "antd/dist/antd.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
// import axios from "axios";
import { userlogin } from '../../action/useraction';
import constants from "../../constants/Constants";
import "./login.scss";




const {
  ROUTES: { RESET },
  REMEMBER_ME_LABEL,
  FORGOT_PASSWORD_LABEL,
  LOG_IN_LABEL,
  USERNAME_LABEL,
  EMAIL_PLACEHOLDER,
  PASSWORD_LABEL,
  PASSWORD_PLACEHOLDER,
} = constants;
const Login = () => {
  let [form] = Form.useForm()
  const userloginn = useSelector(state => state.userlogin)
  let {loading, userinfo, error} = userloginn

  const history = useHistory();

  useEffect(() => {
    
    if(userinfo){
      history.push('/dashboard') 
    }
    // else {
    //    history.push("/empdashboard");
    // }
  }, [history, userinfo])

  useEffect(() => {
    if (!userinfo) {
      history.push("/");
    }
  }, [history]);
 
 
  let dispatch = useDispatch()
  
  const onFinish = (values) => {
    let email = values.emailId
    let password = values.password
    console.log(email)
    
    
    dispatch(userlogin(email, password))
    console.log("Success:", values);
    // history.push(DASHBOARD);

    form.resetFields() 
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
        colon={false}
        name="basic"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label={USERNAME_LABEL}
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

        
          <Button
            className="loginbtn"
            block
            htmlType="submit"
            onClick={handleSubmit}
          >
            {LOG_IN_LABEL}
          </Button>
       
      </Form>
    </div>
  );
};

export default Login;



