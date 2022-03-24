import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { addressReducer } from './address';
import { userReducer } from './user';


export const rootReducer = combineReducers({
  address: addressReducer,
  user: userReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch =  typeof store.dispatch;
