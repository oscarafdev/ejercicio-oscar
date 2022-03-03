import { createAction, props } from '@ngrx/store';
import {ILoginForm} from '../../interfaces/ILoginForm';

export const loginButton = createAction(
  '[Login] Request Login',
  props<{ credentials: ILoginForm }>()
);

export const loginSuccess = createAction(
  '[Login] Login Success',
  props<{ response: any }>()
);

export const loginError = createAction(
  '[Login] Login Error',
  props<{ error: any }>()
);


