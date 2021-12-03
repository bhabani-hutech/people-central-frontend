/* eslint-disable no-unused-vars */
import {
    LogoutOutlined, MenuOutlined, ReconciliationOutlined, SettingOutlined, UserOutlined
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { userlogout } from "../../action/useraction";
import "../Appsidebar/Appsidebar.scss";



const { Sider } = Layout;

const Appsidebar = () => {
  const userlogin = useSelector((state) => state.userlogin);
  let { loading, userinfo, error } = userlogin;
  let history = useHistory();
  const handleOnboarding = () => {
    if (userinfo && userinfo.isAdmin) {
      history.push("/onboarding");
    } else {
      history.push("/profile");
    }
  };
  const [collapsed, setCollapsed] = useState(false);
  const dispatch = useDispatch();
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  const handlelogout = () => {
    //  if (userinfo && userinfo.isAdmin) {
    console.log("logout")
       dispatch(userlogout());
       history.push("/");
    //  }
    //  else {
    //    history.push("/");
    //  }
   
  };
  const handleSetting = () => {
    if (userinfo && userinfo.isAdmin) {
       history.push("/setting");
    } else {
      history.push("/directory");
    }
  
  };
  const handlePayslip = () => {
    if (userinfo && userinfo.isAdmin) {
       console.log("handlePayslip");
       history.push("/payslip");
    }
   
  }
  // const handleOnboarding = () => {
  //   history.push("/onboarding");
  // };
  return (
    <div className="sidebar">
      <Sider
        style={{ height: "100%" }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            {React.createElement(collapsed ? MenuOutlined : MenuOutlined, {
              className: "trigger",
              onClick: toggle,
            })}
          </Menu.Item>
          {/* <Menu.Item onClick={handleOnboarding} key="2" icon={<UserOutlined />}>
            Onboarding */}
          <Menu.Item key="2" icon={<UserOutlined />} onClick={handleOnboarding}>
            {userinfo && userinfo.isAdmin ? "Onboarding" : "Profile"}
          </Menu.Item>
          <Menu.Item key="3" onClick={handleSetting} icon={<SettingOutlined />}>
            {userinfo && userinfo.isAdmin ? "Settings" : "Directory"}
          </Menu.Item>
          {userinfo && userinfo.isAdmin &&
            <Menu.Item
              key="4"
              onClick={handlePayslip}
              icon={<ReconciliationOutlined />}
            >
              Payslip
            </Menu.Item>
          }
          <Menu.Item onClick={handlelogout} key="5" icon={<LogoutOutlined />}>
            {userinfo && userinfo.isAdmin ? "Log Out" : "Log Out"}
          </Menu.Item>
        </Menu>
      </Sider>
    </div>
  );
};

export default Appsidebar;
