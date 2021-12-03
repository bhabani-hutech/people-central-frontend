/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Layout, Tabs } from "antd";
import "antd/dist/antd.css";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import AppFooter from "../../Components/Appfooter/Appfooter";
import Profile from "../../Components/profile/profile";
import "./AppProfile.scss";
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
