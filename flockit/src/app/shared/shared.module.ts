import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarNavComponent } from './components/sidebar-nav/sidebar-nav.component';
import { SidebarHeaderComponent } from './components/sidebar-header/sidebar-header.component';
import {IonicModule} from '@ionic/angular';
import {SidebarHeaderLogoComponent} from './components/sidebar-header-logo/sidebar-header-logo.component';
import {
  SidebarHeaderDesktopNavComponent
} from './components/sidebar-header-desktop-nav/sidebar-header-desktop-nav.component';



@NgModule({
  declarations: [SidebarNavComponent, SidebarHeaderComponent, SidebarHeaderLogoComponent, SidebarHeaderDesktopNavComponent],
  exports: [SidebarNavComponent, SidebarHeaderComponent, SidebarHeaderLogoComponent, SidebarHeaderDesktopNavComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class SharedModule { }
