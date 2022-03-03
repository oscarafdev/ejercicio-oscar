import {IProvince} from "./IProvince";

export interface IProvincesResponse {
  cantidad: number;
  inicio: number;
  provincias: IProvince[];
  total: number;
}

