import { Injectable } from '@angular/core';
import { HousingLocation } from '../models/housinglocation.model';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  readonly baseUrl = 'https://img.kapook.com/u/pirawan/Travel2';
  readonly apiUrl = 'https://your-backend-api-url.com/api/applications'; // URL ของ backend server

  housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: 'เมืองเวนิส ประเทศอิตาลี (Venice, Italy)',
      city: 'Venice',
      state: 'Italy',
      photo: `${this.baseUrl}/venice.jpg`,
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      id: 1,
      name: 'เมืองเซบียา ประเทศสเปน (Seville, Spain)',
      city: 'Seville',
      state: 'Spain',
      photo: `${this.baseUrl}/Seville2.jpg`,
      availableUnits: 0,
      wifi: false,
      laundry: true,
    },
    {
      id: 2,
      name: 'นิวยอร์ก ซิตี้ ประเทศสหรัฐอเมริกา (New York City, USA)',
      city: 'New York City',
      state: 'USA',
      photo: `${this.baseUrl}/NewYorkCity_Songquan%20Deng.jpg`,
      availableUnits: 1,
      wifi: false,
      laundry: false,
    },
    {
      id: 3,
      name: 'เมืองลาซา ประเทศจีน (Lhasa, China)',
      city: 'Lhasa',
      state: 'China',
      photo: `${this.baseUrl}/Lhasa.jpg`,
      availableUnits: 1,
      wifi: true,
      laundry: false,
    },
    {
      id: 4,
      name: 'เมืองริโอ เดอ จาเนโร ประเทศบราซิล (Rio de Janeiro, Brazil)',
      city: 'Rio de Janeiro',
      state: 'Brazil',
      photo: `${this.baseUrl}/Rioderjanero_Mark%20Schwettmann.jpg`,
      availableUnits: 1,
      wifi: true,
      laundry: false,
    },
    {
      id: 5,
      name: 'กรุงลอนดอน ประเทศอังกฤษ (London, England)',
      city: 'London',
      state: 'England',
      photo: `${this.baseUrl}/London_2.jpg`,
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: 6,
      name: 'เมืองมาร์ราคิช ประเทศโมร็อกโก (Marrakech, Morocco)',
      city: 'Marrakech',
      state: 'Morocco',
      photo: `${this.baseUrl}/Marrakech7.jpg`,
      availableUnits: 5,
      wifi: true,
      laundry: true,
    },
    {
      id: 7,
      name: 'นครเปตรา ประเทศจอร์แดน (Petra, Jordan)',
      city: 'Petra',
      state: 'Jordan',
      photo: `${this.baseUrl}/Petra.JPG`,
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: 8,
      name: 'กรุงโรม ประเทศอิตาลี (Rome, Italy)',
      city: 'Rome',
      state: 'Italy',
      photo: `${this.baseUrl}/rome.jpg`,
      availableUnits: 10,
      wifi: false,
      laundry: false,
    },
    {
      id: 9,
      name: 'เมืองอิสตันบูล ประเทศตุรกี (Istanbul, Turkey)',
      city: 'Istanbul',
      state: 'Turkey',
      photo: `${this.baseUrl}/istanbul.jpg`,
      availableUnits: 6,
      wifi: true,
      laundry: true,
    },
  ];

  constructor() {}

  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }
  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find(
      (housingLocation) => housingLocation.id === id
    );
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    // });

    const body = {
      firstName,
      lastName,
      email,
    };

    // return this.http.post<any>(this.apiUrl, body, { headers });
    return console.log(body);
  }
}
