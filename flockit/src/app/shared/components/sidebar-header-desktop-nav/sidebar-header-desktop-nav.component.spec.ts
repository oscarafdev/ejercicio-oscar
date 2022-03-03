import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SidebarHeaderDesktopNavComponent } from './sidebar-header-desktop-nav.component';
import {provideMockStore} from "@ngrx/store/testing";
import {
  SidebarHeaderDesktopNavUserMenuComponent
} from "../sidebar-header-desktop-nav-user-menu/sidebar-header-desktop-nav-user-menu.component";

describe('SidebarHeaderDesktopNavComponent', () => {
  let component: SidebarHeaderDesktopNavComponent;
  let fixture: ComponentFixture<SidebarHeaderDesktopNavComponent>;
  const initialState = {
    showUserMenu: false,
    menuMode: 'expanded',
    provinces: [],
    query: ''
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarHeaderDesktopNavComponent ],
      imports: [IonicModule.forRoot()],
      providers: [provideMockStore({ initialState })]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarHeaderDesktopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => { fixture.destroy(); });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should nav element create', () => {
    const app = fixture.nativeElement;
    const navElement = app.querySelectorAll('nav');
    expect(navElement.length).toEqual(1);
  });
});
