import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'reducers';

const logMiddleware = ({ getState }: any) => (next: any) => (action: any) => {
  console.log(action.type, getState());
  return next(action);
};

const store = createStore(rootReducer, applyMiddleware(logMiddleware));

export default store;
