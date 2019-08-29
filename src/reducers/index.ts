import { combineReducers } from 'redux';
import log from 'reducers/tracker/logReducer';
import currentTask from 'reducers/tracker/taskReducer';
import authReducer from 'reducers/auth/auth';

const rootReducer = combineReducers({
  log,
  currentTask,
  authReducer,
});

export default rootReducer;
