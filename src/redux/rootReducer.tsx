import {combineReducers} from 'redux';
import catReducer from './cart_api/reducer';
import counterReducer from './count/reducer';
 
const rootReducer = combineReducers({
   cat: catReducer,
   counter: counterReducer
});

export default rootReducer;