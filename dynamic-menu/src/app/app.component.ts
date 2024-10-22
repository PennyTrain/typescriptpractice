import { Component } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { AvailabilityCheckComponent } from './availability-check/availability-check.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MenuComponent,
    AvailabilityCheckComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamic-menu';
}
