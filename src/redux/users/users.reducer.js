<<<<<<< HEAD
// import UserActionType from "./users.types";

// export const INITIAL_USER_STATE = {
//   allUsers: [],
//   singleUser: {},
// };

// const userReducer = (
//   state = INITIAL_USER_STATE,
//   { type, payload }
// ) => {
//   console.log("USER REDUCER IS HANDLING FETCH ALL User ACTION");
//   console.log("USER PL" + payload);
//   switch (type) {
//     case UserActionType.FETCH_ALL_USERS:
//         console.log(payload);
//       return { ...state, allUsers: payload };
//     case UserActionType.FETCH_SINGLE_USER:
//       return { ...state, singleUser: payload };
//     case UserActionType.UPDATE_USER:
//         return {...state, 
//             allUsers: state.allUsers.map((user) => user.id===type.payload.id ? type.payload : user)};
//     default:
//       return state;
//   }
// };

// export default userReducer;
=======
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
>>>>>>> main
