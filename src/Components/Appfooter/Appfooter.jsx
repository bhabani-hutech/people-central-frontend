import React from 'react'
import { Layout } from "antd";
import "antd/dist/antd.css";
const { Footer } = Layout;
const AppFooter = () => {
    return (
        <Footer style={{ textAlign: "center", background: "white" }}>
          © PeopleCentral 2021 &nbsp;&nbsp;&nbsp;&nbsp; Terms & Conditions
          &nbsp;&nbsp;&nbsp;&nbsp; Privacy Policy &nbsp;&nbsp;&nbsp;&nbsp;
          Cookie Preferences&nbsp;&nbsp;&nbsp;&nbsp; Contact Us
        </Footer>
    );
}

export default AppFooter;
