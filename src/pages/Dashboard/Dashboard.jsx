/* eslint-disable no-unused-vars */
import { Layout } from "antd";
import "antd/dist/antd.css";
import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";
import Footer from "../../Components/Appfooter/Appfooter";
import Appheader from "../../Components/Appheader/Appheader";
import Appsidebar from "../../Components/Appsidebar/Appsidebar";
import Home from "../../Components/Home/Home";
import constants from "../../constants/Constants";
import AppPayslip from "../AppPayslip/AppPayslip";
import AppSetting from "../AppSetting/AppSetting";
import Onboarding from "../Onboarding/Onboarding";
import "./Dashboard.scss";

const {
  ROUTES: { ONBOADING, SETTING, PAYSLIP },
} = constants;
const Dashboard = ({history}) => {
  const userlogin = useSelector(state => state.userlogin);
  let { laoding, userinfo, error } = userlogin
  // const emploginn = useSelector((state) => state.emplogin);
  // let { emploading, empinfo, emperror } = emploginn;

if(userinfo){
  let {isAdmin} = userinfo

}
useEffect(() => {
  if(!userinfo){
     
    history.push('/')
  }  
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [history])
  
   const location = useLocation();
   console.log(location.pathname);
  return (
    // <Layout>
    //   <Appsidebar handleClick={handleMenuClick} />
    //   <Layout className="site-layout">
    //     <Content>
    //       <Appheader />
    // {location.pathname.includes(ONBOADING) ? (
    //   <Onboarding />
    // ) : location.pathname.includes(SETTING) ? (
    //   <AppSetting />
    // ) : (
    //   <Home />
    // )}
    //       <Footer />
    //     </Content>
    //   </Layout>
    // </Layout>
    <Layout>
      <Appsidebar />
      <Layout className="site-layout">
        <Appheader />
        {/* {location.pathname.includes(ONBOADING) ? (
          <Onboarding />
        ) : location.pathname.includes(SETTING) ? (
          <AppSetting />
        ) : (
          <Home />
        )} */}
        {location.pathname.includes(ONBOADING) && userinfo ? (
          <Onboarding />
        ) : location.pathname.includes(SETTING) && userinfo ? (
          <AppSetting />
        ) : location.pathname.includes(PAYSLIP) && userinfo ? (
          <AppPayslip />
        ) : (
          <Home />
        )}
        <Footer />
      </Layout>
    </Layout>
  );
};

export default Dashboard;
