import axios from "axios";
import TestQuestionActionType from "./testQuestion.types";

// Fetching all TestQuestion
export const fetchAllTestQuestion = (payload) => {
  console.log("FETCH ALL TESTQUESTION ACTION");
  return {
    type: TestQuestionActionType.FETCH_ALL_TESTQUESTION,
    payload: payload,
  };
};

export const fetchAllTestQuestionThunk = () => {
  return async (dispatch) => {
    try {
      console.log("FETCH_ALL_TESTQUESTION_THUNK is firing");
      const response = await axios.get(
        "http://localhost:8080/api/testQuestion"
      );
      console.log("FETCH_ALL_TESTQUESTION_THUNK completed");
      dispatch(fetchAllTestQuestion(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

// Fetching a single TestQuestion
export const fetchSingleTestQuestion = (payload) => {
  console.log("FETCH SINGLE TESTQUESTION ACTION");
  return {
    type: TestQuestionActionType.FETCH_SINGLE_TESTQUESTION,
    payload: payload,
  };
};

export const fetchSingleTestQuestionThunk = (id) => {
  return async (dispatch) => {
    try {
      console.log("FETCH_SINGLE_TESTQUESTION_THUNK is firing");
      const response = await axios.get(
        `http://localhost:8080/api/testQuestion/${id}`
      );
      console.log("FETCH_SINGLE_TESTQUESTION_THUNK completed");
      dispatch(fetchSingleTestQuestion(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};
