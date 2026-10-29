import { TestBed } from '@angular/core/testing';

import { VuesPubliquesService } from './vues-publiques-service';

describe('VuesPubliquesService', () => {
  let service: VuesPubliquesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VuesPubliquesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
