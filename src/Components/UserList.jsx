import { Button } from '@mui/material'
import profile from '../assets/profile.png';
import {IoMdAdd} from 'react-icons/io'
const UserList = () => {
  return (
    <div className='box'>
    <div className='group-heading'>
    <h3 >User List</h3>
    <Button>Create Account</Button>
    </div>
    <div className='group-card-body'>
         <div className='profile'>
             <img src={profile} alt="" />
         </div>
         <div className='title'>
             <h4 className='groupsName'>Raghav</h4>
             <p className='messageTitle'>Hi Guys, Wassup!</p>
         </div>
         <Button className='addBtn'><IoMdAdd className='addIcon'/></Button>
    </div>
    <div className='group-card-body'>
         <div className='profile'>
             <img src={profile} alt="" />
         </div>

         <div className='title'>
             <h4 className='groupsName'>Raghav</h4>
             <p className='messageTitle'>Hi Guys, Wassup!</p>
         </div>
         <Button className='addBtn'><IoMdAdd className='addIcon'/></Button>

    </div>
    <div className='group-card-body'>
         <div className='profile'>
             <img src={profile} alt="" />
         </div>

         <div className='title'>
             <h4 className='groupsName'>Raghav</h4>
             <p className='messageTitle'>Hi Guys, Wassup!</p>
         </div>
         <Button className='addBtn'><IoMdAdd className='addIcon'/></Button>

    </div>
     <div className='group-card-body'>
         <div className='profile'>
             <img src={profile} alt="" />
         </div>

         <div className='title'>
             <h4 className='groupsName'>Raghav</h4>
             <p className='messageTitle'>Hi Guys, Wassup!</p>
         </div>
         <Button className='addBtn'><IoMdAdd className='addIcon'/></Button>

    </div>
 </div>
  )
}

export default UserList