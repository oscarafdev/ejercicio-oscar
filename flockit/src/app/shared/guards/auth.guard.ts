import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {from, Observable, of} from "rxjs";
import {switchMap} from "rxjs/operators";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(public afAuth: AngularFireAuth, private router: Router) { }

    canActivate(): Observable<boolean> | boolean {
        return from(this.afAuth.authState).pipe(
            switchMap(res => {
                if (!res) {
                    this.router.navigate(['/auth/login']);
                    return of(false);
                }
                else {
                  return of(true);
                }
            }));
    }
}
