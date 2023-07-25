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
  console.log("REACHED UPDATE USER ")
    return async (dispatch) => {
      try {
        console.log("REACHED UPDATE USER 2 ")
        const response = await axios.put(
          `http://localhost:8080/api/users/updateAvatar/${updatedUser.id}`,
          updatedUser
        );
        console.log(response.data);
        dispatch(updateUser(response.data));
  
      } catch (error) {
        console.error(error);
      }
    };
};



export const updateUserPoints = (updatedUser) => ({
  type: UserActionType.UPDATE_USER_POINTS,
  payload: updatedUser,
});

export const updateUserPointsThunk = (updatedUser) => {
  return async (dispatch) => {
    try {
      // Send a PUT request to update the user's points in the backend
      const response = await axios.put(`http://localhost:8080/api/users/updatePoints/${updatedUser.id}`, updatedUser);
      // Dispatch the action to update the Redux state
      dispatch(updateUserPoints(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};