import React from "react";
import "../Home/Home.scss";
import "../../pages/Dashboard/Dashboard.scss";
import setting from "../../assets/images/setting.png";
import EmpOnboard from "../../assets/images/emponboard.png";
import { useHistory } from "react-router-dom";
import { Layout } from "antd";
import banner from "../../assets/images/Group 235.png";
const { Content } = Layout;

const Home = () => {
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
  ];
  let history = useHistory();
  const handelOnboarding = () => {
    console.log("Onboarding");
    history.push("/onboarding");
  };
  const handelSetting = () => {
    console.log("Setting");
  };
  return (
    <div className="container">
      <Content className="site-layout-content">
        <div className="banner">
          <img src={banner} alt="Admin Banner"></img>
        </div>
        <div className="cardgroup" >
          {cards.map((items) => {
            return (
              <div className="card">
                <div className="sec1">
                  <img
                    src={items.backgroundimage}
                    alt={items.alt}
                    onClick={
                      items.title === "Onboading"
                        ? handelOnboarding
                        : handelSetting
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
