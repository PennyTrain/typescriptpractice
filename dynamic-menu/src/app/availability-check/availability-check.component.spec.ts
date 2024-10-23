import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvailabilityCheckComponent } from './availability-check.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { menuItems } from '../menu-items';

describe('AvailabilityCheckComponent', () => {
  let component: AvailabilityCheckComponent;
  let fixture: ComponentFixture<AvailabilityCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule, AvailabilityCheckComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailabilityCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize menu items with visibility set to false, except for conditioning', () => {
    component.menuItems.forEach(item => {
      if (item.channel === 'conditioning') {
        expect(item.visible).toBeTrue();
      } else {
        expect(item.visible).toBeFalse();
      }
    });
  });

  it('should initialize with "conditioning" channel items visible', () => {
    component.ngOnInit();
    component.menuItems.forEach(item => {
      if (item.channel === 'conditioning') {
        expect(item.visible).toBeTrue();
      } else {
        expect(item.visible).toBeFalse();
      }
    });
  });
});
