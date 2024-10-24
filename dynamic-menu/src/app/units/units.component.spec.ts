import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnitsComponent } from './units.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UnitsAvailability } from './units-availability';

describe('UnitsComponent', () => {
  let component: UnitsComponent;
  let fixture: ComponentFixture<UnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnitsComponent, FormsModule, CommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialise with a selected unit of None', () => {
    expect(component.selectedUnit).toBe('None')
  })
});
