import axios from "axios";
import UserActionType from "./users.types";

// Fetching all Users
export const fetchAllUsers = (payload) => ({
  type: UserActionType.FETCH_ALL_USERS,
  payload: payload,
});

export const fetchAllUsersThunk = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:8080/api/users/allUsers");
      dispatch(fetchAllUsers(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

// Fetching a single User
export const fetchSingleUser = (payload) => ({
  type: UserActionType.FETCH_SINGLE_USER,
  payload: payload,
});

export const fetchSingleUserThunk = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/users/${id}`);
      dispatch(fetchSingleUser(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

// Update a user
export const updateUser = (updatedUser) => ({
  type: UserActionType.UPDATE_USER,
  payload: updatedUser,
});

export const updateUserThunk = (updatedUser) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `http://localhost:8080/api/users/updateAvatar/${updatedUser.id}`,
        updatedUser
      );
      dispatch(updateUser(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

// Update user points
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

// Fetch Friends
export const fetchFriends = (payload) => ({
  type: UserActionType.FETCH_FRIENDS,
  payload: payload,
});

export const fetchFriendsThunk = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/users/friends/${id}`);
      dispatch(fetchFriends(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

// Add Friend
export const addFriend = (payload) => ({
  type: UserActionType.ADD_FRIEND,
  payload: payload,
});

export const addFriendThunk = (myID, friendId) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`http://localhost:8080/api/users/addfriend/${myID}/${friendId}`);
      const friendData = response.data; // You might need to extract data from the response
      dispatch(addFriend(friendData));
    } catch (error) {
      console.error(error);
    }
  };
};
