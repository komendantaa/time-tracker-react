import { combineReducers } from 'redux';
import counter from 'reducers/tracker/reducer';

const rootReducer = combineReducers({
  counter,
});

export default rootReducer;
