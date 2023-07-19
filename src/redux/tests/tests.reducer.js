import TestsActionType from "./tests.types";

export const INITIAL_TESTS_STATE = {
    allTests: [],
    singleTest: {},
}

const testsReducer = (state = INITIAL_TESTS_STATE, { type, payload }) => {
    console.log('TEST REDUCER IS HANDLING FETCH ALL TEST ACTION')
    switch (type) {
      case TestsActionType.FETCH_ALL_TESTS:
        return { ...state, allTests: payload };
      case TestsActionType.FETCH_SINGLE_TEST:
        return { ...state, singleTest: payload };
      case TestsActionType.ADD_TEST:
        return { ...state, allTests: [...state.allTests, payload] };
      case TestsActionType.EDIT_TEST:
        return {
          ...state,
          allTests: state.allTests.map((test) =>
            test.id === payload.id ? payload : test
          ),
          singleTest: payload,
        };
      default:
        return state;
    }
}

export default testsReducer;