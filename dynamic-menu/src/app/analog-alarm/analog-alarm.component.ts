import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NextGenAnalogAlarm_Availability } from './analog-alarm-availability';

@Component({
  selector: 'app-analog-alarm',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './analog-alarm.component.html',
  styleUrls: ['./analog-alarm.component.css']
})
export class AnalogAlarmComponent implements OnInit {
  parameters: any = {
    TriggerType: 0, // Default value
    ShelvingAllowed: false // Default value
  };
  availability: { [key: string]: boolean } = {};

  constructor() { }

  ngOnInit(): void {
    this.updateAvailability();
  }

  updateAvailability(): void {
    console.log('Parameters:', this.parameters); // Debugging line
    this.availability = NextGenAnalogAlarm_Availability(this.parameters);
  }
}
