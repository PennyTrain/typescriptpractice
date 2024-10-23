import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinearizationComponent } from './linearization.component';

describe('LinearizationComponent', () => {
  let component: LinearizationComponent;
  let fixture: ComponentFixture<LinearizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinearizationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinearizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
