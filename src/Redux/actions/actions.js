import {
  ADD_USER_FAIL,
  ADD_USER_SUCCESS,
  GET_ALL_USERS,
  GET_USERS_FAIL,
  GET_USERS_LOAD,
} from "../types/types";
import axios from "axios";
export const getAllUsers = () => async (dispatch) => {
  dispatch({ type: GET_USERS_LOAD });
  try {
    let res = await axios.get("http://localhost:5000/api/user/allusers");
    dispatch({ type: GET_ALL_USERS, payload: res.data });
  } catch (err) {
    dispatch({ type: GET_USERS_FAIL, err });
  }
};

export const addUser = (inputs) => async (dispatch) => {
  try {
   
    return axios
      .post("http://localhost:5000/api/user/adduser", inputs)
      .then((data) => {
        dispatch({ type: ADD_USER_SUCCESS, payload: data });
      });
  } catch (err) {
    dispatch({ type: ADD_USER_FAIL, err });
  }
  // return (dispatch) => {
  //   axios
  //     .post("http://localhost:5000/api/user/adduser", inputs)
  //     .then((data) => {
  //       dispatch({ type: ADD_USER_SUCCESS, payload: data });
  //     })
  //     .catch((err) => {
  //       dispatch({ type: ADD_USER_FAIL, err });
  //     });
  // };
};
