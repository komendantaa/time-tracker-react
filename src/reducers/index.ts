import { combineReducers } from 'redux';
import counter from 'reducers/tracker/counterReducer';
import log from 'reducers/tracker/logReducer';
import task from 'reducers/tracker/taskReducer';

const rootReducer = combineReducers({
  counter,
  log,
  task,
});

export default rootReducer;
