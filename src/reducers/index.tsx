import { combineReducers } from 'redux';
import { mockReducer } from './mockReducer';

export default combineReducers({
  mocks: mockReducer,
});
