import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, getAllUsers } from "../Redux/actions/actions";
import "./userList.css";
import UserCard from "./userCard";

const UserList = () => {
  const [inputs, setInputs] = useState({});
  const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);
  const isLoad = useSelector((state) => state.userReducer.isLoad);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(inputs));
    // console.log(inputs);
    setInputs({});
  };
  const handleReset = (e) => {
    e.preventDefault();
    setInputs({});
    setShowForm(false);
  };
  return (
    <div>
      <div className="list-container">
        {isLoad ? (
          <div>
            <h1>Loading...</h1>
            <div className="loader"></div>
          </div>
        ) : (
          <div className="list-container">
            {users.map((el, index) => (
              <UserCard user={el} key={index} />
            ))}
            <div className="add-card" onClick={() => setShowForm(true)}>
              +
            </div>
          </div>
        )}
      </div>
      {showForm && (
        <div className="newUser">
          <form onSubmit={handleSubmit} className="userDetail">
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={inputs.name || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Age:
              <input
                type="number"
                name="age"
                value={inputs.age || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={inputs.email || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Address:
              <input
                type="text"
                name="address"
                value={inputs.address || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Phone:
              <input
                type="text"
                name="phone"
                value={inputs.phone || ""}
                onChange={handleChange}
              />
            </label>
            <label className="form-btn">
              <input type="reset" value="Cancel" onClick={handleReset} />
              <input type="submit" value="Add" />
            </label>
          </form>
        </div>
      )}
    </div>
  );
};

export default UserList;
