import {combineReducers} from 'redux';
//import each reducer made 

const rootReducer = combineReducers({
    lessons: lessonsReducer
}); 

export default rootReducer;
