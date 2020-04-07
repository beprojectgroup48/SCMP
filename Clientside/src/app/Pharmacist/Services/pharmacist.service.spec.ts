import { TestBed } from '@angular/core/testing';

import { PharmacistService } from './pharmacist.service';

describe('PharmacistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PharmacistService = TestBed.get(PharmacistService);
    expect(service).toBeTruthy();
  });
});
