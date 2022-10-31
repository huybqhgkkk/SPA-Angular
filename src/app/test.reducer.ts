import {createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import {increment, decrement, reset, setAuth, addProduct} from './test.actions';

export const initialState = 0;
export const auth:boolean = true;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0),
);

export const testLogin = createReducer(
  auth,
  on(setAuth, (state)=> {
    return !state
  }),
);

