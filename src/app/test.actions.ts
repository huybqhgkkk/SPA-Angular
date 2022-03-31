import {createAction, props} from '@ngrx/store';
import {ComplexOuterSubscriber} from "rxjs/internal/innerSubscribe";

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');
// export const setAuth = createAction('setAuth', props<any>());
export const setAuth = createAction('setAuth');

export const addProduct = createAction('Add Product', props<any>());
