import { Button } from '@mui/material';
import React from 'react';
import { getAuth, signOut } from "firebase/auth";
const Home = () => {
    
const auth = getAuth();

const handleSignOut=()=>{
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
}

    return (
        <div>
            <Button variant="contained" onClick={handleSignOut}>Contained</Button>
        </div>
    );
};

export default Home;