import {combineReducers} from 'redux';
import userReducer from './user';
import lessonsReducer from './lessons/lessons.reducer';
import languageReducer from './languages/languages.reducer';
import achievementReducer from './achievements/achievements.reducers';
//import each reducer made 

const rootReducer = combineReducers({
    lessons: lessonsReducer,
    userReducer: userReducer,
    achievementReducer: achievementReducer,
  languages: languageReducer
}); 

export default rootReducer;
