import LessonsActionType from "./lessons.types";

export const INITIAL_STUDENTS_STATE = {
    allStudents: [],
    singleStudent: {},
}

const lessonsReducer = (state = INITIAL_STUDENTS_STATE, { type, payload }) => {
    console.log('STUDENTREDUCER IS HANDLING FETCH ALL STUDENTS ACTION')
    switch (type) {
        case LessonsActionType.FETCH_ALL_STUDENTS:
            return { ...state, allStudents: payload };
        default:
            return state;
    }
}

export default lessonsReducer;