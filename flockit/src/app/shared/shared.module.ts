import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarNavComponent } from './components/sidebar-nav/sidebar-nav.component';
import { SidebarHeaderComponent } from './components/sidebar-header/sidebar-header.component';
import {IonicModule} from '@ionic/angular';
import {SidebarHeaderLogoComponent} from './components/sidebar-header-logo/sidebar-header-logo.component';
import {
  SidebarHeaderDesktopNavComponent
} from './components/sidebar-header-desktop-nav/sidebar-header-desktop-nav.component';
import {StoreModule} from "@ngrx/store";
import * as fromTheme from './store/reducers/theme.reducer';
import {RouterModule} from "@angular/router";
import {
  SidebarHeaderDesktopNavUserMenuComponent
} from "./components/sidebar-header-desktop-nav-user-menu/sidebar-header-desktop-nav-user-menu.component";
import {FormsModule} from "@angular/forms";
import {EffectsFeatureModule, EffectsModule} from "@ngrx/effects";
import {ProvincesEffects} from "./store/effects/provinces.effects";



@NgModule({
  declarations: [SidebarNavComponent, SidebarHeaderComponent, SidebarHeaderLogoComponent, SidebarHeaderDesktopNavComponent, SidebarHeaderDesktopNavUserMenuComponent],
  exports: [SidebarNavComponent, SidebarHeaderComponent, SidebarHeaderLogoComponent, SidebarHeaderDesktopNavComponent, SidebarHeaderDesktopNavUserMenuComponent],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule,
        StoreModule.forFeature(fromTheme.themeFeatureKey, fromTheme.reducer),
        EffectsModule.forFeature([ProvincesEffects]),
        FormsModule,
    ]
})
export class SharedModule { }
