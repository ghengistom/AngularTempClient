import { TestBed } from '@angular/core/testing';

import { GetTemphistoryService } from './get-temphistory.service';

describe('GetTemphistoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetTemphistoryService = TestBed.get(GetTemphistoryService);
    expect(service).toBeTruthy();
  });
});
