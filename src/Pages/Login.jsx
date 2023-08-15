import React, { useState } from "react";
import Image from "../Components/Image";
import log from "../assets/log.png";
import { Alert, Button, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
const Login = () => {
  const auth = getAuth();
  const navigate=useNavigate()
  const [fromData, setFromData] = useState({
    email: "",
    password: "",
    loading: "",
  });
  const [error, setError] = useState({
    emailError: "",
    passwordError: "",
  });
  const handleChange = (e) => {
    setFromData({
      ...fromData,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === "email") {
      setError({ ...error, emailError: "" });
    }
    if (e.target.name === "password") {
      setError({ ...error, passwordError: "" });
    }
  };
  const handleLogin = () => {
    const newError = {};
    
    if (!fromData.password) {
      newError.passwordError = "Password is required";
    }
    if (!fromData.email) {
      newError.emailError = "Email is required";
    }
    setError({
      ...error,
      ...newError,
    });
    if (fromData.email && fromData.password) {
      setFromData({
        ...fromData,
        loading: true,
      });
      signInWithEmailAndPassword(auth, fromData.email, fromData.password)
        .then((user) => {
          console.log(user);
          if(user.user.emailVerified){
            setFromData({
                email: "",
                password: "",
                loading: false,
              });
              toast.success('User Login SuccessFul', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });

               setTimeout(()=>{
                    navigate('/home')
                  })
                
          }
          else{
            toast.error('Please verify your email address', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
          }
        
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if(errorCode.includes("auth")){
            toast.error(`${errorCode.split('/')[1]}`, {
              position: "bottom-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
            
          }
        });
    }
  };
  return (
    <div className="authenticationPage">
      <div className="left">
        <div className="text-container">
          <h1>Login to your account!</h1>

          <p>Free register and you can enjoy it</p>
          <TextField
            type="text"
            onChange={(e) => handleChange(e)}
            name="email"
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            className="inputCss"
          />
          {error.emailError && (
            <Alert severity="error" className="mt-2">
              {error.emailError}
            </Alert>
          )}

          <TextField
            type="password"
            onChange={(e) => handleChange(e)}
            name="password"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            className="inputCss"
          />
          {error.passwordError && (
            <Alert severity="error" className="mt-2">
              {error.passwordError}
            </Alert>
          )}
          <Button
            variant="contained"
            onClick={handleLogin}
            className="SignUpBtn"
          >
            Login to Continue
          </Button>
          <Typography variant="p" component="p" className="semiText">
            Don’t have an account ? <Link className="orange"> Sign up</Link>
          </Typography>
        </div>
      </div>
      <div className="right">
        <Image ImgSrc={log} className={"bg"}></Image>
      </div>
    </div>
  );
};

export default Login;
