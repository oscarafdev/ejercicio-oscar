import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProvincesService} from "../../services/provinces.service";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";
import {IProvince} from "../../interfaces/IProvince";
import {Store} from "@ngrx/store";
import {AppState} from "../../../app-state";
import {selectProvinces} from "../../../shared/store/selectors/theme.selectors";
import * as fromTheme from './../../../shared/store/actions/theme.actions';

@Component({
  selector: 'app-provinces-page',
  templateUrl: './provinces-page.component.html',
  styleUrls: ['./provinces-page.component.scss'],
})
export class ProvincesPageComponent implements OnInit, OnDestroy {

  destroy$: Subject<any> = new Subject<any>();
  provinces: IProvince[];
  constructor(private _service: ProvincesService, private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(fromTheme.searchProvinces( {}))
    this.store.select(selectProvinces).pipe(takeUntil(this.destroy$)).subscribe((res) => {
      this.provinces = JSON.parse(JSON.stringify(res));
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
