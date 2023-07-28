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
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/quiz`
      );
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
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/quiz/${id}`
      );
      console.log("FETCH_SINGLE_QUIZ_THUNK completed");
      dispatch(fetchSingleQuiz(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const addQuiz = (payload) => {
  console.log("ADD QUIZ ACTION");
  return {
    type: QuizzesActionType.ADD_QUIZ,
    payload: payload,
  };
};

export const addQuizThunk = (newQuiz) => {
  return async (dispatch) => {
    try {
      console.log("ADD_QUIZ_THUNK is firing");
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/quiz`,
        newQuiz
      );
      console.log("ADD_QUIZ_THUNK completed");
      dispatch(addQuiz(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const editQuiz = (payload) => {
  return {
    type: QuizzesActionType.EDIT_QUIZ,
    payload: payload,
  };
};

export const editQuizThunk = (quiz) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/api/quiz/${quiz.id}`,
        quiz
      );
      dispatch(editQuiz(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteQuiz = (payload) => {
  return {
    type: QuizzesActionType.DELETE_QUIZ,
    payload: payload,
  };
};

export const deleteQuizThunk = (quizId) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/api/quiz/${quizId}`
      );
      dispatch(deleteQuiz(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const markQuizCompleted = (payload) => ({
  type: QuizzesActionType.COMPLETE_QUIZ,
  payload: payload,
});

export const markQuizCompletedThunk = (id) => {
  return async (dispatch) => {
    try {
      console.log("COMPLETE QUIZ THUNK IS FIRING");
      const response = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/api/quiz/markCompleted/${id}`
      );
      console.log("COMPLETE QUIZ THUNK COMPLETED");
      dispatch(markQuizCompleted(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};
