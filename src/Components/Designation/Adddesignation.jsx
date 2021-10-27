import React from "react";
import { Form, Input} from "antd";

const Adddesignation = () => {
    // const [form] = Form.useForm();
    const onFinish = (values) => {
      console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };
  return (
    <div>
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
          label="Designation Name"
          name="designationname"
          rules={[
            {
              required: true,
              message: "Please input Designation!",
            },
          ]}
        >
          <div className="wrapasterik">
            <span className="asterik">*</span>
            <Input />
          </div>
        </Form.Item>

        <Form.Item label="Description" name="description">
          <div className="wrapasterik">
            <span className="asterik"> &nbsp;&nbsp;</span>
            <Input.TextArea />
          </div>
          <span className="degn_textarea">
            0 characters remaining of 100 characters
          </span>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Adddesignation;
