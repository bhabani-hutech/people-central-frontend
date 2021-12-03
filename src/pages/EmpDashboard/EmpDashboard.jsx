/* eslint-disable no-unused-vars */
import { Layout } from "antd";
import "antd/dist/antd.css";
import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../Components/Appfooter/Appfooter";
import Appheader from "../../Components/Appheader/Appheader";
import Appsidebar from "../../Components/Appsidebar/Appsidebar";
import Home from "../../Components/Home/Home";
import constants from "../../constants/Constants";
import AppDirectory from "../AppDirectory/AppDirectory";
import AppProfile from "../AppProfile/AppProfile";
import "./EmpDashboard.scss";

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
