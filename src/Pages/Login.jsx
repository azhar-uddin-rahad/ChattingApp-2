import React from 'react';
import Image from '../Components/Image';
import log from "../assets/log.png";
import { Button, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='authenticationPage'>
    <div className='left'>
        <div className='text-container'>
            <h1>Login to your account!</h1>

            <p>Free register and you can enjoy it</p>   
            <TextField type='text' id="outlined-basic" label="Email Address" variant="outlined"  className='inputCss'/>

            <TextField type='password' id="outlined-basic" label="Password" variant="outlined"  className='inputCss'/>

            <Button variant="contained" className='SignUpBtn'>Login to Continue</Button>
            <Typography variant="p" component="p" className='semiText'>Don’t have an account ? <Link className='orange'> Sign up</Link></Typography>
        </div>
    </div>
    <div className='right'>
        <Image ImgSrc={log} className={"bg"}></Image>
    </div>
    
</div>
  )
}

export default Login