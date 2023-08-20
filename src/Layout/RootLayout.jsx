import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import profile from "../assets/profile.png";
import { AiOutlineHome, AiFillMessage, AiFillSetting } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import { VscSignOut } from "react-icons/vsc";
import { getAuth, signOut } from "firebase/auth";
const RootLayout = () => {
  const auth = getAuth();
    const navigate=useNavigate()
  const handleSignOut=()=>{

    signOut(auth).then(() => {
        navigate("/login")
        localStorage.removeItem("user")
      }).catch((error) => {
       
      });
}


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
            <li onClick={handleSignOut}><NavLink className="icon" ><VscSignOut></VscSignOut></NavLink></li>
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
