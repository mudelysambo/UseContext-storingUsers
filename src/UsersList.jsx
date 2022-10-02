import React, {useState, useContext} from "react";
import clsx from "clsx";
import {UsersContext} from "./context";

const UsersList=props=>{
  const usersContext=useContext(UsersContext);

const {users, selectedUser, setSelectedUser}=UsersContext;


return (
  <div>
    <h4>User:  </h4>
    {users.map(user=>{
      const userItemClassName = clsx("user-item", {
        "uset-item-selected": user.id===setSelectedUser.id
      });
   

  return(
    
    <div className={userItemClassName}
    key={users.id}
    onClick={()=> setSelectedUser(user)}>
      {user.name}
</div>
  );
})}
  </div>
)

}
export default UsersList;