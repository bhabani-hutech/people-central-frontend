import React from "react";
import { Layout} from "antd";
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
import AppSetting from "../AppSetting/AppSetting";

const {
  ROUTES: { ONBOADING, SETTING },
} = constants;
const Dashboard = () => {
  // const [render, updateRender] = useState(1);
  // const style = {
  //   fontSize: "30px",
  //   height: "100%",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  // };

  const location = useLocation();
  console.log(location.pathname);
  // const handleMenuClick = (menu) => {
  //   updateRender(menu.key);
  // };
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
        {location.pathname.includes(ONBOADING) ? (
          <Onboarding />
        ) : location.pathname.includes(SETTING) ? (
          <AppSetting />
        ) : (
          <Home />
        )}
        <Footer />
      </Layout>
    </Layout>
  );
};

export default Dashboard;
