import React, {useContext} from "react";
import {UsersContext} from "./context";


const UserDetails=()=>{
  const {selectedUser}=useContext(UsersContext);

  return(
    <div>
      <h4>User Details:</h4>
      {selectedUser && selectedUser.name ? (
        <>
        <p>Selected username: <strong>{selectedUser.name}</strong></p>
        <p>id: <strong>{selectedUser.id}</strong></p>
        </>
      ):(
        <p>Please select user on the user list</p>
      )}
    </div>
  )
}
export default UserDetails;