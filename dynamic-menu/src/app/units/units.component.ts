import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UnitsAvailability } from './units-availability';

@Component({
  selector: 'app-units',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css']
})
export class UnitsComponent implements OnInit {
  units: string[] = [
    'None', 'AbsTemp', 'V', 'mV', 'A', 'mA', 'PH', 'mmHg', 'psi', 'Bar', 'mBar', 'RH', 'Percent', 'mmWG', 'inWG', 'inWW', 'Ohms', 'PSIG', 'O2', 'PPM', 'CO2', 'Carb', 'PerSec'
  ];
  selectedUnit: string = 'None'; // Default value
  availability: { [key: string]: boolean } = {};

  constructor() { }

  ngOnInit(): void {
    this.updateAvailability();
  }

  updateAvailability(): void {
    this.availability = UnitsAvailability();
  }
}
