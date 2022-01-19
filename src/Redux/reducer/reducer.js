import {
  ADD_USER_SUCCESS,
  GET_ALL_USERS,
  GET_USERS_FAIL,
  GET_USERS_LOAD,
} from "../types/types";

const initialState = {
  users: [],
  user: {},
  isLoad: false,
  isError: false,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USERS_LOAD:
      return {
        ...state,
        isLoad: true,
      };
    case GET_ALL_USERS:
      return {
        ...state,
        users: payload.allUsers,
        isLoad: false,
        isError: false,
      };
    case GET_USERS_FAIL:
      return {
        ...state,
        isError: true,
      };
    case ADD_USER_SUCCESS:
      return {
        ...state,
        users: [...state.users, payload.newUser],
        isLoad: false,
        isError: false,
      };
    default:
      return state;
  }
};

export default userReducer;
