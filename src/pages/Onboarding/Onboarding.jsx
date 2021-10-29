import React from "react";
import {
  Layout,
  Tabs,
} from "antd";
import "antd/dist/antd.css";
import "./Onboarding.scss";
import AppFooter from "../../Components/Appfooter/Appfooter";
import Emponboarding from "../../Components/Emponboarding/Emponboarding";
import Designation from "../../Components/Designation/Designation";
import Role from "../../Components/Role/Role";
import Department from "../../Components/Department/Department";
import Employement from "../../Components/Employement/Employement";
const { Content } = Layout;
const { TabPane } = Tabs;

const Onboarding = () => {
  function callback(key) {
    console.log(key);
  }
  return (
    <>
      <Layout className="layout">
        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">
            <Tabs
              className="layout-content-heading"
              defaultActiveKey="2"
              onChange={callback}
            >
              <TabPane tab="Client Onboarding" key="1">
                Content of Tab Pane 1
              </TabPane>
              <TabPane tab="Employee Onboarding" key="2">
                <Emponboarding />
              </TabPane>
              <TabPane tab="Employment" key="3">
                <Employement/>
                {/* Content of Tab Pane 3 */}
              </TabPane>
              <TabPane tab="Designation" key="4">
                <Designation/>
              </TabPane>
              <TabPane tab="Role" key="5">
                <Role/>
                {/* Content of Tab Pane 5 */}
              </TabPane>
              <TabPane tab="Department" key="6">
                <Department/>
                {/* Content of Tab Pane 6 */}
              </TabPane>
              <TabPane tab="Time Off" key="7">
                Content of Tab Pane 7
              </TabPane>
            </Tabs>
          </div>
        </Content>
        <AppFooter />
      </Layout>
    </>
  );
};

export default Onboarding;
