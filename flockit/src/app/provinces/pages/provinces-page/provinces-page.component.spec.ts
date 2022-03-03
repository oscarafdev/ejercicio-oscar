import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProvincesPageComponent } from './provinces-page.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('ProvincesPageComponent', () => {
  let component: ProvincesPageComponent;
  let fixture: ComponentFixture<ProvincesPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvincesPageComponent ],
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProvincesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
