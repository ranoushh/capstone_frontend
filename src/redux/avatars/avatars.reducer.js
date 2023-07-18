import AvatarActionType from "./avatar.types";

export const INITIAL_AVATAR_STATE = {
  allAvatars: [],
  singleAvatar: {},
};

const avatarReducer = (
  state = INITIAL_AVATAR_STATE,
  { type, payload }
) => {
  console.log("AVATAR REDUCER IS HANDLING FETCH ALL AVATAR ACTION");
  switch (type) {
    case AvatarActionType.FETCH_ALL_AVATARS:
      return { ...state, allAvatars: payload };
    case AvatarActionType.FETCH_SINGLE_AVATAR:
      return { ...state, singleAvatar: payload };
    default:
      return state;
  }
};

export default avatarReducer;
