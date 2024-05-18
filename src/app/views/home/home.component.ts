import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../../models/housing-location.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  readonly baseUrl = 'https://img.kapook.com/u/pirawan/Travel2';

  housingLocation: HousingLocation = {
    id: 9999,
    name: 'นิวยอร์ก ซิตี้',
    city: 'New York City',
    state: 'USA',
    photo: `${this.baseUrl}/NewYorkCity_Songquan%20Deng.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
}
