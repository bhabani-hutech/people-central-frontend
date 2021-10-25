import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../../Components/Appfooter/Appfooter"
import img4 from "../../assets/images/Grouplogo.png";
// import rect from "../../assets/images/Rectangle 4.png";
import banner from "../../assets/images/Group 235.png";
// import hutech from "../../assets/images/Hutechlogo.png";
import setting from "../../assets/images/setting.png";
import calling from "../../assets/images/Calling.png";
import EmpOnboard from "../../assets/images/emponboard.png";
import { Layout, Menu, Dropdown } from "antd";
import "antd/dist/antd.css";
import {
  MenuOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  DownOutlined,
} from "@ant-design/icons";
import "./Dashboard.scss";
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
const { Header, Sider, Content } = Layout;
const Dashboard = () => {
  let history = useHistory();
  const cards = [
    {
      id: "1",
      backgroundimage: EmpOnboard,
      alt: "Onboading",
      title: "Onboading",
    },
    {
      id: "2",
      backgroundimage: setting,
      alt: "Settings",
      title: "Settings",
    },
  ];
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  const handelOnboarding = () => {
    console.log("Onboarding");
    history.push("/onboarding");
  }
  const handelSetting = () => {
    console.log("Setting");
  }
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
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
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
            color: "white",
            background:
              "linear-gradient(147.6deg, #032848 -9.8%, #043968 117.16%)",
          }}
        >
          <div className="logo">
            <img src={img4} alt="logo" width="70px" height="70px" />
          </div>
          <div className="Menu">PeopleCentral</div>
          <div className="dropdown">
            <Dropdown overlay={menu} trigger={["click"]}>
              <a
                href
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                <UserOutlined /> My Account <DownOutlined />
              </a>
            </Dropdown>
          </div>
        </Header>
        <div style={{ background: "white", display: "flex" }}>
          <div className="title">
            For System Support please contact your on-site super Admin{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <img src={calling} alt="phone" width="15" height="15" /> +91
            1128827465
          </div>
          <div className="subtitle">{day}</div>
        </div>

        <Content
          className="site-layout-content"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <div className="banner">
            <img src={banner} alt="Admin Banner"></img>
          </div>
          <div style={{ display: "flex" }}>
            {cards.map((items) => {
              return (
                <div className="card">
                  <img
                    src={items.backgroundimage}
                    alt={items.alt}
                    width="100%"
                    onClick={
                      items.title === "Onboading"
                        ? handelOnboarding
                        : handelSetting
                    }
                  />
                  <div>{items.title}</div>
                </div>
              );
            })}
          </div>
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default Dashboard;

