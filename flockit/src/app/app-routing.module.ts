import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {SidebarLayoutComponent} from './shared/layouts/sidebar-layout/sidebar-layout.component';
import {AuthGuard} from "./shared/guards/auth.guard";
import {AnonGuard} from "./shared/guards/anon.guard";

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
        loadChildren: () => import('./provinces/provinces.module').then( m => m.ProvincesModule),
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(_ => _.AuthModule),
    canActivate: [AnonGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
