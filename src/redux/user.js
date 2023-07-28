import axios from "axios";
axios.defaults.withCredentials = true;

/**
 * ACTION TYPES
 */
const GET_USER = "GET_USER";
const REMOVE_USER = "REMOVE_USER";

/**
 * INITIAL STATE
 */
const defaultUser = {};

/**
 * ACTION CREATORS
 */
const getUser = (user) => ({ type: GET_USER, user });
const removeUser = () => ({ type: REMOVE_USER });

/**
 * THUNK CREATORS
 */
export const me = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/auth/me`,
      {
        withCredentials: true,
      }
    );
    console.log("ME RESPONSE", res.data);
    dispatch(getUser(res.data));
  } catch (err) {
    console.error(err);
  }
};

export const login = (email, password) => async (dispatch) => {
  let res;
  try {
    res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/login`, {
      email,
      password,
    });
  } catch (authError) {
    return dispatch(getUser({ error: authError }));
  }
  try {
    dispatch(getUser(res.data));
    // history.push("/home");
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr);
  }
};

export const signup = (email, password, username) => async (dispatch) => {
  let res;
  try {
    res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/signup`, {
      email,
      password,
      username,
    });
  } catch (authError) {
    return dispatch(getUser({ error: authError }));
  }

  try {
    dispatch(getUser(res.data));
    // history.push("/home");
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr);
  }
};

// !! Not working or logging out of session
export const logout = () => async (dispatch) => {
  try {
    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/logout`);
    dispatch(removeUser());
  } catch (err) {
    console.error(err);
  }
};

/**
 * REDUCER
 */
export default function userReducer(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user;
    case REMOVE_USER:
      return defaultUser;
    default:
      return state;
  }
}
