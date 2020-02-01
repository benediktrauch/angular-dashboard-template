import { TestBed } from '@angular/core/testing';

import { StarshipsService } from './starships.service';

describe('StarshipsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StarshipsService = TestBed.get(StarshipsService);
    expect(service).toBeTruthy();
  });
});
