import axios from "axios";
import testsActionType from "./tests.types";

// Fetching all tests
export const fetchAlltests = (payload) => {
  console.log("FETCH ALL TESTS ACTION");
  return {
    type: testsActionType.FETCH_ALL_TESTS,
    payload: payload,
  };
};

export const fetchAllTestsThunk = () => {
  return async (dispatch) => {
    try {
      console.log("FETCH_ALL_TESTS_THUNK is firing");
      const response = await axios.get("http://localhost:8080/api/tests");
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
    type: testsActionType.FETCH_SINGLE_TEST,
    payload: payload,
  };
};

export const fetchSingleTestThunk = (id) => {
  return async (dispatch) => {
    try {
      console.log("FETCH_SINGLE_TEST_THUNK is firing");
      const response = await axios.get(`http://localhost:8080/api/tests/${id}`);
      console.log("FETCH_SINGLE_TEST_THUNK completed");
      dispatch(fetchSingleTest(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};
