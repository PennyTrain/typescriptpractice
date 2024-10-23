import { Component } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { AvailabilityCheckComponent } from './availability-check/availability-check.component';
import { IntegratingComponent } from './integrating/integrating.component';
import { LinearizationComponent } from './linearization/linearization.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MenuComponent,
    AvailabilityCheckComponent,
    IntegratingComponent,
    LinearizationComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamic-menu';
}
