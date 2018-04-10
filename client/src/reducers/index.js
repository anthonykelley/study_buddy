import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import cards from './cards';

const rootReducer = combineReducers({
  user,
  flash,
  cards
});

export default rootReducer;
