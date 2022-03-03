import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromTheme from '../reducers/theme.reducer';

export const selectThemeState = createFeatureSelector<fromTheme.State>(
  fromTheme.themeFeatureKey
);

export const selectShowUserMenu = createSelector(
  selectThemeState,
  (state: fromTheme.State) => state.showUserMenu
);

export const selectMenuMode = createSelector(
  selectThemeState,
  (state: fromTheme.State) => state.menuMode
);
export const selectQuery = createSelector(
  selectThemeState,
  (state: fromTheme.State) => state.query
);
export const selectProvinces = createSelector(
  selectThemeState,
  (state: fromTheme.State) => state.provinces
);

