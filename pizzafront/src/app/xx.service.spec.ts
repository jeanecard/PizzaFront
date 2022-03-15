import { TestBed } from '@angular/core/testing';

import { XxService } from './xx.service';

describe('XxService', () => {
  let service: XxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
