import axios from "axios";
import UserActionType from "./users.types";

// Fetching all Users
export const fetchAllUsers = (payload) => {
  console.log("FETCH ALL USERS ACTION");
  return {
    type: UserActionType.FETCH_ALL_USERS,
    payload: payload,
  };
};

export const fetchAllUsersThunk = () => {
  return async (dispatch) => {
    try {
      console.log("FETCH_ALL_USERS_THUNK is firing");
      const response = await axios.get("http://localhost:8080/api/users/allUsers");
      console.log("FETCH_ALL_USERS_THUNK completed");
      dispatch(fetchAllUsers(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

// Fetching a single User
export const fetchSingleUser = (payload) => {
  console.log("FETCH SINGLE User ACTION");
  return {
    type: UserActionType.FETCH_SINGLE_USER,
    payload: payload,
  };
};

export const fetchSingleUserThunk = (id) => {
  return async (dispatch) => {
    try {
      console.log("FETCH_SINGLE_User_THUNK is firing");
      const response = await axios.get(
        `http://localhost:8080/api/users/${id}`
      );
      console.log("FETCH_SINGLE_User_THUNK completed");
      dispatch(fetchSingleUser(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

//Update a user 
export const updateUser = (updatedUser) => {
    console.log("UPDATE  User ACTION");
    return {
      type: UserActionType.UPDATE_USER,
      payload: updatedUser,
    };
};

export const updateUserThunk = (updatedUser) => {
    return async (dispatch) => {
      try {
        const response = await axios.put(
          `http://localhost:8080/updateAvatar/${updatedUser.id}`,
          updatedUser
        );
        console.log(response.data);
        console.log("Update Completed");
        dispatch(updateUser(response.data));
  
      } catch (error) {
        console.error(error);
      }
    };
};
