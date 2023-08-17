import { Button } from '@mui/material';
import React from 'react';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
const Home = () => {
    
    const auth = getAuth();
    const navigate=useNavigate()
const handleSignOut=()=>{

    signOut(auth).then(() => {
        navigate("/login")
      }).catch((error) => {
       
      });
}

    return (
        <div>
            <Button variant="contained" onClick={handleSignOut}>Contained</Button>
        </div>
    );
};

export default Home;