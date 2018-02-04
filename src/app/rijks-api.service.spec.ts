import { TestBed, inject } from '@angular/core/testing';

import { RijksApiService } from './rijks-api.service';

describe('RijksApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RijksApiService]
    });
  });

  it('should be created', inject([RijksApiService], (service: RijksApiService) => {
    expect(service).toBeTruthy();
  }));
});
