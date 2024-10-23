import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegratingComponent } from './integrating.component';

describe('IntegratingComponent', () => {
  let component: IntegratingComponent;
  let fixture: ComponentFixture<IntegratingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntegratingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntegratingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
