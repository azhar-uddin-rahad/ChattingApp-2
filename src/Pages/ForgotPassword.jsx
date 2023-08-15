import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const auth = getAuth();
  const navigate=useNavigate()
  const [email,setEmail]=useState("")
  const handleForgotPassword=(e)=>{
    const sendEmail=e.target.value;
    setEmail(sendEmail)

  }
  const handleBtnClick=()=>{
    sendPasswordResetEmail(auth, email)
  .then(() => {
    toast.success('Check Your Email', {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });

      navigate("/login")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
   
      toast.error('Please Enter Valid Email', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
  });

  }
  return (
    <div className='forgetPasswordContainer'>
          <div className='forgetPasswordBody'>
            <Typography component="h1" variant='h4'>Forget Password Field:</Typography>
            <TextField  type="email" id="outlined-basic" label="Email" variant="outlined" onChange={(e)=>{handleForgotPassword(e)}} className='changePassField'/>
            <Button variant="contained" onClick={handleBtnClick}>Change Password</Button>
          </div>
    </div>
  )
}

export default ForgotPassword