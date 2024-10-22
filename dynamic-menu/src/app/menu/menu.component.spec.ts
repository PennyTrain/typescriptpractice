import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuComponent } from './menu.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { types } from '../types';
import { menuItems } from '../menu-items';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule, MenuComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize menu items with visibility based on default type', () => {
    component.menuItems.forEach(item => {
      if (item.types.includes(1)) {
        expect(item.visible).toBeTrue();
      } else {
        expect(item.visible).toBeFalse();
      }
    });
  });

  it('should update menu items visibility when a different type is selected', () => {
    component.selectedType = types[1].name; // Change to a different type
    component.updateMenuItems();
    const selectedTypeId = types[1].id;

    component.menuItems.forEach(item => {
      if (item.types.includes(selectedTypeId) || item.types.includes(0)) {
        expect(item.visible).toBeTrue();
      } else {
        expect(item.visible).toBeFalse();
      }
    });
  });

  it('should handle type change event and update menu items', () => {
    const event = { target: { value: types[2].name } } as unknown as Event;
    component.onTypeChange(event);
    const selectedTypeId = types[2].id;

    component.menuItems.forEach(item => {
      if (item.types.includes(selectedTypeId) || item.types.includes(0)) {
        expect(item.visible).toBeTrue();
      } else {
        expect(item.visible).toBeFalse();
      }
    });
  });
});

