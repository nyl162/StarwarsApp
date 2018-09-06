import { TestBed, inject } from '@angular/core/testing';

import { ObtainCategoryService } from './obtain-category.service';

describe('ObtainCategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObtainCategoryService]
    });
  });

  it('should be created', inject([ObtainCategoryService], (service: ObtainCategoryService) => {
    expect(service).toBeTruthy();
  }));
});
