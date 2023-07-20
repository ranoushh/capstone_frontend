import axios from "axios";
import QuizQuestionActionType from "./quizQuestion.types";

// Fetching all quizQuestion
export const fetchAllQuizQuestion = (payload) => {
  console.log("FETCH ALL QUIZQUESTION ACTION");
  return {
    type: QuizQuestionActionType.FETCH_ALL_QUIZQUESTION,
    payload: payload,
  };
};

export const fetchAllQuizQuestionThunk = () => {
  return async (dispatch) => {
    try {
      console.log("FETCH_ALL_QUIZQUESTION_THUNK is firing");
      const response = await axios.get("http://localhost:8080/api/quizQuestion");
      console.log("FETCH_ALL_QUIZQUESTION_THUNK completed");
      dispatch(fetchAllQuizQuestion(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

// Fetching a single quizQuestion
export const fetchSingleQuizQuestion = (payload) => {
  console.log("FETCH SINGLE QUIZQUESTION ACTION");
  return {
    type: QuizQuestionActionType.FETCH_SINGLE_QUIZQUESTION,
    payload: payload,
  };
};

export const fetchSingleQuizQuestionThunk = (id) => {
  return async (dispatch) => {
    try {
      console.log("FETCH_SINGLE_QUIZQUESTION_THUNK is firing");
      const response = await axios.get(`http://localhost:8080/api/quizQuestion/${id}`);
      console.log("FETCH_SINGLE_QUIZQUESTION_THUNK completed");
      dispatch(fetchSingleQuizQuestion(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const addQuizQuestion = (payload) => {
  return {
    type: QuizQuestionActionType.ADD_QUIZ_QUESTION,
    payload: payload,
  };
};

export const addQuizQuestionThunk = (newQuizQuestion) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/quizQuestion",
        newQuizQuestion
      );
      dispatch(addQuizQuestion(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};
