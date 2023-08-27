import { Button } from "@mui/material";
import profile from "../assets/profile.png";
import { IoMdAdd } from "react-icons/io";
import { getDatabase, ref, onValue, set, push, remove } from "firebase/database";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { useSelector } from "react-redux";

const UserList = () => {
  const db = getDatabase();
  const auth = getAuth();
  const [userList,setUserList]=useState([]);
  const [friendRequest,setFriendRequest]=useState([]);
  const userData=useSelector((state)=>(state.loggedUser.loginUser));
  


  useEffect(() => {
    const friendRequestRef = ref(db, "friendRequest/");
    onValue(friendRequestRef, (snapshot) => {
     let arr=[];
     snapshot.forEach(item=>{
    //    let key=[];
    //    key.push(item.key)
        arr.push(item.val().receiverId + item.val().senderId)    
     })
     setFriendRequest(arr);
    //  setKeys(keys)
    });
   
  }, []);
  useEffect(() => {
    const usersRef = ref(db, "users/");
    onValue(usersRef, (snapshot) => {
     let arr=[];
     snapshot.forEach(item=>{
        if(userData.uid != item.key){
          arr.push({...item.val(),id:item.key})
        }
     })
     setUserList(arr)
    });
   
  }, []);
  const handleFriendRequest=(item)=>{
    set(ref(db,'friendRequest/' + item.id), {
        senderId: auth.currentUser.uid,
        senderName: auth.currentUser.displayName,
        receiverId: item.id,
        receiverName: item.username
      });
  }
  const handleFriendReqCancel=(item)=>{
  
    remove(ref(db,'friendRequest', item.id))
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
             friendRequest.includes(auth.currentUser.uid+users.id) ?
             <Button className="addBtn" >
             Padding
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
