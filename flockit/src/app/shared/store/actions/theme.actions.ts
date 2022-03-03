import {createAction, props} from '@ngrx/store';
import {IProvince} from "../../../provinces/interfaces/IProvince";

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

export const searchProvincesSuccess = createAction(
  '[Provinces] Search Province Success',
  props<{ provinces: IProvince[] }>()
);
export const searchProvincesError = createAction(
  '[Provinces] Search Province Success',
  props<{ error: any }>()
);
