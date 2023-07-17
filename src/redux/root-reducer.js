import { combineReducers } from "redux";
import userReducer from "./user";
import lessonsReducer from "./lessons/lessons.reducer";
import languageReducer from "./languages/languages.reducer";
import achievementReducer from "./achievements/achievements.reducers";
import quizzesReducer from "./quizzes/quizzes.reducer";
import testsReducer from "./tests/tests.reducer";
import quizQuestionReducer from "./quizQuestion/quizQuestion.reducer";
import testQuestionReducer from "./testQuestion/testQuestion.reducer";

//import each reducer made

const rootReducer = combineReducers({
  lessons: lessonsReducer,
  users: userReducer,
  achievements: achievementReducer,
  languages: languageReducer,
  quizzes: quizzesReducer,
  tests: testsReducer,
  quizQuestion: quizQuestionReducer,
  testQuestion: testQuestionReducer,
});

export default rootReducer;
