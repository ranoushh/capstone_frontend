import axios from "axios";
import achievementActionTypes from "./achievements.types";

export const fetchAllAchievements = (payload) => ({
  type: achievementActionTypes.fetch_all_achievements, //action  type
  payload: payload, //data to be sent w/ action this is the data taken from thunk
});

export const fetchSingleAchievement = (payload) => ({
  type: achievementActionTypes.fetch_single_achievement, //action  type
  payload: payload, //data to be sent w/ action this is the data taken from thunk
});

export const fetchAllAchievementsThunk = () => {
  return async (dispatch) => {
    console.log("working");
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/achievements`
      );
      console.log("data", response.data);
      dispatch(fetchAllAchievements(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchSingleAchievementThunk = (id) => {
  console.log("working2");
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/achievements/${id}`
      );
      console.log("data", response.data);
      dispatch(fetchSingleAchievement(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};
