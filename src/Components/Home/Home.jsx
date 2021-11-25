/* eslint-disable no-unused-vars */
import React from "react";
import "../Home/Home.scss";
import "../../pages/Dashboard/Dashboard.scss";
import setting from "../../assets/images/setting.png";
import EmpOnboard from "../../assets/images/emponboard.png";
import profile from "../../assets/images/profileicon.png";
import directory from "../../assets/images/directory.png";
import { useHistory } from "react-router-dom";
import { Layout } from "antd";
import banner from "../../assets/images/Group 235.png";
import {useSelector} from 'react-redux'
const { Content } = Layout;

const Home = () => {
  
  const userlogin = useSelector(state => state.userlogin)
  let {loading, userinfo, error} = userlogin
  if(userinfo){
    let {isAdmin} = userinfo
  
  }
  const cards = [
    {
      id: "1",
      backgroundimage: EmpOnboard,
      alt: "Onboading",
      title: "Onboading",
    },
    {
      id: "2",
      backgroundimage: setting,
      alt: "Settings",
      title: "Settings",
    },
    {
      id: "3",
      backgroundimage: setting,
      alt: "Payslip",
      title: "Payslip",
    },
  ];
  const empcards = [
    {
      id: "1",
      backgroundimage: profile,
      alt: "Profile",
      title: "Profile",
    },
    {
      id: "2",
      backgroundimage: directory,
      alt: "Directory",
      title: "Directory",
    },
  ];
  let history = useHistory();
  const handelOnboarding = () => {
    console.log("Onboarding");
    history.push("/onboarding");
  };
  const handelSetting = () => {
    console.log("Setting");
     history.push("/setting");
  };
   const handelDirectory = () => {
     console.log("directory");
     history.push("/directory");
   };
   const handelprofile = () => {
     console.log("Profile");
     history.push("/profile");
  };
  const handelPayslip = () => {
     console.log("Payslip");
     history.push("/payslip");
  }
  return (
    <div className="container">
      <Content className="site-layout-content">
        <div className="banner">
          <img src={banner} alt="Admin Banner"></img>
        </div>
        {/* {userinfo && userinfo.isAdmin ?  */}

        <div className="cardgroup">
          {userinfo && userinfo.isAdmin
            ? cards.map((items) => {
                return (
                  <div className="card">
                    <div className="sec1">
                      <img
                        src={items.backgroundimage}
                        alt={items.alt}
                        onClick={
                          items.title === "Onboading"
                            ? handelOnboarding
                            : items.title === "Settings"? handelSetting : handelPayslip
                        }
                      />
                    </div>
                    <div className="sec2">{items.title}</div>
                  </div>
                );
              })
            : empcards.map((items) => {
                return (
                  <div className="card">
                    <div className="sec1">
                      <img
                        src={items.backgroundimage}
                        alt={items.alt}
                        onClick={
                          items.title === "Directory"
                            ? handelDirectory
                            : handelprofile
                        }
                      />
                    </div>
                    <div className="sec2">{items.title}</div>
                  </div>
                );
              })}
        </div>

       
      </Content>
    </div>
  );
};

export default Home;