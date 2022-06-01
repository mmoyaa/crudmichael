import { TestBed } from '@angular/core/testing';

import { RecetaproductoService } from './recetaproducto.service';

describe('RecetaproductoService', () => {
  let service: RecetaproductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecetaproductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
