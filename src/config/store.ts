import { createStore, DeepPartial } from 'redux';
import rootReducer from 'reducers';

const initialState: DeepPartial<{ counter: number }> = {
  counter: 0,
};

const store = createStore(rootReducer, initialState);

export default store;
