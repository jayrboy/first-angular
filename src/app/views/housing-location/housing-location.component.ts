import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../../models/housing-location.model';

import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './housing-location.component.html',
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
