import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SidebarHeaderComponent } from './sidebar-header.component';
import {RouterTestingModule} from '@angular/router/testing';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {AngularFireModule} from '@angular/fire/compat';
import {environment} from '../../../../environments/environment';

describe('SidebarHeaderComponent', () => {
  let component: SidebarHeaderComponent;
  let fixture: ComponentFixture<SidebarHeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarHeaderComponent ],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        AngularFireModule.initializeApp(environment.firebase)
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
