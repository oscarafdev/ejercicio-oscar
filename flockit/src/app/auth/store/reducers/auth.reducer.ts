import {createReducer, on} from '@ngrx/store';
import * as fromAuth from '../actions/auth.actions';

export const authFeatureKey = 'auth';

export interface State {
  loading: boolean;
  error: any;
}

export const initialState: State = {
  loading: false,
  error: null
};

export const reducer = createReducer(
  initialState,
  on(fromAuth.loginButton, (state) => ({...state, loading: true})),
  on(fromAuth.loginSuccess, (state) => ({...state, loading: false})),
  on(fromAuth.loginError, (state, payload) => ({...state, loading: false, error: payload.error}))
);
