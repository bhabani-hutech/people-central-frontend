import React, { useState } from "react";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import {
  MenuOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  // DownOutlined,
} from "@ant-design/icons";
import "../Appsidebar/Appsidebar.scss"
const { Sider } = Layout;

const Appsidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggle = () => {
      setCollapsed(!collapsed);
    };
  return (
    <div className="sidebar">
      <Sider
        style={{ height: "100%" }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">
            {React.createElement(collapsed ? MenuOutlined : MenuOutlined, {
              className: "trigger",
              onClick: toggle,
            })}
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            Onboarding
          </Menu.Item>
          <Menu.Item key="3" icon={<SettingOutlined />}>
            Settings
          </Menu.Item>
          <Menu.Item key="4" icon={<LogoutOutlined />}>
            Log Out
          </Menu.Item>
        </Menu>
      </Sider>
    </div>
  );
};

export default Appsidebar;
