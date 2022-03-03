import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import * as fromTheme from './../../store/reducers/theme.reducer';
import { SidebarHeaderLogoComponent } from './sidebar-header-logo.component';
import {Store, StoreModule} from "@ngrx/store";
import {RouterTestingModule} from "@angular/router/testing";
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {
  SidebarHeaderDesktopNavUserMenuComponent
} from "../sidebar-header-desktop-nav-user-menu/sidebar-header-desktop-nav-user-menu.component";

describe('SidebarHeaderLogoComponent', () => {
  let component: SidebarHeaderLogoComponent;
  let fixture: ComponentFixture<SidebarHeaderLogoComponent>;
  const initialState = {
    showUserMenu: false,
    menuMode: 'expanded'
  };
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarHeaderLogoComponent ],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule
      ],
      providers: [provideMockStore({ initialState })]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarHeaderLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => { fixture.destroy(); });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
