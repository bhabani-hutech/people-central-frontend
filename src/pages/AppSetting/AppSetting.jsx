/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Layout, Tabs } from "antd";
import "antd/dist/antd.css";
import React, { useEffect } from "react";
// import Employeement from "../../Components/Employeement/Employeement";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import AppFooter from "../../Components/Appfooter/Appfooter";
// import Role from "../../Components/Role/Role";
import Department from "../../Components/Department/Department";
import Designation from "../../Components/Designation/Designation";
import Holiday from "../../Components/holiday/holiday";
import "./AppSetting.scss";

const { Content } = Layout;

const { TabPane } = Tabs;

const AppSetting = () => {
  function callback(key) {
    console.log(key);
  }
  const userloginn = useSelector((state) => state.userlogin);
  let history = useHistory();
  let { loading, userinfo, error } = userloginn;
  useEffect(() => {
    if(!userinfo){

      history.push('/')
    }
  }, [history])

  return (
    <>
      <Layout className="layout">
        <Content style={{ padding: "0 50px" }}>
          <div className="onboarding-content">
            <Tabs
              className="layout-content-heading"
              defaultActiveKey="1"
              onChange={callback}
            >
             
              <TabPane tab="Designation" key="1">
                <Designation />
              </TabPane>
             
              <TabPane tab="Department" key="2">
                <Department />
              </TabPane>
             
              <TabPane tab="Holiday" key="3">
                <Holiday />
              </TabPane>
            </Tabs>
          </div>
        </Content>
        <AppFooter />
      </Layout>
    </>
  );
};

export default AppSetting;
