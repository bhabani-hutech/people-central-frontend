import React from "react";
import { Layout } from "antd";
import constants from "../../constants/Constants";
import "antd/dist/antd.css";
import Footer from "../../Components/Appfooter/Appfooter";
import "antd/dist/antd.css";
import "./Dashboard.scss";
import Appheader from "../../Components/Appheader/Appheader";
import Appsidebar from "../../Components/Appsidebar/Appsidebar";
import Home from "../../Components/Home/Home";
import { useLocation } from "react-router-dom";
import Onboarding from "../Onboarding/Onboarding";
const {
  ROUTES: { ONBOADING },
} = constants;
const Dashboard = () => {
   const location = useLocation();
   console.log(location.pathname);
  return (
    <Layout>
      <Appsidebar />
      <Layout className="site-layout">
        <Appheader />
        {location.pathname.includes(ONBOADING) ? (
          <Onboarding/>) : (
            <Home/>
          )}
        <Footer />
      </Layout>
    </Layout>
  );
};

export default Dashboard;
