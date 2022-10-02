import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const Context=createContext({});

export const Provider= props=>{
  const {
    users: initialUsers,
    selectedUser: initialSelectedUsers,
    children
  }=props
//keep our values using useStates
  const [users, setUsers]=useState(initialUsers);
  const [selectedUser, setSelectedUser]=useState(initialSelectedUsers);

  const AddNewUser=userName=>{
    const newUser={id: new Date().getTime().toString, name:userName}
    setUsers(users.concat([newUser]));
  };

    //making context object 
    const UsersContext={
      users,
      setUsers,
      selectedUser,
      setSelectedUser,
      AddNewUser
  }

  //passing values and returning something
  return <Context.Provider value={UsersContext}>{children}</Context.Provider>;
};

export const {Consumser}= Context;
Provider.PropTypes={
  users: PropTypes.array,
  selectedUser: PropTypes.object,
};

Provider.defaultProps = {
  users:[],
  selectedUser:{},
};