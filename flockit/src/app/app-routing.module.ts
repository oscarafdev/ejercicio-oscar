import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {SidebarLayoutComponent} from './shared/layouts/sidebar-layout/sidebar-layout.component';

const routes: Routes = [
  {
    path: '',
    component: SidebarLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/provinces',
        pathMatch: 'full'
      },
      {
        path: 'provinces',
        loadChildren: () => import('./provinces/provinces.module').then( m => m.ProvincesModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
