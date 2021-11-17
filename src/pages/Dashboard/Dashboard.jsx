import React,{useEffect} from "react";
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

import {useSelector} from 'react-redux'

const {
  ROUTES: { ONBOADING },
} = constants;
const Dashboard = ({history}) => {
  const userlogin = useSelector(state => state.userlogin)
let {laoding, userinfo, error} = userlogin

if(userinfo){
  let {isAdmin} = userinfo

}
useEffect(() => {
  if(!userinfo){
     
    history.push('/')
  }  



}, [history])
   const location = useLocation();
   console.log(location.pathname);
  return (
    <Layout>
      <Appsidebar />
      <Layout className="site-layout">
        <Appheader />
        {location.pathname.includes(ONBOADING) && userinfo ? (
           
            <Onboarding/>
          
          ) : (
            <Home/>
          )}
        <Footer />
      </Layout>
    </Layout>
  );
};

export default Dashboard;
