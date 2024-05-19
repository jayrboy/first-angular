import { Injectable } from '@angular/core';
import { HousingLocation } from '../models/housinglocation.model';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  readonly url = 'http://localhost:3000/locations'; // URL ของ backend server

  constructor() {}

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getHousingLocationById(
    id: number
  ): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);

    return (await data.json()) ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    const body = {
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    console.log(body);
  }
}
