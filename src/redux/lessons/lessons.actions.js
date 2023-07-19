import axios from "axios";
import LessonsActionType from "./lessons.types";

// Fetching all lessons
export const fetchAllLessons = (payload) => {
  console.log("FETCH ALL LESSONS ACTION");
  return {
    type: LessonsActionType.FETCH_ALL_LESSONS,
    payload: payload,
  };
};

export const fetchAllLessonsThunk = () => {
  return async (dispatch) => {
    try {
      console.log("FETCH_ALL_LESSONS_THUNK is firing");
      const response = await axios.get("http://localhost:8080/api/lessons");
      console.log("FETCH_ALL_LESSONS_THUNK completed");
      dispatch(fetchAllLessons(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

// Fetching a single lesson
export const fetchSingleLesson = (payload) => {
  console.log("FETCH SINGLE LESSON ACTION");
  return {
    type: LessonsActionType.FETCH_SINGLE_LESSON,
    payload: payload,
  };
};

export const fetchSingleLessonThunk = (id) => {
  return async (dispatch) => {
    try {
      console.log("FETCH_SINGLE_LESSON_THUNK is firing");
      const response = await axios.get(`http://localhost:8080/api/lessons/${id}`);
      console.log("FETCH_SINGLE_LESSON_THUNK completed");
      dispatch(fetchSingleLesson(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const addLesson = (payload) => {
  return {
    type: LessonsActionType.ADD_LESSON,
    payload: payload,
  };
};

export const addLessonThunk = (newLesson) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/lessons",
        newLesson
      );
      dispatch(addLesson(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};