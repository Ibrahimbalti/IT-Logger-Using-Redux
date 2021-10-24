import { combineReducers } from 'redux';
import logReducer from './logReducers';
import developerReducer from './developerReducers';
export default combineReducers({
  log: logReducer,
  developer: developerReducer,
});
