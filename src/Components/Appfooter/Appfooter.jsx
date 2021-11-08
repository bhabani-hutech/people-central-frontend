import React from 'react'
import { Layout } from "antd";
import "antd/dist/antd.css";
import "../Appfooter/Appfooter.scss";
const { Footer } = Layout;
const AppFooter = () => {
    return (
      <div className="fixed_footer">
        <Footer className="app_footer">
          <div className="footer_item">© PeopleCentral 2021</div>
          <div className="footer_item">Terms & Conditions</div>
          <div className="footer_item"> Privacy Policy</div>
          <div className="footer_item">Cookie Preferences</div>
          <div className="footer_item">Contact Us</div>
        </Footer>
      </div>
    );
}

export default AppFooter;
