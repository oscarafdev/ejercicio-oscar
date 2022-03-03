import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../../app-state";
import * as fromTheme from './../../store/actions/theme.actions';
import {selectQuery} from "../../store/selectors/theme.selectors";
@Component({
  selector: 'app-sidebar-header-desktop-nav',
  templateUrl: './sidebar-header-desktop-nav.component.html',
  styleUrls: ['./sidebar-header-desktop-nav.component.scss'],
})
export class SidebarHeaderDesktopNavComponent implements OnInit {

  query = '';
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select(selectQuery).subscribe(query => {
      this.query = query;
    });
  }

  searchProvinces(event) {
    this.store.dispatch(fromTheme.searchProvinces({ query: event }));
  }
}
