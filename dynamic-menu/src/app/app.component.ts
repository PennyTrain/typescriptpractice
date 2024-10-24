import { Component } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { AvailabilityCheckComponent } from './availability-check/availability-check.component';
import { LinearizationComponent } from './linearization/linearization.component';
import { AnalogAlarmComponent } from './analog-alarm/analog-alarm.component';
import { AbsvalComponent } from './absval/absval.component';
import { UnitsAvailability } from './units/units-availability';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MenuComponent,
    AvailabilityCheckComponent,
    LinearizationComponent,
    AnalogAlarmComponent,
    AbsvalComponent,
    UnitsAvailability
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamic-menu';
}
