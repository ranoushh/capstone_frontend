import {combineReducers} from 'redux';
import userReducer from './user';
import lessonsReducer from './lessons/lessons.reducer';
import languageReducer from './languages/languages.reducer';
//import each reducer made 

const rootReducer = combineReducers({
  lessons: lessonsReducer,
  userReducer: userReducer,
  languages: languageReducer
}); 

export default rootReducer;
