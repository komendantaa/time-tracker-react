import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'reducers';
import thunk from 'redux-thunk';

const logMiddleware = ({ getState }: any) => (next: any) => (action: any) => {
  // console.log('StoreLog ===> ', action.type, getState());
  return next(action);
};

const store = createStore(rootReducer, applyMiddleware(logMiddleware, thunk));

export default store;
