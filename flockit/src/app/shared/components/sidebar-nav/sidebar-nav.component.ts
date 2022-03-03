import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../../app-state";
import * as themeSelectors from './../../store/selectors/theme.selectors';
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";
import {Router, UrlTree} from "@angular/router";

@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.scss'],
})
export class SidebarNavComponent implements OnInit {

  menuMode = 'expanded';
  destroy$: Subject<any>;
  constructor(private store: Store<AppState>, private router: Router) {
    this.destroy$ = new Subject<any>();
  }

  ngOnInit(): void {
    this.store.select(themeSelectors.selectMenuMode).pipe(takeUntil(this.destroy$)).subscribe(menuMode => {
      this.menuMode = menuMode;
      console.log(this.menuMode);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  isActive(instruction: string | UrlTree): boolean {
    return this.router.isActive(instruction, false);
  }

}
