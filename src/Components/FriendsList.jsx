import { Button } from '@mui/material'
import profile from '../assets/profile.png';
import {BsThreeDotsVertical} from "react-icons/bs"
const FriendsList = () => {
    return (
        <div className='box'>
       <div className='group-heading'>
       <h3 >Friends List</h3>
       <Button><BsThreeDotsVertical></BsThreeDotsVertical></Button>
       </div>
       <div className='group-card-body'>
            <div className='profile'>
                <img src={profile} alt="" />
            </div>
            <div className='title'>
                <h4 className='groupsName'>Raghav</h4>
                <p className='messageTitle'>Hi Guys, Wassup!</p>
            </div>
           <p className='messageTitle'>Today, 8:56pm</p>

       </div>
       <div className='group-card-body'>
            <div className='profile'>
                <img src={profile} alt="" />
            </div>

            <div className='title'>
                <h4 className='groupsName'>Raghav</h4>
                <p className='messageTitle'>Hi Guys, Wassup!</p>
            </div>
           <p className='messageTitle'>Today, 8:56pm</p>

       </div>
       <div className='group-card-body'>
            <div className='profile'>
                <img src={profile} alt="" />
            </div>

            <div className='title'>
                <h4 className='groupsName'>Raghav</h4>
                <p className='messageTitle'>Hi Guys, Wassup!</p>
            </div>
           <p className='messageTitle'>Today, 8:56pm</p>

       </div>
        <div className='group-card-body'>
            <div className='profile'>
                <img src={profile} alt="" />
            </div>

            <div className='title'>
                <h4 className='groupsName'>Raghav</h4>
                <p className='messageTitle'>Hi Guys, Wassup!</p>
            </div>
           <p className='messageTitle'>Today, 8:56pm</p>

       </div>
    </div>
    );
};

export default FriendsList;