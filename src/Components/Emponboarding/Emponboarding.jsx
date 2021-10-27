import React from "react";
import {
  Radio,
  Divider,
  Button ,
  Row,
  Col,
  Form,
  Upload,
  message,
  Input,
  DatePicker,
  Select,
} from "antd";
import "antd/dist/antd.css";
import {
  UploadOutlined,
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import "./Emponboarding.scss";
const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
// const places = [
//   { label: "Bengaluru", value: "Bengaluru" },
//   { label: "Chennai", value: "Chennai" },
// ];
const emptype = [
  { label: "Part Time", value: "Part Time" },
  { label: "Full Time", value: "Full Time" },
  { label: "Contract", value: "Contract" },
  { label: "Intern", value: "Intern" },
];
const Designation = [
  { label: "HRBP", value: "HRBP" },
  { label: "Business analyst Level", value: "Business analyst Level" },
  { label: "Developer", value: "Developer" },
  { label: "Junior Developer", value: "Junior Developer" },
  { label: "Senior Developer", value: "Senior Developer" },
];
const permission = [
  { label: "Admin", value: "Admin" },
  { label: "Employee", value: "Employee" },
  { label: "Manager", value: "Manager" },
];
const Department = [
  { label: "Default", value: "Default" },
  { label: "Marketing", value: "Marketing" },
  { label: "Finance", value: "Finance" },
  { label: "HR", value: "HR" },
];

const Emponboarding = () => {
const [form] = Form.useForm();
  const [value, setValue] = React.useState(1);
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  // const handleChange = () => {
  //   form.setFieldsValue();
  // };
  const handleType = () => {
    form.setFieldsValue();
  };
  const handleDesignation = () => {
    form.setFieldsValue();
  };
  const handlePermission = () => {
     form.setFieldsValue();
  }
  const handleDepartment = () => {
    form.setFieldsValue();
  };

    return (
      <div>
        <div className="user_details">
          <div className="tab2_header">
            <div className="tab2_heading">User Details :</div>

            <div className="tab2_subheading">
              <span className="span_heading">*</span>&nbsp;indicates mandatory
              fields
            </div>
          </div>
          <Divider></Divider>
          <Row justify="start">
            <Col span={12}>
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
                  label="First Name"
                  name="firstname"
                  rules={[
                    {
                      required: true,
                      message: "Please input first name!",
                    },
                  ]}
                >
                  <div className="wrapasterik">
                    <span className="asterik">*</span>
                    <Input placeholder="First Name" />
                  </div>
                </Form.Item>

                <Form.Item
                  label="Last Name"
                  name="lastname"
                  rules={[
                    {
                      required: true,
                      message: "Please input first name!",
                    },
                  ]}
                >
                  <div className="wrapasterik">
                    <span className="asterik">*</span>
                    <Input placeholder="Last Name" />
                  </div>
                </Form.Item>

                <Form.Item
                  name="phone"
                  label="Phone Number"
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone number!",
                    },
                  ]}
                >
                  <div className="wrapasterik">
                    <span className="asterik">*</span>
                    <Input placeholder="Phone Number" />
                  </div>
                </Form.Item>
                <Form.Item
                  label="Gender"
                  name="gender"
                  rules={[
                    {
                      required: true,
                      message: "Please input gender!",
                    },
                  ]}
                >
                  <div className="wrapasterik">
                    <span className="asterik">*</span>
                    <Radio.Group onChange={onChange} value={value}>
                      <Radio value={1}>Male</Radio>
                      <Radio value={2}>Female</Radio>
                      <Radio value={3}>Others</Radio>
                    </Radio.Group>
                  </div>
                </Form.Item>
              </Form>
            </Col>
            <Col span={12}>
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
                  label="Address line 1"
                  name="address1"
                  rules={[
                    {
                      required: true,
                      message: "Please input address!",
                    },
                  ]}
                >
                  <div className="wrapasterik">
                    <span className="asterik">*</span>
                    <Input placeholder="Address line 1" />
                  </div>
                </Form.Item>
                <Form.Item label="Address line 2" name="address2">
                  <div className="wrapasterik">
                    <span className="asterik"> &nbsp;&nbsp;</span>
                    <Input placeholder="Address line 2" />
                  </div>
                </Form.Item>

                <Form.Item
                  label="Date of Birth"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <div className="wrapasterik">
                    <span className="asterik">*</span>
                    <DatePicker
                      placeholder="DD/MM/YYYY"
                      style={{ width: "100%" }}
                    />
                  </div>
                </Form.Item>

                <Form.Item label="Image" name="image">
                  <div className="wrapasterik">
                    <span className="asterik">*</span>
                    <Upload {...props}>
                      <Button
                        icon={<UploadOutlined />}
                        style={{ width: "120%" }}
                      >
                        Choose a file or Drag an image
                      </Button>
                    </Upload>
                  </div>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </div>
        <div className="employment_details">
          <div className="tab2_header">
            <div className="tab2_heading">Employment Details :</div>
          </div>

          <Divider></Divider>
          <Row justify="start">
            <Col span={12}>
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
                  label="Employee ID"
                  name="empid"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Employee ID!",
                    },
                  ]}
                >
                  <div className="wrapasterik">
                    <span className="asterik">*</span>
                    <Input placeholder="Employee ID" />
                  </div>
                </Form.Item>

                <Form.Item
                  name="emailid"
                  label="Email Address"
                  rules={[
                    {
                      type: "email",
                      required: true,
                      message: "Please input your Email Address!",
                    },
                  ]}
                >
                  <div className="wrapasterik">
                    <span className="asterik">*</span>
                    <Input placeholder="Email Address" />
                  </div>
                </Form.Item>

                <Form.Item
                  label="Date of joining"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <div className="wrapasterik">
                    <span className="asterik">*</span>
                    <DatePicker
                      placeholder="DD/MM/YYYY"
                      style={{ width: "100%" }}
                    />
                  </div>
                </Form.Item>

                {/* <Form.Item
                  name="place"
                  label="Place of Businesss"
                  rules={[{ required: true, message: "Missing Place" }]}
                >
                  <div className="wrapasterik">
                    <span className="asterik">*</span>
                    <Select
                      placeholder="Place of Businesss"
                      options={places}
                      onChange={handleChange}
                    />
                  </div>
                </Form.Item> */}

                <Form.Item
                  name="emptype"
                  label="Employment Type"
                  rules={[{ required: true, message: "Missing Type" }]}
                >
                  <div className="wrapasterik">
                    <span className="asterik">*</span>
                    <Select
                      placeholder="Employment Type"
                      options={emptype}
                      onChange={handleType}
                    />
                  </div>
                </Form.Item>

                <Form.Item
                  name="emptype"
                  label="Designation"
                  rules={[{ required: true, message: "Missing Designation" }]}
                >
                  <div className="wrapasterik">
                    <span className="asterik">*</span>
                    <Select
                      placeholder="Designation"
                      options={Designation}
                      onChange={handleDesignation}
                    />
                  </div>
                </Form.Item>

                <Form.Item
                  name="emptype"
                  label="Department"
                  rules={[{ required: true, message: "Missing Department" }]}
                >
                  <div className="wrapasterik">
                    <span className="asterik">*</span>
                    <Select
                      placeholder="Department"
                      options={Department}
                      onChange={handleDepartment}
                    />
                  </div>
                </Form.Item>
              </Form>
            </Col>
            <Col span={12}>
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
                <Form.Item label="Experienece" name="experienece">
                  <div className="wrapasterik">
                    <span className="asterik"> &nbsp;&nbsp;</span>
                    <Input placeholder="Experienece " />
                  </div>
                </Form.Item>

                <Form.Item label="Highest Qualification" name="qualification">
                  <div className="wrapasterik">
                    <span className="asterik"> &nbsp;&nbsp;</span>
                    <Input placeholder="Highest Academic Qualification" />
                  </div>
                </Form.Item>

                <Form.Item label="Exit Date">
                  <div className="wrapasterik">
                    <span className="asterik"> &nbsp;&nbsp;</span>
                    <DatePicker
                      placeholder="DD/MM/YYYY"
                      style={{ width: "100%" }}
                    />
                  </div>
                </Form.Item>

                <Form.Item
                  name="emailid"
                  label="Manager/Supervisor"
                  rules={[
                    {
                      type: "email",
                      required: true,
                      message: "Please input Manager's Email Address!",
                    },
                  ]}
                >
                  <div className="wrapasterik">
                    <span className="asterik">*</span>
                    <Input placeholder="manager@gmail.com" />
                  </div>
                </Form.Item>

                <Form.Item
                  name="permission"
                  label="Permission Level"
                  rules={[
                    {
                      required: true,
                      message: "Missing Permission",
                    },
                  ]}
                >
                  <div className="wrapasterik">
                    <span className="asterik">*</span>
                    <Select
                      placeholder="Permission Level"
                      options={permission}
                      onChange={handlePermission}
                    />
                  </div>
                </Form.Item>

                <Form.Item label="Resume" name="resume">
                  <div className="wrapasterik">
                    <span className="asterik"> &nbsp;&nbsp;</span>
                    <Upload {...props}>
                      <Button
                        icon={<UploadOutlined />}
                        style={{ width: "120%" }}
                      >
                        Choose a file or Drag an image
                      </Button>
                    </Upload>
                  </div>
                </Form.Item>
              </Form>
            </Col>
            <div className="Button">
              <div>
                {" "}
                <Button className="cancelbtn" icon={<CloseOutlined />}>
                  Cancel
                </Button>
              </div>
              <div>
                {" "}
                <Button className="savebtn" icon={<CheckOutlined />}>
                  Save
                </Button>
              </div>
            </div>
          </Row>
        </div>
      </div>
    );
}

export default Emponboarding;
