import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SidebarHeaderDesktopNavUserMenuComponent } from './sidebar-header-desktop-nav-user-menu.component';
import {RouterTestingModule} from "@angular/router/testing";
import {provideMockStore} from "@ngrx/store/testing";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../../../../environments/environment";

describe('SidebarHeaderDesktopNavUserMenuComponent', () => {
  let component: SidebarHeaderDesktopNavUserMenuComponent;
  let fixture: ComponentFixture<SidebarHeaderDesktopNavUserMenuComponent>;
  const initialState = {
    showUserMenu: false,
    menuMode: 'expanded',
    provinces: [],
    query: ''
  };
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarHeaderDesktopNavUserMenuComponent ],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        AngularFireModule.initializeApp(environment.firebase)
      ],
      providers: [provideMockStore({ initialState })]
    }).compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarHeaderDesktopNavUserMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => { fixture.destroy(); });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
