import LessonsActionType from "./lessons.types";

export const INITIAL_STUDENTS_STATE = {
    allLessons: [],
    singleLesson: {},
}

const lessonsReducer = (state = INITIAL_STUDENTS_STATE, { type, payload }) => {
    console.log('LESSONREDUCER IS HANDLING FETCH ALL LESSONS ACTION')
    switch (type) {
      case LessonsActionType.FETCH_ALL_LESSONS:
        return { ...state, allLessons: payload };
      case LessonsActionType.FETCH_SINGLE_LESSON:
        return { ...state, singleLesson: payload };
      case LessonsActionType.ADD_LESSON:
        return { ...state, allLessons: [...state.allLessons, payload] };
      default:
        return state;
    }
}

export default lessonsReducer;