import {createAction, props} from '@ngrx/store';

export const openUserMenu = createAction(
  '[Layout] Open User Menu'
);
export const closeUserMenu = createAction(
  '[Layout] Close User Menu'
);

export const changeMenuMode = createAction(
  '[Layout] Change Menu Mode',
  props<{ mode: string }>()
);

export const searchProvinces = createAction(
  '[Provinces] Search Province',
  props<{ query?: string }>()
);
