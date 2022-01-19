import React from "react";
import "./userList.css";
import { BiEditAlt, BiTrash } from "react-icons/bi";
const UserCard = ({ user }) => {
  return (
    <div className="card-container">
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>      
      <div>
        <BiEditAlt />
        <BiTrash />
      </div>
    </div>
  );
};

export default UserCard;
