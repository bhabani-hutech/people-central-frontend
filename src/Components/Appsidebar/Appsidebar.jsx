import React, { useState } from "react";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import {
  MenuOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  // DownOutlined,
} from "@ant-design/icons";

import "../Appsidebar/Appsidebar.scss"

import {useDispatch, useSelector} from 'react-redux'
import {userlogout} from '../../action/useraction'
import {useHistory} from 'react-router-dom'




const { Sider } = Layout;

const Appsidebar = () => {
       
  const userlogin = useSelector(state => state.userlogin)
  let {loading, userinfo, error} = userlogin
  let history = useHistory()
  let handlesend = ()=>{
  
    if(userinfo && userinfo.isAdmin){
     
 history.push('/onboarding')    
  
}
  else {

    history.push('/profile')
  }       
  }               
  const [collapsed, setCollapsed] = useState(false);
  const dispatch = useDispatch()
    const toggle = () => {
      setCollapsed(!collapsed);
    };
    let handlelogout = ()=>{
      dispatch(userlogout()) 
      history.push('/') 
    }
  return (
    <div className="sidebar">
      <Sider
        style={{ height: "100%" }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">
            {React.createElement(collapsed ? MenuOutlined : MenuOutlined, {
              className: "trigger",
              onClick: toggle,
            })}
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />} onClick={handlesend}>
            
            
            {userinfo && userinfo.isAdmin ? 
          'Onboarding' : 'Profile'  
          }
            
          </Menu.Item>
          <Menu.Item key="3" icon={<SettingOutlined />}>
            Settings
          </Menu.Item>
          <Menu.Item onClick={handlelogout} key="4" icon={<LogoutOutlined />}>
          
          
          Log Out
          </Menu.Item>
        </Menu>
      </Sider>
    </div>
  );
};

export default Appsidebar;