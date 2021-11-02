import React from "react";
import constants from "../../constants/Constants";
import "antd/dist/antd.css";
import "./login.scss";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Checkbox, Row,Col } from "antd";
import axios from "axios";
const {
  ROUTES: { RESET },
  REMEMBER_ME_LABEL,
  FORGOT_PASSWORD_LABEL,
  LOG_IN_LABEL,
  EMAIL_LABEL,
  EMAIL_PLACEHOLDER,
  PASSWORD_LABEL,
  PASSWORD_PLACEHOLDER,
} = constants;


const Login = () => {
  let [form] = Form.useForm()
  
  
  const history = useHistory();
  const onFinish = (values) => {
    axios.post().then((res)=>{
    // history.push('/onc')
        
    }) 
    console.log("Success:", values);
    form.resetFields()     
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  // const handleSubmit = (e) => {
  //        e.preventDefault() 
          
  //        console.log(email, password) 
  //        setemail('')
  // };

  // let handlechange = (e)=>{
  //    setemail(e.target.value)
     

  //    setpassword(e.target.value)

  //   }
  return (
    
      <div className="form_container">
        <Form


          form={form} 
          name="basic"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          // onSubmitCapture={handleSubmit} 
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
            <Checkbox className="forgotpassword">{REMEMBER_ME_LABEL}</Checkbox>
            <a href onClick={() => history.push(RESET)}>
              {" "}
              {FORGOT_PASSWORD_LABEL}
            </a>
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit">
              {LOG_IN_LABEL}
            </Button>
          </Form.Item>
        </Form>
      </div>
  );
}
;



export default Login;