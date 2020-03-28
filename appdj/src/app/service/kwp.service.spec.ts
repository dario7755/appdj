import { TestBed } from '@angular/core/testing';

import { KwpService } from './kwp.service';

describe('KwpService', () => {
  let service: KwpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KwpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
