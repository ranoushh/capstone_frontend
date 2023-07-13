import axios from "axios";
import achievementActionTypes from "./achievements.types";

export const fetchAllAchievements = (payload) => ({
    type: achievementActionTypes.FETCH_ALL_ACHIEVEMENTS, //action  type
    payload: payload, //data to be sent w/ action this is the data taken from thunk
});

export const fetchSingleAchievement = (payload) => ({
    type: achievementActionTypes.FETCH_SINGLE_ACHIEVEMENT, //action  type
    payload: payload, //data to be sent w/ action this is the data taken from thunk
});

console.log("in actions")

export const fetchAllAchievementsThunk = () => {
    return async (dispatch) => {
        console.log("working");
      try {
        const response = await axios.get(`http://localhost:8080/api/achievements`);
        console.log("data", response.data);
        dispatch(fetchAllAchievements(response.data));
      } catch (error) {
        console.error(error);
      }
    };
};

export const fetchSingleAchievementThunk = (id) => {
    console.log("working2")
    return async (dispatch) => {
      try {
        const response = await axios.get(`http://localhost:8080/api/achievements/${id}`);
        console.log("data", response.data);
        dispatch(fetchSingleAchievement(response.data));
      } catch (error) {
        console.error(error);
      }
    };
};