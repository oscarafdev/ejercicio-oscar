import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Subject} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../../../app-state";
import {takeUntil} from "rxjs/operators";
import * as authSelectors from '../../store/selectors/auth.selectors';
import * as fromAuth from '../../store/actions/auth.actions';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import * as auth from 'firebase/auth';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit, OnDestroy {

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });
  requestState = false;
  destroy$: Subject<any>;
  error;
  loginError;
  constructor(private formBuilder: FormBuilder, public afAuth: AngularFireAuth, private router: Router, private snackBar: MatSnackBar) {
    this.destroy$ = new Subject<any>();
  }


  ngOnInit(): void {

  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  onGoogleLogin(): void {
    this.afAuth
      .signInWithPopup(new auth.GoogleAuthProvider())
      .then((result) => {
        this.router.navigate(['/provinces']);
      })
      .catch((error) => {
        window.alert(error);
      });
  }
  onSubmitForm(): void {
    this.loginError = null;
    this.requestState = true;
    console.log(this.loginForm.controls.password.hasError('minlength'));
    const { email, password } = this.loginForm.value;
    this.afAuth.signInWithEmailAndPassword(email, password).then((result) => {
      this.router.navigate(['/provinces']);
      this.requestState = false;
    })
      .catch((error) => {
        if (error.code === 'auth/user-not-found') {
          this.afAuth.createUserWithEmailAndPassword(email, password).then(res => {
            this.router.navigate(['/provinces']);
            this.requestState = false;
          }).catch(err => {
              window.alert(err);
            this.requestState = false;
          });
        }
        else {
          this.loginError = 'Las credenciales ingresadas son incorrectas';
          this.snackBar.open('Las credenciales ingresadas son incorrectas', 'OK');
          console.log(error);
          this.requestState = false;
        }

      });
  }
}
