import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../../services/housing.service';
import { HousingLocation } from '../../models/housinglocation.model';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './details.component.html',
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocationId = -1;

  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  constructor() {
    this.housingLocationId = Number(this.route.snapshot.params['id']);

    this.housingLocation = this.housingService.getHousingLocationById(
      this.housingLocationId
    );
  }
}
