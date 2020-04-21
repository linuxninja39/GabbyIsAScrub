import { TestBed } from '@angular/core/testing';

import { DankQuotesService } from './dank-quotes.service';

describe('DankQuotesService', () => {
  let service: DankQuotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DankQuotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
