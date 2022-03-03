import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../../app-state";
import {Subject} from "rxjs";
import * as themeSelectors from './../../store/selectors/theme.selectors';
import * as themeActions from './../../store/actions/theme.actions';
import {takeUntil} from "rxjs/operators";
import {Router} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import firebase from "firebase/compat";
import User = firebase.User;
@Component({
  selector: 'app-sidebar-header-desktop-nav-user-menu',
  templateUrl: './sidebar-header-desktop-nav-user-menu.component.html',
  styleUrls: ['./sidebar-header-desktop-nav-user-menu.component.scss'],
})
export class SidebarHeaderDesktopNavUserMenuComponent implements OnInit {

  menuState = false;
  destroy$: Subject<any>;
  user: User;
  constructor(private store: Store<AppState>, private router: Router, private afAuth: AngularFireAuth) {
    this.destroy$ = new Subject<any>();
  }

  ngOnInit(): void {
    this.store.select(themeSelectors.selectShowUserMenu).pipe(takeUntil(this.destroy$)).subscribe(state => {
      this.menuState = state;
    });
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.user = JSON.parse(JSON.stringify(user));
        console.log(this.user);
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  // Theme Functions
  openOrCloseMenu(): void {
    this.store.dispatch(this.menuState ? themeActions.closeUserMenu() : themeActions.openUserMenu());
  }
  logoutUser() {
    this.afAuth.signOut().then(res => {
      this.router.navigate(['/auth/login'])
    });
  }

}
