import {createReducer, on} from '@ngrx/store';
import * as fromTheme from '../actions/theme.actions';

export const themeFeatureKey = 'theme';

export interface State {
  showUserMenu: boolean;
  menuMode: string;
}

export const initialState: State = {
  showUserMenu: false,
  menuMode: 'expanded'
};

export const reducer = createReducer(
  initialState,
  on(fromTheme.openUserMenu, (state) => ({...state, showUserMenu: true})),
  on(fromTheme.closeUserMenu, (state) => ({...state, showUserMenu: false})),
  on(fromTheme.changeMenuMode, (state, payload) => ({...state, menuMode: payload.mode}))
);
