// availability-check.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { menuItems } from '../menu-items';
import { types } from '../types'

@Component({
  selector: 'app-availability-check',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './availability-check.component.html',
  styleUrls: ['./availability-check.component.css']
})
export class AvailabilityCheckComponent {
  channels = ['hardware', 'conditioning', 'main', 'Cold Junction Compensation', 'User Calibration'];
  menuItems = menuItems.map(item => ({
    ...item,
    visible: false // Initially, no items are visible
  }));

  ngOnInit() {
    // Optionally, initialize with a default channel
    this.displayMenuItems('conditioning');
  }

  displayMenuItems(channel: string) {
    this.menuItems.forEach(item => {
      item.visible = item.channel === channel;
    });
  }
}
