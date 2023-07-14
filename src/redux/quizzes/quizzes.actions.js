import axios from "axios";
import QuizzesActionType from "./quizzes.types";

// Fetching all quizzes
export const fetchAllQuizzes = (payload) => {
  console.log("FETCH ALL QUIZZES ACTION");
  return {
    type: QuizzesActionType.FETCH_ALL_QUIZZES,
    payload: payload,
  };
};

export const fetchAllQuizzesThunk = () => {
  return async (dispatch) => {
    try {
      console.log("FETCH_ALL_QUIZZES_THUNK is firing");
      const response = await axios.get("http://localhost:8080/api/quiz");
      console.log("FETCH_ALL_QUIZZES_THUNK completed");
      dispatch(fetchAllQuizzes(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

// Fetching a single quiz
export const fetchSingleQuiz = (payload) => {
  console.log("FETCH SINGLE QUIZ ACTION");
  return {
    type: QuizzesActionType.FETCH_SINGLE_QUIZ,
    payload: payload,
  };
};

export const fetchSingleQuizThunk = (id) => {
  return async (dispatch) => {
    try {
      console.log("FETCH_SINGLE_QUIZ_THUNK is firing");
      const response = await axios.get(`http://localhost:8080/api/quiz/${id}`);
      console.log("FETCH_SINGLE_QUIZ_THUNK completed");
      dispatch(fetchSingleQuiz(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};
