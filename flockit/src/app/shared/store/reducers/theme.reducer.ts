import {createReducer, on} from '@ngrx/store';
import * as fromTheme from '../actions/theme.actions';
import {IProvince} from "../../../provinces/interfaces/IProvince";

export const themeFeatureKey = 'theme';

export interface State {
  showUserMenu: boolean;
  menuMode: string;
  provinces: IProvince[];
  query: string;
}

export const initialState: State = {
  showUserMenu: false,
  menuMode: 'expanded',
  provinces: [],
  query: null
};

export const reducer = createReducer(
  initialState,
  on(fromTheme.openUserMenu, (state) => ({...state, showUserMenu: true})),
  on(fromTheme.closeUserMenu, (state) => ({...state, showUserMenu: false})),
  on(fromTheme.changeMenuMode, (state, payload) => ({...state, menuMode: payload.mode})),
  on(fromTheme.searchProvinces, (state, payload) => ({...state, query: payload.query})),
  on(fromTheme.searchProvincesSuccess, (state, payload) => ({...state, provinces: payload.provinces}))
);
