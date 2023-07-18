import UsersActionType from "./users.types";

export const INITIAL_USERS_STATE = {
    allUsers: [],
}

const usersReducer = (state = INITIAL_USERS_STATE, { type, payload }) => {
    console.log('USER REDUCER IS HANDLING FETCH ALL TEST ACTION')
    switch (type) {
        case UsersActionType.FETCH_ALL_USERS:
            return { ...state, allUsers: payload };
        default:
            return state;
    }
}

export default usersReducer;