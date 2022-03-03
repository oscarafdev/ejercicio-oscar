import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SidebarHeaderDesktopNavComponent } from './sidebar-header-desktop-nav.component';

describe('SidebarHeaderDesktopNavComponent', () => {
  let component: SidebarHeaderDesktopNavComponent;
  let fixture: ComponentFixture<SidebarHeaderDesktopNavComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarHeaderDesktopNavComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarHeaderDesktopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
