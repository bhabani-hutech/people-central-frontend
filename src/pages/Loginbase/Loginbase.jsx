import React from "react";
import "antd/dist/antd.css";
import constants from "../../constants/Constants";
import "../Loginbase/Loginbase.scss";
import Login from "../../Components/Login/Login";
import {Row, Col } from "antd";
import img1 from "../../assets/images/Rectangle.png";
import img2 from "../../assets/images/Groups.png";
import img3 from "../../assets/images/Vector.png";
import img4 from "../../assets/images/Grouplogo.png";
import { useLocation } from "react-router-dom";
import Reset from "../../Components/Reset/Reset";
import Forgot from "../../Components/Forgot/Forgot";
import Create from "../../Components/Create/Create";
import Activation from "../../Components/Activation/Activation";
const {
  ROUTES: { FORGOTPASSWORD, RESET, CREATE,ACTIVATION },
  LOGIN_SUBHEADING_LABEL1,
  LOGIN_SUBHEADING_LABEL2,
} = constants;
const Loginbase = () => {
    const location = useLocation();
    console.log(location.pathname);
  return (
    <div className="maincontent">
      <Row>
        <Col span={24}>
          <Row>
            <Col className="login_left" span={10}>
              <img alt="image1" src={img1} className="image1" />
              <img alt="image2" src={img2} className="image2" />
              <img alt="image3" src={img3} className="image3" />
            </Col>
            <Col span={14}>
              <div className="main_container">
                <div className="container">
                  <div className="login_heading">
                    <div className="login_subheading1">
                      {LOGIN_SUBHEADING_LABEL1}
                    </div>
                    <div className="login_subheading2">
                      <div className="logo">
                        {" "}
                        <img alt="avtar" src={img4} className="image4" />{" "}
                      </div>
                      {LOGIN_SUBHEADING_LABEL2}
                    </div>
                  </div>
                  <div>
                    {location.pathname.includes(FORGOTPASSWORD) ? (
                      <Forgot />
                    ) : location.pathname.includes(RESET) ? (
                      <Reset />
                    ) : location.pathname.includes(CREATE) ? (
                      <Create />
                    ) : location.pathname.includes(ACTIVATION) ? (
                            <Activation />
                      ): (
                      <Login />
                    )}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Loginbase;
