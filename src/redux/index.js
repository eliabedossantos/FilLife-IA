import ReduxThunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';

const makeStore = () => {
  // Create store
  if (!global.hasOwnProperty('store')) {
    global.store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  }

  // Return store
  return global.store;
};

// export an assembled wrapper
export const storeWrapper = makeStore();
