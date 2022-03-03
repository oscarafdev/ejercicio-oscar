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
