import { TestBed, inject } from '@angular/core/testing';

import { SwapiRequestService } from './swapi-request.service';

describe('SwapiRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SwapiRequestService]
    });
  });

  it('should be created', inject([SwapiRequestService], (service: SwapiRequestService) => {
    expect(service).toBeTruthy();
  }));
});
