import axios from "axios";
import TestsActionType from "./tests.types";

// Fetching all tests
export const fetchAllTests = (payload) => {
  console.log("FETCH ALL TESTS ACTION");
  return {
    type: TestsActionType.FETCH_ALL_TESTS,
    payload: payload,
  };
};

export const fetchAllTestsThunk = () => {
  return async (dispatch) => {
    try {
      console.log("FETCH_ALL_TESTS_THUNK is firing");
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/test`
      );
      console.log("FETCH_ALL_TESTS_THUNK completed");
      dispatch(fetchAllTests(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

// Fetching a single test
export const fetchSingleTest = (payload) => {
  console.log("FETCH SINGLE TEST ACTION");
  return {
    type: TestsActionType.FETCH_SINGLE_TEST,
    payload: payload,
  };
};

export const fetchSingleTestThunk = (id) => {
  return async (dispatch) => {
    try {
      console.log("FETCH_SINGLE_TEST_THUNK is firing");
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/test/${id}`
      );
      console.log("Test", response.data);
      console.log("FETCH_SINGLE_TEST_THUNK completed");
      dispatch(fetchSingleTest(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const addTest = (payload) => {
  return {
    type: TestsActionType.ADD_TEST,
    payload: payload,
  };
};

export const addTestThunk = (newTest) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/test`,
        newTest
      );
      dispatch(addTest(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const editTest = (payload) => {
  return {
    type: TestsActionType.EDIT_TEST,
    payload: payload,
  };
};

export const editTestThunk = (test) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/api/test/${test.id}`,
        test
      );
      dispatch(editTest(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteTest = (payload) => {
  return {
    type: TestsActionType.DELETE_TEST,
    payload: payload,
  };
};

export const deleteTestThunk = (testId) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/api/test/${testId}`
      );
      dispatch(deleteTest(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const markTestCompleted = (payload) => ({
  type: TestsActionType.COMPLETE_TEST,
  payload: payload,
});

export const markTestCompletedThunk = (id) => {
  return async (dispatch) => {
    try {
      console.log("COMPLETE TEST THUNK IS FIRING");
      const response = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/api/test/markCompleted/${id}`
      );
      console.log("COMPLETE TEST THUNK COMPLETED");
      dispatch(markTestCompleted(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};
