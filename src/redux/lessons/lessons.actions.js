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
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/lessons`
      );
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
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/lessons/${id}`
      );
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
        `${process.env.REACT_APP_BACKEND_URL}/api/lessons`,
        newLesson
      );
      dispatch(addLesson(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const editLesson = (payload) => {
  return {
    type: LessonsActionType.EDIT_LESSON,
    payload: payload,
  };
};

export const editLessonThunk = (lesson) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/api/lessons/${lesson.id}`,
        lesson
      );
      dispatch(editLesson(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteLesson = (payload) => {
  return {
    type: LessonsActionType.DELETE_LESSON,
    payload: payload,
  };
};

export const deleteLessonThunk = (lessonId) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/api/lessons/${lessonId}`
      );
      dispatch(deleteLesson(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const completeLesson = (payload) => ({
  type: LessonsActionType.COMPLETE_LESSON,
  payload: payload,
});

export const completeLessonThunk = (id) => {
  return async (dispatch) => {
    try {
      console.log("COMPLETE LESSON THUNK IS FIRING");
      const response = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/api/lessons/markCompleted/${id}`
      );
      console.log("COMPLETE LESSON THUNK COMPLETED");
      dispatch(completeLesson(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};
