import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { SidebarLayoutComponent } from "./shared/layouts/sidebar-layout/sidebar-layout.component";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { LogInterceptor } from "./shared/interceptors/log.interceptor";
import { EffectsModule } from "@ngrx/effects";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {LoggingService} from "./shared/services/logging.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";

@NgModule({
  declarations: [AppComponent, SidebarLayoutComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}, {}),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  bootstrap: [AppComponent],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: LogInterceptor, multi: true}, LoggingService]
})
export class AppModule {}
