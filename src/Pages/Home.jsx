import { Button } from '@mui/material';
import React from 'react';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Group from '../Components/Group';
import FriendsList from '../Components/FriendsList';
import UserList from '../Components/UserList';
import FriendRequest from '../Components/FriendRequest';
import MyGroup from '../Components/MyGroup';
import BlockedUser from '../Components/BlockedUser';
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
    <Grid container spacing={2}>
        <Grid item xs={4}>
        <Group/>
        <FriendRequest></FriendRequest>
        </Grid>
        <Grid item xs={4}>
         <FriendsList></FriendsList>
         <MyGroup></MyGroup>
        </Grid>
        <Grid item xs={4} >
        <UserList></UserList>
        <BlockedUser></BlockedUser>
        </Grid>
        
      </Grid>
        </div>
    );
};

export default Home;