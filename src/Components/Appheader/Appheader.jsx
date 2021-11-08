import React from "react";
import img4 from "../../assets/images/Grouplogo.png";
import { Dropdown, Menu, Layout } from "antd";
import calling from "../../assets/images/Calling.png";
import profile from "../../assets/images/profile.png";
import "antd/dist/antd.css";
import {
  DownOutlined,
} from "@ant-design/icons";
import "./Appheader.scss";
const d = new Date();
let day = d.toDateString();
console.log(day);
const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="https://www.antgroup.com">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="https://www.aliyun.com">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);
const { Header } = Layout;
const Appheader = () => {
  return (
    <>
      <div className="fixed_header">
        <div className="header">
          <div className="title">
            <div className="title1">
              {" "}
              For System Support please contact your on-site super Admin{" "}
            </div>
            <div className="title2">
              {" "}
              <img
                src={calling}
                alt="phone"
                width="15"
                height="15"
                color="#fff"
              />{" "}
              +91 1128827465
            </div>
          </div>
          <div className="date">{day}</div>
        </div>
        <Header className="site-layout-background">
          <div className="logo">
            <img src={img4} alt="logo" width="70px" height="70px" />
            <div className="Menu">PeopleCentral</div>
          </div>

          <div className="dropdown">
            <Dropdown overlay={menu} trigger={["click"]}>
              <a
                href
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                <img alt="profile" src={profile} />
                {"  "}
                My Account <DownOutlined />
              </a>
            </Dropdown>
          </div>
        </Header>
      </div>
    </>
  );
};

export default Appheader;
