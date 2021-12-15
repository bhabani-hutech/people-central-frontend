/* eslint-disable no-unused-vars */
import { Layout, Tabs } from "antd";
import React, { useEffect, useState } from "react";
// import Designation from "../../Components/Designation/Designation";
// import Role from "../../Components/Role/Role";
// import Department from "../../Components/Department/Department";
// import Employeement from "../../Components/Employeement/Employeement";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import AppFooter from "../../Components/Appfooter/Appfooter";
// import Holiday from "../../Components/holiday/holiday";
import Clientonboarding from "../../Components/clientonboard/Clientonboarding";
import Employeelist from "../../Components/employeelist/employeelist";
import Emponboarding from "../../Components/Emponboarding/Emponboarding";
import Sheetinfo from '../../Components/sheetinfo/empinfo'
import Fileupload from '../../Components/fileupload/fileupload'


import "./Onboarding.scss";

const { Content } = Layout;

const { TabPane } = Tabs;
const Onboarding = () => {
  // eslint-disable-next-line no-unused-vars
  const [loading, setloading] = useState(false);
  function callback(key) {
    console.log(key);
  }
  const userloginn = useSelector((state) => state.userlogin);
  // const emploginn = useSelector((state) => state.emplogin);
  let history = useHistory();
  let { loading: userloading, userinfo, error } = userloginn;
  // let { loading: emploading, empinfo, emperror } = emploginn;
  let { isAdmin } = userinfo;
  //  let { isEmp } = empinfo;
  console.log(isAdmin);

  // console.log(isEmp);

  useEffect(() => {
    if (!userinfo) {
      history.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history]);
  return (
    <>
      {userloading && setloading(true)}

      <Layout className="layout">
        <Content style={{ padding: "0 50px" }}>
          <div className="onboarding-content">
            <Tabs
              className="layout-content-heading"
              defaultActiveKey="1"
              onChange={callback}
            >
              {isAdmin ? (
                <>
                  <TabPane tab="Employee Onboarding" key="1">
                    <Emponboarding />
                  </TabPane>
                  <TabPane tab="View Onboarded Employee" key="2">
                    <Employeelist />
                  </TabPane>
                  <TabPane tab="Client Onboarding" key="3">
                    <Clientonboarding />
                  </TabPane>
                  <TabPane tab='Sheet Upload' key='5'>
                    <Fileupload />
                  </TabPane>
                  <TabPane tab='Employee Payslip' key='6'>
                    <Sheetinfo />
                  </TabPane>
                 
                </>
              ) : (
                <TabPane tab="View Onboarded Employee" key="1">
                  <Employeelist />
                </TabPane>
              )}
              {/* {isEmp && (
                <> */}
              {/* </> */}

              {/* <TabPane tab="view all employee" key="6">
              <Employeelist /> 
             </TabPane> */}
              {/* <TabPane tab="employee profile" key="8">
               <Profile /> 
              </TabPane>
                      
              <TabPane tab="payslip" key="9">
              <Payslip />
            </TabPane> */}
            </Tabs>
          </div>
        </Content>
        <AppFooter />
      </Layout>
    </>
  );
};

export default Onboarding;
