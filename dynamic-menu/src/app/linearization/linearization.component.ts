import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LinearizationAvailability } from './availability-rules';

@Component({
  selector: 'app-linearization',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './linearization.component.html',
  styleUrls: ['./linearization.component.css']
})
export class LinearizationComponent implements OnInit {
  linearisationTypes: string[] = [];
  selectedInputType: 'mV' | 'V' | 'mA' | 'Zirconia' | 'TC' | 'RTD' = 'mV'; // Default value

  constructor() { }

  ngOnInit(): void {
    this.updateLinearisationTypes();
  }

  updateLinearisationTypes(): void {
    const availability = LinearizationAvailability(this.selectedInputType);
    this.linearisationTypes = Object.keys(availability).filter(key => availability[key]);
  }
}
