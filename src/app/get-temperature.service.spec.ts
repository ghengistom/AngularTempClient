import { TestBed } from '@angular/core/testing';

import { GetTemperatureService } from './get-temperature.service';

describe('GetTemperatureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetTemperatureService = TestBed.get(GetTemperatureService);
    expect(service).toBeTruthy();
  });
});
