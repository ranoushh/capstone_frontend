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
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/users/allUsers`
      );
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
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/users/${id}`
      );
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
        `${process.env.REACT_APP_BACKEND_URL}/api/users/updateAvatar/${updatedUser.id}`,
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

export const updateUserPointsThunk = (userId, points) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/api/users/updatePoints/${userId}`,
        { points }
      );
      dispatch(updateUserPoints(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

// Fetch Friends
export const fetchFriends = (payload) => ({
  type: UserActionType.GET_FRIENDS,
  payload: payload,
});

export const fetchFriendsThunk = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/users/friends/${id}`
      );
      console.log("completed fetch friends");
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
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/users/addfriend/${myID}/${friendId}`
      );
      const friendData = response.data; // You might need to extract data from the response
      dispatch(addFriend(friendData));
    } catch (error) {
      console.error(error);
    }
  };
};

export const getFriendRequests = (payload) => {
  console.log("GET FRIENDS REQUESTIS ACTION");
  return {
    type: UserActionType.GET_FRIEND_REQUESTS,
    payload: payload,
  };
};

export const fetchFriendRequestsThunk = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/users/friendrequests/${id}`
      );
      dispatch(getFriendRequests(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

//accept or delete request

export const acceptRequest = (payload) => {
  console.log("GET FRIENDS REQUESTIS ACTION");
  return {
    type: UserActionType.ACCEPT_REQUEST,
    payload: payload,
  };
};

export const acceptRequestThunk = (updatedFriendship) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/api/users/acceptrequest/${updatedFriendship.userId1}/${updatedFriendship.userId2}/${updatedFriendship.accepted}`,
        updatedFriendship
      );
      dispatch(acceptRequest(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const declineRequest = (payload) => {
  return {
    type: UserActionType.DECLINE_REQUEST,
    payload: payload,
  };
};

export const declineRequestThunk = (updatedFriendship) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/api/users/declinefriend/${updatedFriendship.userId1}/${updatedFriendship.userId2}/${updatedFriendship.accepted}`,
        updatedFriendship
      );
      dispatch(declineRequest(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteFriend = (payload) => {
  return {
    type: UserActionType.DELETE_FRIEND,
    payload: payload,
  };
};

export const deleteFriendThunk = (myID, friendID) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/api/users/deletefriend/${myID}/${friendID}`
      );
      dispatch(deleteFriend(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchUnlockAchievements = (payload) => {
  return {
    type: UserActionType.UNLOCKED_ACHIEVEMENT,
    payload: payload,
  };
};

export const fetchUnlockAchievementsThunk = (userId) => {
  console.log("FETCH ACHIEVMENT", userId);
  return async (dispatch) => {
    try {
      console.log("FETCH AHCHIEVEMENT TRY", userId);
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/users/${userId}/achievements`
      );
      console.log("FETCH ACHIEVMENT RESPONSE", response.data);
      dispatch(fetchUnlockAchievements(response.data.achievements));
    } catch (error) {
      console.error(error);
    }
  };
};
