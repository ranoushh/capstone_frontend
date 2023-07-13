import QuizzesActionType from "./quizzess.types";

export const INITIAL_QUIZZES_STATE = {
    allQuizzes: [],
    singleLQuiz: {},
}

const quizzesReducer = (state = INITIAL_QUIZZES_STATE, { type, payload }) => {
    console.log('QUIZ REDUCER IS HANDLING FETCH ALL QUIZ ACTION')
    switch (type) {
        case QuizzessActionType.FETCH_ALL_QUIZZES:
            return { ...state, allQuizzess: payload };
        case QuizzessActionType.FETCH_SINGLE_QUIZ:
            return { ...state, singleQuizzes: payload };
        default:
            return state;
    }
}

export default quizzesReducer;