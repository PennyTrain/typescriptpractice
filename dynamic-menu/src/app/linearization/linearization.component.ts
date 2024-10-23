import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LinearizationAvailability } from './availability-rules';

type InputType = 'mV' | 'V' | 'mA' | 'Zirconia' | 'TC' | 'RTD';

@Component({
  selector: 'app-linearization',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './linearization.component.html',
  styleUrls: ['./linearization.component.css']
})
export class LinearizationComponent implements OnInit {
  linearisationTypes: string[] = [];
  selectedInputType: InputType = 'mV'; // Default value

  constructor() { }

  ngOnInit(): void {
    this.updateLinearisationTypes();
  }

  updateLinearisationTypes(): void {
    console.log('Selected Input Type:', this.selectedInputType); // Debugging line
    const availability = LinearizationAvailability(this.selectedInputType);
    this.linearisationTypes = Object.keys(availability).filter(key => availability[key]);
  }
}
