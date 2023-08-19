import React, { useState } from "react";
import Image from "../Components/Image";
import reg from "../assets/reg.png";
import { Alert, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification,updateProfile } from "firebase/auth";
import { LoadingButton } from "@mui/lab";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';
import { getDatabase, push, ref, set } from "firebase/database";

const Registration = () => {
  const auth = getAuth();
  const db = getDatabase();
  const navigate=useNavigate()

  const [fullNameError, setFullNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [open, setOpen] = useState(false);

  const [fromData, setFromData] = useState({
    fullName: "",
    email: "",
    password: "",
    loading: ""
  });

  const handleChange = (e) => {
    setFromData({
      ...fromData,
      [e.target.name]: e.target.value,
    });
    if (e.target.name == "fullName") {
      setFullNameError("");
    }
    if (e.target.name == "email") {
      setEmailError("");
    }
    if (e.target.name == "password") {
      setPasswordError("");
    }
    /*
       when value input any filed then all error gone
       setFullNameError("")
       setPasswordError("")
       setEmailError("") */

  };

  const handleRegistration = () => {
    if (!fromData.fullName) {
      setFullNameError("Full Name is Required");
    }
    if (!fromData.email) {
      setEmailError("Email is Required");
    }
    if (!fromData.password) {
      setPasswordError("Password is Required");
    }
    if (fromData.fullName && fromData.email && fromData.password) {   
      /* let pattern =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            let passwordRegex= /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
            if(!pattern.test(fromData.email)){
                setEmailError("Please Enter a Valid email")
            }
            if(!passwordRegex.test(fromData.password)){
                setPasswordError("password not strong")
            }
            if(fromData.fullName.length > 3 && fromData.fullName.length< 30){
                setFullNameError("Enter Valid Name")
            } */
            const {email,password}=fromData;
           setFromData({
            ...fromData,
            loading: true
          })
            createUserWithEmailAndPassword(auth,email,password).then((user)=>{
              updateProfile(auth.currentUser, {
                displayName: fromData.fullName, photoURL: "https://ibb.co/Qnf4m1K"
              }).then(() => {
                sendEmailVerification(auth.currentUser)
                .then(() => {

                  set(ref(db,'users/'+user.user.uid), {
                    username: fromData.fullName,
                    email:fromData.email,
                    profile_picture : user.user.photoURL
                  });

                  setFromData({
                    fullName: "",
                    email: "",
                    password: "",
                    loading: false
                  })
                  toast.success('Registration SuccessFull! Please  Verify Your Email', {
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
                      navigate('/login')
                    })
                    
                 
                });
               
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                setFromData({
                  ...fromData,
                  loading: false
                })
                  if(errorCode.includes("email")){
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
                      setEmailError(`${errorCode.split('/')[1]}`)
                  }
                  if(errorCode.includes("password")){
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
                    setPasswordError(`${errorCode.split('/')[1]}`)
                  }
               });
              })
            
    }
  };
  return (
    <div className="authenticationPage">
      <div className="left">
        <div className="text-container">
          <h1>Get started with easily register</h1>

          <p>Free register and you can enjoy it</p>
          <TextField
            type="text"
            value={fromData.fullName}
            onChange={handleChange}
            name="fullName"
            id="outlined-basic"
            label="fullName"
            variant="outlined"
            className="inputCss"
          />
          {fullNameError && (
            <Alert severity="error" className="mt-2">
              {fullNameError}
            </Alert>
          )}

          <TextField
            type="text"
            onChange={handleChange}
            value={fromData.email}
            name="email"
            id="outlined-basic"
            label="Email"
            variant="outlined"
            className="inputCss"
          />
          {emailError && (
            <Alert severity="error" className="mt-2">
              {emailError}
            </Alert>
          )}

          <TextField
            type={open ? "text" : "password"}
            onChange={handleChange}
            value={fromData.password}
            name="password"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            className="inputCss"
          />
          {open ? (
             <AiFillEye onClick={()=>setOpen(false)} className="eye"></AiFillEye>
          ) : (
            <AiFillEyeInvisible onClick={()=>setOpen(true)} className="eye"></AiFillEyeInvisible>
          )}
          {passwordError && (
            <Alert severity="error" className="mt-2">
              {passwordError}
            </Alert>
          )}

          {fromData.loading ? <LoadingButton loading variant="outlined" className="SignUpBtn">
            Submit
          </LoadingButton> :
           <Button
           variant="contained"
           onClick={handleRegistration}
           className="SignUpBtn"
         >
           Sign up
         </Button>

           }
          

         
          <Typography variant="p" component="p" className="semiText">
            Already have an account ? <Link className="orange">Sign In</Link>
          </Typography>
        </div>
      </div>
      <div className="right">
        <Image ImgSrc={reg} className={"bg"}></Image>
      </div>
    </div>
  );
};

export default Registration;
