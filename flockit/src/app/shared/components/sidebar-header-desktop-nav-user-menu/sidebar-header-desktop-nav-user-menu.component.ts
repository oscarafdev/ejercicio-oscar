import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../../app-state";
import {Subject} from "rxjs";
import * as themeSelectors from './../../store/selectors/theme.selectors';
import * as themeActions from './../../store/actions/theme.actions';
import {takeUntil} from "rxjs/operators";
import {Router} from "@angular/router";
@Component({
  selector: 'app-sidebar-header-desktop-nav-user-menu',
  templateUrl: './sidebar-header-desktop-nav-user-menu.component.html',
  styleUrls: ['./sidebar-header-desktop-nav-user-menu.component.scss'],
})
export class SidebarHeaderDesktopNavUserMenuComponent implements OnInit {

  menuState = false;
  destroy$: Subject<any>;
  constructor(private store: Store<AppState>, private router: Router) {
    this.destroy$ = new Subject<any>();
  }

  ngOnInit(): void {
    this.store.select(themeSelectors.selectShowUserMenu).pipe(takeUntil(this.destroy$)).subscribe(state => {
      this.menuState = state;
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
    //Logout
  }

}
