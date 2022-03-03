import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as fromAuth from '../actions/auth.actions';
import {catchError, concatMap, exhaustMap, map, tap} from 'rxjs/operators';
import {EMPTY, from, of} from 'rxjs';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Injectable()
export class AuthEffects {




  loginError$ = createEffect( () =>
      this.actions$.pipe(
        ofType(fromAuth.loginError),
        tap(action => {
          if (action.error.status === 400) {
            this.snackBar.open('Las credenciales ingresadas son incorrectas', 'OK');
          }
          else {
            this.snackBar.open(action.error.error.message, 'OK');
          }
        })
      ),
    { dispatch: false }
  );

  loginSuccess$ = createEffect( () =>
      this.actions$.pipe(
        ofType(fromAuth.loginSuccess),
        tap(action => {
        })
      ),
    { dispatch: false }
  );

  // tslint:disable-next-line:max-line-length
  constructor(private actions$: Actions, private snackBar: MatSnackBar, private router: Router, private afAuth: AngularFireAuth) { }
}
