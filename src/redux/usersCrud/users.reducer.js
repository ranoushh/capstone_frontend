import UserActionType from "./users.types";

export const INITIAL_USER_STATE = {
  allUsers: [],
  singleUser: {},
  friends: [],
  friendRequests: [],
};

const usersReducerCrud = (state = INITIAL_USER_STATE, { type, payload }) => {
  console.log("USER REDUCER IS HANDLING FETCH ALL USER ACTION");
  console.log("USER PL", payload);
  switch (type) {
    case UserActionType.FETCH_ALL_USERS:
      console.log(payload);
      return { ...state, allUsers: payload };
    case UserActionType.FETCH_SINGLE_USER:
      return { ...state, singleUser: payload };
    case UserActionType.UPDATE_USER:
      return {
        ...state, allUsers: state.allUsers.map((user) => user.id === payload.id ? payload : user)};
    case UserActionType.GET_FRIENDS:
      return { ...state, friends: payload };
    case UserActionType.ADD_FRIEND:
      return { ...state, friends: [...state.friends, payload] };
    case UserActionType.GET_FRIEND_REQUESTS:
      return { ...state, friendRequests: payload};
    case UserActionType.ACCEPT_REQUEST:
      return { ...state, friends: [...state.friends, payload], 
        friendRequests: state.friendRequests.filter((request) => request.accepted===false)};
    default:
      return state;
  }
};

export default usersReducerCrud;
