/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Layout } from "antd";
import constants from "../../constants/Constants";
import "antd/dist/antd.css";
import Footer from "../../Components/Appfooter/Appfooter";
import "antd/dist/antd.css";
import "./EmpDashboard.scss";
import Appheader from "../../Components/Appheader/Appheader";
import Appsidebar from "../../Components/Appsidebar/Appsidebar";
import Home from "../../Components/Home/Home";
import { useLocation } from "react-router-dom";
import Onboarding from "../Onboarding/Onboarding";
import AppSetting from "../AppSetting/AppSetting";
import { useSelector } from "react-redux";
import AppProfile from "../AppProfile/AppProfile";
import AppDirectory from "../AppDirectory/AppDirectory";

const {
  ROUTES: { ONBOADING, SETTING, PROFILE, DIRECTORY },
} = constants;
const EmpDashboard = ({ history }) => {
//   const userlogin = useSelector((state) => state.userlogin);
//   let { laoding, userinfo, error } = userlogin;
  // const emploginn = useSelector((state) => state.emplogin);
  // let { emploading, empinfo, emperror } = emploginn;

//   if (userinfo) {
//     let { isAdmin } = userinfo;
//   }
  
  // useEffect(() => {
  //   if ( !empinfo) {
  //     history.push("/");
  //   }
    
  // }, [history]);

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
      
       { location.pathname.includes(PROFILE) ? (
          <AppProfile />
        ) : location.pathname.includes(DIRECTORY) ? (
          <AppDirectory/>
        ) : (
          <Home />
        )}
        <Footer />
      </Layout>
    </Layout>
  );
};

export default EmpDashboard;
