/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Divider,
  Button,
  Row,
  Col,
  Form,
  message,
  Input,
  Select,
  // Table, Modal
} from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import "./Clientonboarding.scss";
import "antd/dist/antd.css";

import { useDispatch, useSelector } from "react-redux";
import { clientonboard } from "../../action/useraction";
const currency = ["rupiya", "lira"];
const paymentterm = ["Upon receipt", "Advance payment"];

const Clientonboarding = () => {
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const dispatch = useDispatch();

  const clientcreate = useSelector((state) => state.clientcreate);

  let { loading: clientloading, client, success, error } = clientcreate;

  const onFinish = (values) => {
    console.log("Success:", values);
    let website = values.website;
    let urlcheck =
      // eslint-disable-next-line no-useless-escape
      /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    if (!website.match(urlcheck)) {
      alert("wrong url");
    } else {
      let client = {
        customerName: values.customername,
        website: values.website,
        email: values.clientEmail,
        addressLine1: values.address1,
        addressLine2: values.address2,
        phoneNumber: values.phnoeNumber,
        gSTNumber: values.gstn,
        cIN: values.cin,
        paymentTerms: values.paymentterm,
        currency: values.Currency,
      };

      dispatch(clientonboard(client));
      if (success) {
        alert("client onboarded");
      }
    }
    console.log(website);
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  let clearform = () => {
    form.resetFields();
  };

  return (
    <div>
      <Form
        form={form}
        colon={false}
        requiredMark={false}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="user_details">
          <div className="tab3_header">
            <div className="tab3_heading">Client onboarding :</div>

            <div className="tab3_subheading">
              <span className="span_heading">*</span>&nbsp;indicates mandatory
              fields
            </div>
          </div>
          <Divider></Divider>
          <Row justify="start">
            <Col span={12}>
              <Form.Item
                label="Customer Name"
                name="customername"
                rules={[
                  {
                    required: true,
                    message: "Please input Customer Name!",
                  },
                ]}
              >
                <Input placeholder="Customer Name" />
              </Form.Item>

              <Form.Item
                name="clientEmail"
                label="Email Address"
                rules={[
                  {
                    type: "email",
                    required: true,
                    message: "Please input Email Address!",
                  },
                ]}
              >
                <Input placeholder="Email Address" />
              </Form.Item>

              <Form.Item
                name="phnoeNumber"
                label="Phone Number"
                rules={[
                  {
                    required: true,
                    message: "Please input Phone Number!",
                  },
                ]}
              >
                <Input placeholder="Phone Number" />
              </Form.Item>

              <Form.Item
                label="Website"
                name="website"
                rules={[
                  {
                    required: true,
                    message: "Please input Website!",
                  },
                ]}
              >
                <Input placeholder="Website" />
              </Form.Item>

              <Form.Item name="Currency" label="Currency">
                <Select placeholder="Select Currency" className="empdropdown">
                  {currency.map((fr, index) => {
                    return (
                      <Select.Option key={index} value={fr}>
                        {fr}
                      </Select.Option>
                    );
                  })}
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="CIN Number" name="cin">
                <Input placeholder="CIN Number" />
              </Form.Item>
              <Form.Item label="GSTN Number" name="gstn">
                <Input placeholder="GSTN Number" />
              </Form.Item>
              <Form.Item
                label="Address Line 1"
                name="address1"
                rules={[
                  {
                    required: true,
                    message: "Please input Address!",
                  },
                ]}
              >
                <Input placeholder="Address Line 1" />
              </Form.Item>
              <Form.Item label="Address Line 2" name="address2">
                <Input placeholder="Address Line 2" />
              </Form.Item>

              <Form.Item
                name="paymentterm"
                label="Payment Term"
                rules={[
                  {
                    required: true,
                    message: "Please input Payment Term",
                  },
                ]}
              >
                <Select
                  placeholder="Select Payment Term"
                  className="empdropdown"
                >
                  {paymentterm.map((fr, index) => {
                    return (
                      <Select.Option key={index} value={fr}>
                        {fr}
                      </Select.Option>
                    );
                  })}
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Button
            onClick={clearform}
            icon={<CloseOutlined />}
            className="cancelclientbtn"
          >
            Cancel
          </Button>
          <Button
            htmlType="submit"
            className="saveclientbtn"
            icon={<CheckOutlined />}
          >
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
};
export default Clientonboarding;
