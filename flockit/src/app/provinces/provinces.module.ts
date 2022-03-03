import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProvincesPageComponent} from './pages/provinces-page/provinces-page.component';
import {ProvincesRoutingModule} from "./provinces-routing.module";



@NgModule({
  declarations: [ProvincesPageComponent],
  imports: [
    CommonModule,
    ProvincesRoutingModule
  ]
})
export class ProvincesModule { }
