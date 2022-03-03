import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import * as fromTheme from './../../store/reducers/theme.reducer';
import { SidebarNavComponent } from './sidebar-nav.component';
import {StoreModule} from "@ngrx/store";
import {RouterTestingModule} from "@angular/router/testing";
import {SidebarHeaderLogoComponent} from "../sidebar-header-logo/sidebar-header-logo.component";
import {provideMockStore} from "@ngrx/store/testing";

describe('SidebarNavComponent', () => {
  let component: SidebarNavComponent;
  let fixture: ComponentFixture<SidebarNavComponent>;
  const initialState = {
    showUserMenu: false,
    menuMode: 'expanded'
  };
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarNavComponent ],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule
      ],
      providers: [provideMockStore({ initialState })]
    }).compileComponents();

  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => { fixture.destroy(); });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
