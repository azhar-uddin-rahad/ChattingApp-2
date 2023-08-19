import { Button } from "@mui/material";
import profile from "../assets/profile.png";
import { IoMdAdd } from "react-icons/io";
import { getDatabase, ref, onValue, set, push, remove } from "firebase/database";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
const UserList = () => {
  const db = getDatabase();
  const auth = getAuth();
  const [userList,setUserList]=useState([]);
  const [friendRequest,setFriendRequest]=useState([])
  useEffect(() => {
    const friendRequestRef = ref(db, "friendRequest/");
    onValue(friendRequestRef, (snapshot) => {
     let arr=[];
     snapshot.forEach(item=>{
        arr.push(item.val().receiverId + item.val().senderId)
        
     })
     setFriendRequest(arr)
  
    });
   
  }, []);
  useEffect(() => {
    const usersRef = ref(db, "users/");
    onValue(usersRef, (snapshot) => {
     let arr=[];
     snapshot.forEach(item=>{
        arr.push({...item.val(),id:item.key})
     })
     setUserList(arr)
    });
   
  }, []);
  const handleFriendRequest=(item)=>{
    set(push(ref(db,'friendRequest/')), {
        senderId: auth.currentUser.uid,
        senderName: auth.currentUser.displayName,
        receiverId: item.id,
        receiverName: item.username
      });
  }
  const handleFriendReqCancel=()=>{
    remove(ref(db,'friendRequest',))
  }
 
  return (
    <div className="box">
      <div className="group-heading">
        <h3>User List</h3>
        <Button>Create Account</Button>
      </div>
        {userList.map((users,index)=>
             <div key={index} className="group-card-body">
             <div className="profile">
               <img src={profile} alt="" />
             </div>
             <div className="title">
               <h4 className="groupsName">{users.username}</h4>
               <p className="messageTitle">{users.email}</p>
             </div>
             {friendRequest.includes(users.id+auth.currentUser.uid)?
              <Button className="addBtn" size="small" onClick={()=>handleFriendReqCancel(users)}>
              cancel
            </Button>
             :
             <Button className="addBtn" onClick={()=>handleFriendRequest(users)}>
             <IoMdAdd className="addIcon" />
           </Button>
             }
           
           </div>
        )}
      
    </div>
  );
};

export default UserList;
