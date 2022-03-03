import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProvincesService} from "../../services/provinces.service";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";
import {IProvince} from "../../interfaces/IProvince";

@Component({
  selector: 'app-provinces-page',
  templateUrl: './provinces-page.component.html',
  styleUrls: ['./provinces-page.component.scss'],
})
export class ProvincesPageComponent implements OnInit, OnDestroy {

  destroy$: Subject<any> = new Subject<any>();
  provinces: IProvince[];
  constructor(private _service: ProvincesService) { }

  ngOnInit() {
    this._service.getProvinces().pipe(takeUntil(this.destroy$)).subscribe((res) => {
      console.log(res);
      this.provinces = res.provincias;
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
