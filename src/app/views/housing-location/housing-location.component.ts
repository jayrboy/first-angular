import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../../models/housinglocation.model';

import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule, DetailsComponent],
  templateUrl: './housing-location.component.html',
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
