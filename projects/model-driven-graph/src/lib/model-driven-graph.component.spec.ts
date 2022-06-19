import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelDrivenGraphComponent } from './model-driven-graph.component';

describe('ModelDrivenGraphComponent', () => {
  let component: ModelDrivenGraphComponent;
  let fixture: ComponentFixture<ModelDrivenGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModelDrivenGraphComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(ModelDrivenGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
