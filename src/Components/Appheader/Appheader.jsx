import {
  DownOutlined, LogoutOutlined, SettingOutlined
} from "@ant-design/icons";
import { Dropdown, Layout, Menu } from "antd";
import "antd/dist/antd.css";
import React from "react";
import { useHistory } from "react-router-dom";
import calling from "../../assets/images/Calling.png";
import img4 from "../../assets/images/logo.png";
import profile from "../../assets/images/profile.png";
import "./Appheader.scss";

const d = new Date();
let day = d.toDateString();
console.log(day);

 

const { Header } = Layout;
const Appheader = () => {
   let history = useHistory();
  const handelBack = ()=>{
    console.log("back");
      history.push("/dashboard");
  }
  const handleSetting = () => {
    history.push("/setting");
  };
  const handleLogout = () => {
    history.push("/");
  };
  const menu = (
    <Menu>
      <Menu.Item key="0" icon={<SettingOutlined />} onClick={handleSetting}>
        Setting
      </Menu.Item>
      <Menu.Item key="1" icon={<LogoutOutlined />} onClick={handleLogout}>
        Log Out
      </Menu.Item>
    </Menu>
  );
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
            <img src={img4} alt="logo" onClick={handelBack} />
          </div>
          <div className="webclock">
            {/* <Clock /> */}
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
