import TestQuestionActionType from "./testQuestion.types";

export const INITIAL_TEST_STATE = {
  allTestQuestion: [],
  singleTestQuestion: {},
};

const testQuestionReducer = (state = INITIAL_TEST_STATE, { type, payload }) => {
  console.log("TestQUESTION REDUCER IS HANDLING FETCH ALL TestQUESTION ACTION");
  switch (type) {
    case TestQuestionActionType.FETCH_ALL_TESTQUESTION:
      return { ...state, allTestQuestion: payload };
    case TestQuestionActionType.FETCH_SINGLE_TESTQUESTION:
      return { ...state, singleTestQuestion: payload };
    case TestQuestionActionType.ADD_TEST_QUESTION:
      return { ...state, newTestQuestion: [...state.allTestQuestion, payload] };
    case TestQuestionActionType.EDIT_TEST_QUESTION:
      return {
        ...state,
        allTestQuestion: state.allTestQuestion.map((testQuestion) =>
          testQuestion.id === payload.id ? payload : testQuestion
        ),
        singleTestQuestion: payload,
      };
    case TestQuestionActionType.DELETE_TEST_QUESTION:
      return {
        ...state,
        allTestQuestion: state.allTestQuestion.filter(
          (testQuestion) => testQuestion.id !== payload
        ),
      };
    default:
      return state;
  }
};

export default testQuestionReducer;
