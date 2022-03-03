import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import * as fromTheme from './../../store/reducers/theme.reducer';
import { SidebarLayoutComponent } from './sidebar-layout.component';
import {StoreModule} from "@ngrx/store";

describe('SidebarLayoutComponent', () => {
  let component: SidebarLayoutComponent;
  let fixture: ComponentFixture<SidebarLayoutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarLayoutComponent ],
      imports: [
        IonicModule.forRoot(),
        StoreModule.forRoot([fromTheme.reducer])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should main element create', function () {
    const app = fixture.nativeElement;
    const mainElement = app.querySelectorAll('main');
    expect(mainElement.length).toEqual(1);
  });
});
