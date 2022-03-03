import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ProvincesPageComponent} from "./pages/provinces-page/provinces-page.component";

const routes: Routes = [
  {
    path: '',
    component: ProvincesPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProvincesRoutingModule {}
