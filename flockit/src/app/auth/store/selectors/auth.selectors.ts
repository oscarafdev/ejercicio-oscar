import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromAuth from '../reducers/auth.reducer';

export const selectAuthState = createFeatureSelector<fromAuth.State>(
  fromAuth.authFeatureKey
);

export const selectError = createSelector(
  selectAuthState,
  (state: fromAuth.State) => state.error
);
export const selectLoading = createSelector(
  selectAuthState,
  (state: fromAuth.State) => state.loading
);
