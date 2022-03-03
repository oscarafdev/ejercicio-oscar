import { Component, OnInit } from '@angular/core';
import {Subject} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../../../app-state";
import * as themeSelectors from './../../store/selectors/theme.selectors';
import * as themeActions from './../../store/actions/theme.actions';
import {takeUntil} from "rxjs/operators";
@Component({
  selector: 'app-sidebar-header-logo',
  templateUrl: './sidebar-header-logo.component.html',
  styleUrls: ['./sidebar-header-logo.component.scss'],
})
export class SidebarHeaderLogoComponent implements OnInit {

  menuMode = 'expanded';
  destroy$: Subject<any>;
  constructor(private store: Store<AppState>) {
    this.destroy$ = new Subject<any>();
  }

  ngOnInit(): void {
    this.store.select(themeSelectors.selectMenuMode).pipe(takeUntil(this.destroy$)).subscribe(menuMode => {
      this.menuMode = menuMode;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  changeMenuMode(): void {
    this.store.dispatch(themeActions.changeMenuMode({
      mode: this.menuMode === 'expanded' ? 'collapsed' : 'expanded'
    }));
  }

}
