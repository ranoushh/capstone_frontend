import {combineReducers} from 'redux';
import userReducer from './user';
import lessonsReducer from './lessons/lessons.reducer';
//import each reducer made 

const rootReducer = combineReducers({
    lessons: lessonsReducer,
    userReducer: userReducer
}); 

export default rootReducer;
