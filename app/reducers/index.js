// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import searcher from './searcher';

const rootReducer = combineReducers({
  searcher,
  routing
});

export default rootReducer;
