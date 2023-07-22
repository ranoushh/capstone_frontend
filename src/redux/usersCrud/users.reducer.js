import UserActionType from "./users.types";

export const INITIAL_USER_STATE = {
  allUsers: [],
  singleUser: {},
};

const usersReducerCrud = (
  state = INITIAL_USER_STATE,
  { type, payload }
) => {
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
        ...state,
        allUsers: state.allUsers.map((user) =>
          user.id === payload.id ? payload : user
        ),
      };
    default:
      return state;
  }
};

export default usersReducerCrud;
