import { TestBed } from '@angular/core/testing';

import { ProvincesService } from './provinces.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('ProvincesService', () => {
  let service: ProvincesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ProvincesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
