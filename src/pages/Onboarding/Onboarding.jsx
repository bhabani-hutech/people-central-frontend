import React,{useState,useEffect} from "react";
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
import Employeement from "../../Components/Employeement/Employeement";
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import Employeelist from '../../Components/employeelist/employeelist'
import Holiday from "../../Components/holiday/holiday";
import Clientonboarding from "../../Components/clientonboard/clientonboarding";
import Profile from '../../Components/profile/profile'

import {userlogin} from '../../action/useraction' 
import Payslip from "../../Components/payslip/payslip";

const { Content } = Layout;
const { TabPane } = Tabs;

const Onboarding = () => {
  const [loading, setloading] = useState(false)
  function callback(key) {
    console.log(key);
  
  }
  const userloginn = useSelector(state => state.userlogin)
  let history = useHistory()
  let {loading:userloading, userinfo, error} = userloginn
  let {isAdmin} = userinfo
  console.log(isAdmin)
  
  
  
  useEffect(() => {
    if(!userinfo){    
      history.push('/')
    }


  }, [history])
  return (
    <>
    {userloading && setloading(true)}



      <Layout className="layout">
        <Content style={{ padding: "0 50px" }}>
          <div className="onboarding-content">
            <Tabs
              className="layout-content-heading"
              defaultActiveKey="2"
              onChange={callback}
            >
              {/* {isAdmin && 
              <TabPane tab="Client Onboarding" key="1">
              <Clientonboarding /> 
             </TabPane>
              } */}
               
              <TabPane tab="Client Onboarding" key="1">
              <Clientonboarding /> 
             </TabPane>
            
              
               <TabPane tab="Employee Onboarding" key="2">
               <Emponboarding />
             </TabPane>
              
             
                
              <TabPane tab="Designation" key="3">
              <Designation/>
            </TabPane>
              
               
              <TabPane tab="Role" key="4">
              <Role/>
            </TabPane>
              
               
              <TabPane tab="Department" key="5">
              <Department/>
            </TabPane>
              
              
              <TabPane tab="view all employee" key="6">
                
              <Employeelist /> 
             </TabPane>
              
              
              
              <TabPane tab="holiday" key="7">
              <Holiday />
            </TabPane>
              
              
               
               <TabPane tab="employee profile" key="8">
               <Profile /> 
              </TabPane>
                      
              <TabPane tab="payslip" key="9">
              
              <Payslip />
            </TabPane>

              {/* <TabPane tab="employee profile" key="8">
               <Profile /> 
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
