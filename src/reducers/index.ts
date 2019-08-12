import { combineReducers } from 'redux';
import log from 'reducers/tracker/logReducer';
import currentTask from 'reducers/tracker/taskReducer';

const rootReducer = combineReducers({
  log,
  currentTask,
});

export default rootReducer;
