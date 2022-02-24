import { TestBed } from '@angular/core/testing';

import { BaseEtTailleService } from './base-et-taille.service';

describe('BaseEtTailleService', () => {
  let service: BaseEtTailleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseEtTailleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
