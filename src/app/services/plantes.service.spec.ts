import { TestBed } from '@angular/core/testing';

import { PlantesService } from './plantes.service';

describe('PlantesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlantesService = TestBed.get(PlantesService);
    expect(service).toBeTruthy();
  });
});
