import { TestBed } from '@angular/core/testing';

import { CrisserviceService } from './crisservice.service';

describe('CrisserviceService', () => {
  let service: CrisserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrisserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
