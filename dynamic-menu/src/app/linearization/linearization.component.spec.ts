import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LinearizationComponent } from './linearization.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LinearizationAvailability } from './availability-rules';

describe('LinearizationComponent', () => {
  let component: LinearizationComponent;
  let fixture: ComponentFixture<LinearizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule, LinearizationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinearizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with a default input type of mV', () => {
    expect(component.selectedInputType).toBe('mV')
  });

  it('should update linearisationTypes when a different type is selected', () => {
    spyOn(component, 'updateLinearisationTypes');
    component.ngOnInit();
    expect(component.updateLinearisationTypes).toHaveBeenCalled();
  });
});