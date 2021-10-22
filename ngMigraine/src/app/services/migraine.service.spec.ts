import { TestBed } from '@angular/core/testing';

import { MigraineService } from './migraine.service';

describe('MigraineService', () => {
  let service: MigraineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MigraineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
