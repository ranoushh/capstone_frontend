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
        `${process.env.REACT_APP_BACKEND_URL}/api/testQuestion`
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
        `${process.env.REACT_APP_BACKEND_URL}/api/testQuestion/${id}`
      );
      console.log("FETCH_SINGLE_TESTQUESTION_THUNK completed");
      dispatch(fetchSingleTestQuestion(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const addTestQuestion = (payload) => {
  console.log("ADD TESTQUESTION ACTION");
  return {
    type: TestQuestionActionType.ADD_TEST_QUESTION,
    payload: payload,
  };
};

export const addTestQuestionThunk = (newTestQuestion) => {
  return async (dispatch) => {
    try {
      console.log("add_TESTQUESTION_THUNK is firing");
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/testQuestion`,
        newTestQuestion
      );
      dispatch(addTestQuestion(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const editTestQuestion = (payload) => {
  return {
    type: TestQuestionActionType.EDIT_TEST_QUESTION,
    payload: payload,
  };
};

export const editTestQuestionThunk = (testQuestion) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/api/testQuestion/${testQuestion.id}`,
        testQuestion
      );
      dispatch(editTestQuestion(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteTestQuestion = (payload) => {
  return {
    type: TestQuestionActionType.DELETE_TEST_QUESTION,
    payload: payload,
  };
};

export const deleteTestQuestionThunk = (testQuestionId) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/api/testQuestion/${testQuestionId}`
      );
      dispatch(deleteTestQuestion(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};
