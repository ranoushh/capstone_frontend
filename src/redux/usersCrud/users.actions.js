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

export const fetchFriends = (payload) => {
  console.log("FETCH ALL FRIENDS ACTION");
  return {
    type: UserActionType.GET_FRIENDS,
    payload: payload,
  };
};

export const fetchFriendsThunk = (id) => {
  console.log("reached fetch friends");
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/users/friends/${id}`);
      console.log("REACHEDDDDDDDDDDDD");
      dispatch(fetchFriends(response.data));
    } catch (error) {
      console.error(error);
    }
  };
}

export const addFriend = (payload) => {
  console.log("ADD FRIENDS ACTION");
  return {
    type: UserActionType.GET_FRIENDS,
    payload: payload,
  };
};

//take friend id 
export const addFriendThunk = (myID, friendId) => {
  console.log("reached add friends");
  return async (dispatch) => {
    try {
      const response = await axios.post(`http://localhost:8080/api/users/addfriend/${myID}/${friendId}`);
      console.log("REACHEDDDDDDDDDDDD");
      dispatch(addFriend(response.data));
    } catch (error) {
      console.error(error);
    }
  };
}


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
      const response = await axios.get(`http://localhost:8080/api/users/friendrequests/${id}`);
      dispatch(getFriendRequests(response.data));
    } catch (error) {
      console.error(error);
    }
  };
}

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
      `http://localhost:8080/api/users/acceptrequest/${updatedFriendship.userId1}/${updatedFriendship.userId2}/${updatedFriendship.accepted}`,  
      updatedFriendship);
      dispatch(acceptRequest(response.data));
    } catch (error) {
      console.error(error);
    }
  };
}

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
      `http://localhost:8080/api/users/declinefriend/${updatedFriendship.userId1}/${updatedFriendship.userId2}/${updatedFriendship.accepted}`,  
      updatedFriendship);
      dispatch(declineRequest(response.data));
    } catch (error) {
      console.error(error);
    }
  };
}

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
      `http://localhost:8080/api/users/deletefriend/${myID}/${friendID}`);
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
        `http://localhost:8080/api/users/${userId}/achievements`
      );
      console.log("FETCH ACHIEVMENT RESPONSE", response.data);
      dispatch(fetchUnlockAchievements(response.data.achievements));
    } catch (error) {
      console.error(error);
    }
  };
};

