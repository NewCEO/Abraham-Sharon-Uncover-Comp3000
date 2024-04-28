import { combineReducers } from 'redux';
import accountReducer from './accountReducer'; // Import your auth reducer

const rootReducer = combineReducers({
  auth: accountReducer, // Add other reducers as needed
});

export default rootReducer;