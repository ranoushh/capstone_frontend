import axios from "axios";
import AvatarActionType from "./avatar.types";

// Fetching all Avatars
export const fetchAllAvatars = (payload) => {
  console.log("FETCH ALL AVATARS ACTION");
  return {
    type: AvatarActionType.FETCH_ALL_AVATARS,
    payload: payload,
  };
};

export const fetchAllAvatarsThunk = () => {
  return async (dispatch) => {
    try {
      console.log("FETCH_ALL_AVATARS_THUNK is firing");
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/avatars`
      );
      console.log("FETCH_ALL_AVATARS_THUNK completed");
      dispatch(fetchAllAvatars(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

// Fetching a single Avatar
export const fetchSingleAvatar = (payload) => {
  console.log("FETCH SINGLE AVATAR ACTION");
  return {
    type: AvatarActionType.FETCH_SINGLE_Avatar,
    payload: payload,
  };
};

export const fetchSingleAvatarThunk = (id) => {
  return async (dispatch) => {
    try {
      console.log("FETCH_SINGLE_AVATAR_THUNK is firing");
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/avatars/${id}`
      );
      console.log("FETCH_SINGLE_AVATAR_THUNK completed");
      dispatch(fetchSingleAvatar(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};
