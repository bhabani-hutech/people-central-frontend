/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Layout, Tabs } from "antd";
import "antd/dist/antd.css";
import "./AppDirectory.scss";
import AppFooter from "../../Components/Appfooter/Appfooter";
import Emponboarding from "../../Components/Emponboarding/Emponboarding";
// import Designation from "../../Components/Designation/Designation";
// import Role from "../../Components/Role/Role";
// import Department from "../../Components/Department/Department";
// import Employeement from "../../Components/Employeement/Employeement";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Employeelist from "../../Components/employeelist/employeelist";
// import Holiday from "../../Components/holiday/holiday";
import Clientonboarding from "../../Components/clientonboard/Clientonboarding";
import Profile from "../../Components/profile/profile";

// import {userlogin} from '../../action/useraction'
import Payslip from "../../Components/payslip/payslip";

const { Content } = Layout;
const { TabPane } = Tabs;

const AppDirectory = () => {
  // eslint-disable-next-line no-unused-vars
  const [loading, setloading] = useState(false);
  function callback(key) {
    console.log(key);
  }
//   const userloginn = useSelector((state) => state.userlogin);
  // const emploginn = useSelector((state) => state.emplogin);
  let history = useHistory();
//   let { loading: userloading, userinfo, error } = userloginn;
  // let { loading: emploading, empinfo, emperror } = emploginn;
//   let { isAdmin } = userinfo;
  //  let { isEmp } = empinfo;
//   console.log(isAdmin);

  // console.log(isEmp);

//   useEffect(() => {
//     if (!userinfo) {
//       history.push("/");
//     }
   
//   }, [history]);
  return (
    <>
      {/* {userloading && setloading(true)} */}

      <Layout className="layout">
        <Content style={{ padding: "0 50px" }}>
          <div className="onboarding-content">
            <Tabs
              className="layout-content-heading"
              defaultActiveKey="1"
              onChange={callback}
            >
              {/* {isAdmin ? ( */}
              <>
                <TabPane tab="View Onboarded Employee" key="1">
                  <Employeelist />
                </TabPane>
               
              </>
              {/* ) : (
                <TabPane tab="View Onboarded Employee" key="1">
                  <Employeelist />
                </TabPane>
              )} */}
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

export default AppDirectory;
