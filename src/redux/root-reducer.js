import {combineReducers} from 'redux';
import userReducer from './user';
//import each reducer made 

const rootReducer = combineReducers({
    userReducer: userReducer
}); 

export default rootReducer;
