import axios from "axios";
import UsersActionType from "./users.types";

// Fetching all tests
export const fetchAllUsers = (payload) => {
  console.log("FETCH ALL USERS ACTION");
  return {
    type: UsersActionType.FETCH_ALL_USERS,
    payload: payload,
  };
};

export const fetchAllUsersThunk = () => {
  return async (dispatch) => {
    try {
      console.log("FETCH_ALL_USERS_THUNK is firing");
      const response = await axios.get("http://localhost:8080/api/users");
      console.log("FETCH_ALL_USERS_THUNK completed");
      dispatch(fetchAllUsers(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};
