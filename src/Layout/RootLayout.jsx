import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Grid from "@mui/material/Grid";
import profile from "../assets/profile.png";
import { AiOutlineHome, AiFillMessage, AiFillSetting } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import { VscSignOut } from "react-icons/vsc";

const RootLayout = () => {
  return (
    <div className="container">
      <div className="containerWraper">
        <div className="navbar">
        <div className="navbar-container">
        <div className='navbarImg'>
                <img src={profile} alt="" />
            </div>
            <ul className='list'>
            <li><NavLink className="icon" to="/chatting-app/home"><AiOutlineHome></AiOutlineHome></NavLink></li>
            <li><NavLink className="icon" to="/chatting-app/message"><AiFillMessage></AiFillMessage></NavLink></li>
            <li><NavLink className="icon"  to="/chatting-app/notification"><IoIosNotifications></IoIosNotifications></NavLink></li>
            <li><NavLink className="icon"  to="/chatting-app/setting"><AiFillSetting></AiFillSetting></NavLink></li>
            <li><NavLink className="icon" to="/chatting-app/logout"><VscSignOut></VscSignOut></NavLink></li>
            </ul>
        </div>
        </div>
        <div className="layoutContent">
        <Outlet></Outlet>
        </div>
      </div>
      {/* <Grid container spacing={2}>
  <Grid item className='navbar'>
        <div className='navbar-container'>
           
        </div>
  </Grid>
  <Grid item className=''>
 
  </Grid>
</Grid> */}
    </div>
  );
};

export default RootLayout;
