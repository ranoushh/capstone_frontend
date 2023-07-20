import QuizQuestionActionType from "./quizQuestion.types";

export const INITIAL_QUIZ_STATE = {
  allQuizQuestion: [],
  singleQuizQuestion: {},
};

const quizQuestionReducer = (state = INITIAL_QUIZ_STATE, { type, payload }) => {
  console.log("QUIZQUESTION REDUCER IS HANDLING FETCH ALL QUIZQUESTION ACTION");
  switch (type) {
    case QuizQuestionActionType.FETCH_ALL_QUIZQUESTION:
      return { ...state, allQuizQuestion: payload };
    case QuizQuestionActionType.FETCH_SINGLE_QUIZQUESTION:
      return { ...state, singleQuizQuestion: payload };
    case QuizQuestionActionType.ADD_QUIZ_QUESTION:
      return { ...state, newQuizQuestion: [...state.allQuizQuestion, payload] };
    default:
      return state;
  }
};

export default quizQuestionReducer;
