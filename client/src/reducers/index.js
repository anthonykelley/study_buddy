import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import cards from './cards';
import chapters from './chapters';

const rootReducer = combineReducers({
  user,
  flash,
  cards,
  chapters
});

export default rootReducer;
