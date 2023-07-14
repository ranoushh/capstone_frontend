import QuizzesActionType from "./quizzes.types";

export const INITIAL_QUIZ_STATE = {
    allQuiz: [],
    singleQuiz: {},
}

const quizzesReducer = (state = INITIAL_QUIZ_STATE, { type, payload }) => {
    console.log('QUIZ REDUCER IS HANDLING FETCH ALL QUIZ ACTION')
    switch (type) {
        case QuizzesActionType.FETCH_ALL_QUIZZES:
            return { ...state, allQuizzes: payload };
        case QuizzesActionType.FETCH_SINGLE_QUIZ:
            return { ...state, singleQuiz: payload };
        default:
            return state;
    }
}

export default quizzesReducer;