import React from 'react';
import Image from '../Components/Image';
import reg from "../assets/reg.png";
import { Button, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div className='authenticationPage'>
            <div className='left'>
                <div className='text-container'>
                    <h1>Get started with easily register</h1>

                    <p>Free register and you can enjoy it</p>   

                    <TextField type='text' id="outlined-basic" label="FirstName" variant="outlined" className='inputCss'/>

                    <TextField type='text' id="outlined-basic" label="Email" variant="outlined"  className='inputCss'/>

                    <TextField type='password' id="outlined-basic" label="Password" variant="outlined"  className='inputCss'/>

                    <Button variant="contained" className='SignUpBtn'>Sign up</Button>
                    <Typography variant="p" component="p" className='semiText'>Already have an account ? <Link className='orange'>Sign In</Link></Typography>
                </div>
            </div>
            <div className='right'>
                <Image ImgSrc={reg} className={"bg"}></Image>
            </div>
            
        </div>
    );
};

export default Registration;