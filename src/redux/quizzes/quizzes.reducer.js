import QuizzesActionType from "./quizzes.types";

export const INITIAL_QUIZ_STATE = {
    allQuizzes: [],
    singleQuiz: {},
}

const quizzesReducer = (state = INITIAL_QUIZ_STATE, { type, payload }) => {
    console.log('QUIZ REDUCER IS HANDLING FETCH ALL QUIZ ACTION')
    switch (type) {
      case QuizzesActionType.FETCH_ALL_QUIZZES:
        return { ...state, allQuizzes: payload };
      case QuizzesActionType.FETCH_SINGLE_QUIZ:
        return { ...state, singleQuiz: payload };
      case QuizzesActionType.ADD_QUIZ:
        return { ...state, allQuizzes: [...state.allQuizzes, payload] };
      case QuizzesActionType.EDIT_QUIZ:
        return {
          ...state,
          allQuizzes: state.allQuizzes.map((quiz) =>
            quiz.id === payload.id ? payload : quiz
          ),
          singleQuiz: payload,
        };
      case QuizzesActionType.DELETE_QUIZ:
        return {
          ...state,
          allQuizzes: state.allQuizzes.filter((quiz) => quiz.id !== payload),
        };
      default:
        return state;
    }
}

export default quizzesReducer;