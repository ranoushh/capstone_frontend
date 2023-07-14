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
      const response = await axios.get("http://localhost:8080/api/test");
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
      const response = await axios.get(`http://localhost:8080/api/test/${id}`);
      console.log("Test", response.data);
      console.log("FETCH_SINGLE_TEST_THUNK completed");
      dispatch(fetchSingleTest(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};
