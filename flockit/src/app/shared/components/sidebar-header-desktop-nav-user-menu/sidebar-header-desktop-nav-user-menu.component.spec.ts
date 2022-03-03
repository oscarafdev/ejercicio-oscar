import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SidebarHeaderDesktopNavUserMenuComponent } from './sidebar-header-desktop-nav-user-menu.component';

describe('SidebarHeaderDesktopNavUserMenuComponent', () => {
  let component: SidebarHeaderDesktopNavUserMenuComponent;
  let fixture: ComponentFixture<SidebarHeaderDesktopNavUserMenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarHeaderDesktopNavUserMenuComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarHeaderDesktopNavUserMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
