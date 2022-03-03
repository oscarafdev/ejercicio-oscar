import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {IProvincesResponse} from "../interfaces/IProvincesResponse";

@Injectable({
  providedIn: 'root'
})
export class ProvincesService {
  private apiUrl = environment.apiUrl;
  constructor(private _httpClient: HttpClient) { }

  getProvinces() {
    return this._httpClient.get<IProvincesResponse>(`${this.apiUrl}/provincias`);
  }
}
