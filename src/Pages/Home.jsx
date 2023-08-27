import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Group from '../Components/Group';
import FriendsList from '../Components/FriendsList';
import UserList from '../Components/UserList';
import FriendRequest from '../Components/FriendRequest';
import MyGroup from '../Components/MyGroup';
import BlockedUser from '../Components/BlockedUser';
import { useSelector } from 'react-redux';

const Home = () => {
    const loggedUser=useSelector((state)=>state.loggedUser.loginUser);
    const navigate=useNavigate()
   
   useEffect(()=>{
    if(loggedUser == null){
        navigate('/login')
    }


   },[])

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