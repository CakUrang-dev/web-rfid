import { MenuOpenReducer } from './MenuOpenReducer';
import { combineReducers } from 'redux';
import { getBorrowItem } from './getBorrowItem';

export const Reducers = combineReducers({
  menuState: MenuOpenReducer,
  getBorrowItem: getBorrowItem
});