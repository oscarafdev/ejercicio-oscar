import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProvincesPageComponent } from './provinces-page.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {provideMockStore} from "@ngrx/store/testing";
import {
  SidebarHeaderDesktopNavUserMenuComponent
} from "../../../shared/components/sidebar-header-desktop-nav-user-menu/sidebar-header-desktop-nav-user-menu.component";

describe('ProvincesPageComponent', () => {
  let component: ProvincesPageComponent;
  let fixture: ComponentFixture<ProvincesPageComponent>;
  const initialState = {
    showUserMenu: false,
    menuMode: 'expanded',
    provinces: [],
    query: ''
  };
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvincesPageComponent ],
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule
      ],
      providers: [provideMockStore({ initialState })]
    }).compileComponents();

  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(ProvincesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => { fixture.destroy(); });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
