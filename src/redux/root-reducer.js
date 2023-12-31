import { combineReducers } from "redux";
import userReducer from "./user";
import lessonsReducer from "./lessons/lessons.reducer";
import languageReducer from "./languages/languages.reducer";
import achievementReducer from "./achievements/achievements.reducers";
import quizzesReducer from "./quizzes/quizzes.reducer";
import testsReducer from "./tests/tests.reducer";
import quizQuestionReducer from "./quizQuestion/quizQuestion.reducer";
import testQuestionReducer from "./testQuestion/testQuestion.reducer";
import avatarReducer from "./avatars/avatars.reducer";
import usersReducerCrud from "./usersCrud/users.reducer";

//import each reducer made

const rootReducer = combineReducers({
  lessons: lessonsReducer,
  user: userReducer, //oauth one
  achievements: achievementReducer,
  languages: languageReducer,
  quizzes: quizzesReducer,
  tests: testsReducer,
  quizQuestion: quizQuestionReducer,
  testQuestion: testQuestionReducer,
  avatars: avatarReducer,
  usersCrud: usersReducerCrud, //fetch etc
});

export default rootReducer;
