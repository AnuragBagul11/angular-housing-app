import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  protected housingLocationList: Housinglocation[] = [
    {
      id: 0,
      name: 'Hiranandani Estate',
      city: 'Thane',
      state: 'Maharshtra',
      photo: 'https://angular.io/assets/images/tutorials/faa/bernard-hermant-CLKGGwIBTaY-unsplash.jpg',
      availableUnits: 4,
      wifi: true,
      laundry: true
    },
    {
      id: 1,
      name: 'Aga Khan Palace',
      city: 'Pune',
      state: 'Maharashtra',
      photo: 'https://angular.io/assets/images/tutorials/faa/brandon-griggs-wR11KBaB86U-unsplash.jpg',
      availableUnits: 0,
      wifi: false,
      laundry: true
    },
    {
      id: 2,
      name: 'Mahalaxmi Nagar, and Super Corridor',
      city: 'Indore',
      state: 'Madhya Pradesh',
      photo: 'https://angular.io/assets/images/tutorials/faa/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg',
      availableUnits: 1,
      wifi: false,
      laundry: false
    },
    {
      id: 3,
      name: 'Rameshwar Housing',
      city: 'Aayodhya',
      state: 'Uttar Pradesh',
      photo: 'https://angular.io/assets/images/tutorials/faa/ian-macdonald-W8z6aiwfi1E-unsplash.jpg',
      availableUnits: 1,
      wifi: true,
      laundry: false
    },
    {
      id: 4,
      name: 'Happy Homes Group',
      city: 'Jalgao',
      state: 'Maharashtra',
      photo: 'https://angular.io/assets/images/tutorials/faa/krzysztof-hepner-978RAXoXnH4-unsplash.jpg',
      availableUnits: 1,
      wifi: true,
      laundry: false
    },
    {
      id: 5,
      name: 'Metcalfe House',
      city: 'Delhi',
      state: 'India',
      photo: 'https://angular.io/assets/images/tutorials/faa/r-architecture-JvQ0Q5IkeMM-unsplash.jpg',
      availableUnits: 2,
      wifi: true,
      laundry: true
    },
    {
      id: 6,
      name: 'Burj Binghatti Heights',
      city: 'Kalyan',
      state: 'Maharashtra',
      photo: 'https://angular.io/assets/images/tutorials/faa/phil-hearing-IYfp2Ixe9nM-unsplash.jpg',
      availableUnits: 5,
      wifi: true,
      laundry: true
    },
    {
      id: 7,
      name: 'Gavali Rajas House',
      city: 'Dhule',
      state: 'Maharashtra',
      photo: 'https://angular.io/assets/images/tutorials/faa/r-architecture-GGupkreKwxA-unsplash.jpg',
      availableUnits: 2,
      wifi: true,
      laundry: true
    },
    {
      id: 8,
      name: 'Prestige Shantiniketan',
      city: 'Bengaluru',
      state: 'Karnataka',
      photo: 'https://angular.io/assets/images/tutorials/faa/saru-robert-9rP3mxf8qWI-unsplash.jpg',
      availableUnits: 10,
      wifi: false,
      laundry: false
    },
    {
      id: 9,
      name: 'Mahesh Babu Hill-View Mansion',
      city: 'Hydrabad',
      state: 'Telangana',
      photo: 'https://angular.io/assets/images/tutorials/faa/webaliser-_TPTXZd9mOo-unsplash.jpg',
      availableUnits: 6,
      wifi: true,
      laundry: true
    },
    {
      id: 10,
      name: 'Shree Balaji Agora Recidency',
      city: 'Dhule',
      state: 'Maharashtra',
      photo: 'https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8fDA%3D',
      availableUnits: 6,
      wifi: true,
      laundry: true
    },
    {
      id: 11,
      name: 'Samriddhi Sadan',
      city: 'Ratnagiri-Kokan',
      state: 'Maharashtra',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXP7kHK9Yi15vrb4pyEJpWKNtWI3FQD7OtHA&s',
      availableUnits: 6,
      wifi: true,
      laundry: true
    },
  ];
  getAllHousingLocations(): Housinglocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): Housinglocation | undefined {
    return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  }
}
