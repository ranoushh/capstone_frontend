import axios from "axios";

//action types
const GET_USER = "GET_ USER";
const REMOVE_USER = "REMOVE_USER";

//initial state
const defaultUser = {};

//action creator
const getUser = (user) => ({ type: GET_USER, user});
const removeUser = (user) => ({ type: REMOVE_USER, user});

//thunks creator

//gets user data
export const me = () => async (dispatch) => {
    try {
        const response = await axios.get(`http://localhost:8080/auth/me`);
        dispatch(getUser(response.data || defaultUser));
    } catch (error) {
        console.error(error);
    };
};

//
export const auth = (email, password, method) => async (dispatch) => {
    let response;
    try {
        const response = await axios.get(`http://localhost:8080/auth/${method}`, {
            email, password
        });
        
    } catch (authError) {
        return dispatch(getUser({error : authError}));
    };

    try {
        dispatch(getUser(response.data));
    } catch (dispatchOrHistorErr) {
        console.error(dispatchOrHistorErr);
    };
};

export const logout = () => async (dispatch) => {
    try {
        await axios.get("http://localhost:8080/auth/logout");
        dispatch(removeUser());
    } catch (error) {
        console.error(error);
    }
};

//reducers 
export default function userReducer(state = defaultUser, action){
    console.log("PL", action);
    switch(action.type){
        case GET_USER:
            return {...state, defaultUser: action.payload };
        case REMOVE_USER: 
            return {...state, defaultUser: action.payload};
    }
};
