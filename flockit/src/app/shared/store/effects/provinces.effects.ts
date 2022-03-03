import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as fromTheme from './../actions/theme.actions';
import {catchError, exhaustMap, map} from "rxjs/operators";
import {ProvincesService} from "../../../provinces/services/provinces.service";
import {of} from "rxjs";
@Injectable()
export class ProvincesEffects {

  findProvinces$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromTheme.searchProvinces),
      exhaustMap(action =>
        this._service.getProvinces(action.query).pipe(
          map(response => fromTheme.searchProvincesSuccess({ provinces: response.provincias })),
          catchError(error => of(fromTheme.searchProvincesError({ error })))
        )
      )
    )
  );



  // tslint:disable-next-line:max-line-length
  constructor(private actions$: Actions, private _service: ProvincesService) { }
}
