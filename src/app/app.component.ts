import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'homes';
}
