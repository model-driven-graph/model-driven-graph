import { TestBed } from '@angular/core/testing';

import { ModelDrivenGraphService } from './model-driven-graph.service';

describe('ModelDrivenGraphService', () => {
  let service: ModelDrivenGraphService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModelDrivenGraphService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
