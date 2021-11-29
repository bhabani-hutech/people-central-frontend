/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Layout, Tabs } from "antd";
import "antd/dist/antd.css";
import "./AppProfile.scss";
import AppFooter from "../../Components/Appfooter/Appfooter";
import Emponboarding from "../../Components/Emponboarding/Emponboarding";
import Designation from "../../Components/Designation/Designation";
import Department from "../../Components/Department/Department";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Profile from "../../Components/profile/profile";
import Employeelist from "../../Components/employeelist/employeelist";
import Clientonboarding from "../../Components/clientonboard/Clientonboarding";
import Payslip from "../../Components/payslip/payslip";
const { Content } = Layout;

const { TabPane } = Tabs;

const AppProfile = () => {
  function callback(key) {
    console.log(key);
  }
  const userloginn = useSelector((state) => state.userlogin);
  let history = useHistory();
  let { loading, userinfo, error } = userloginn;
  // useEffect(() => {
  //   if (!userinfo) {
  //     history.push("/");
  //   }
  // }, [history]);

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
              <>
                {/* <TabPane tab="Employee Onboarding" key="1">
                  <Emponboarding />
                </TabPane> */}
                <TabPane tab="Personal" key="1">
                  <Profile />
                </TabPane>
                {/* <TabPane tab="payslip" key="2">
                  <Payslip />
                </TabPane> */}
             
              </>
            </Tabs>
          </div>
        </Content>
        <AppFooter />
      </Layout>
    </>
  );
};

export default AppProfile;
