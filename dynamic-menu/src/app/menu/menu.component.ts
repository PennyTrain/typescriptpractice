import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { types } from '../types';
import { menuItems } from '../menu-items';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  types = types.map(type => type.name); // Use the actual type names
  selectedType = types[0].name; // Default to the first type name

  menuItems = menuItems.map(item => ({
    ...item,
    visible: item.types.includes(1) // Default to Type 1
  }));

  ngOnInit() {
    this.updateMenuItems();
  }

  updateMenuItems() {
    const selectedTypeId = types.find(type => type.name === this.selectedType)?.id ?? 1;
    console.log('Updating menu items for type:', this.selectedType);
    this.menuItems.forEach(item => {
      item.visible = item.types.includes(selectedTypeId) || item.types.includes(0);
      console.log(`Item: ${item.name}, Visible: ${item.visible}`);
    });
  }

  onTypeChange(event: Event) {
    this.selectedType = (event.target as HTMLSelectElement).value;
    console.log('Selected type changed to:', this.selectedType);
    this.updateMenuItems();
  }
}
