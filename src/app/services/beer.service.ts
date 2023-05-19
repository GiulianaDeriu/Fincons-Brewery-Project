import { Injectable } from '@angular/core';
import { Beer } from '../models/beer.model';

@Injectable({
  providedIn: 'root',
})
export class BeerService {
  beers: Beer[] = [
    {
      id: 1,
      beerName: 'Mango Bobs',
      beerStyle: 'ALE',
      upc: '0631234200036',
      price: 93.13,
      createdDate: new Date('05-07-2022 07:34:39'),
      lastModifiedDate: new Date('10-08-2022 07:34:39'),
    },
    {
      id: 2,
      beerName: 'Galaxy Cat',
      beerStyle: 'PALE_ALE',
      upc: '9122089364369',
      price: 27.49,
      createdDate: new Date('05-07-2022 20:18:39'),
      lastModifiedDate: new Date('05-07-2022 20:18:39'),
    },
    {
      id: 3,
      beerName: 'No Hammers On The Bar',
      beerStyle: 'WHEAT',
      upc: '0083783375213',
      price: 10.91,
      createdDate: new Date('05-07-2022 07:34:39'),
      lastModifiedDate: new Date('05-07-2022 07:34:39'),
    },
    {
      id: 4,
      beerName: 'Blessed',
      beerStyle: 'STOUT',
      upc: '4666337557578',
      price: 53.71,
      createdDate: new Date('05-07-2022 07:34:39'),
      lastModifiedDate: new Date('05-07-2022 07:34:39'),
    },
    {
      id: 5,
      beerName: 'Adjunct Trail',
      beerStyle: 'STOUT',
      upc: '8380495518610',
      price: 7.7,
      createdDate: new Date('05-07-2022 07:34:39'),
      lastModifiedDate: new Date('05-07-2022 07:34:39'),
    },
    {
      id: 6,
      beerName: 'Very Greenn',
      beerStyle: 'IPA',
      upc: '5677465691934',
      price: 30.43,
      createdDate: new Date('05-07-2022 07:34:39'),
      lastModifiedDate: new Date('05-07-2022 07:34:39'),
    },
    {
      id: 7,
      beerName: "Double Barrel Hunahpu's",
      beerStyle: 'STOUT',
      upc: '5463533082885',
      price: 39.6,
      createdDate: new Date('05-07-2022 07:34:39'),
      lastModifiedDate: new Date('05-07-2022 07:34:39'),
    },
    {
      id: 8,
      beerName: 'Very Hazy',
      beerStyle: 'IPA',
      upc: '5339741428398',
      price: 93.14,
      createdDate: new Date('05-07-2022 07:34:39'),
      lastModifiedDate: new Date('05-07-2022 07:34:39'),
    },
  ];
  constructor() {}

  deleteBeer(id: number) {
    console.log(id);
    this.beers = this.beers.filter((beer) => beer.id !== id);
  }

  generateId() {
    // ordino array per id (ord crescente)
    // prendo id di ultimo elemento
    // aggiungo 1

    // faccio array di id
    const ids = this.beers.map((beer) => beer.id);
    // uso funzione math per prendere il massimo
    const maxId = Math.max(...ids);
    // massimo + 1
    return maxId + 1;
  }

  addBeer(beer: Beer) {
    this.beers.unshift(beer);
  }

  getBeerById(id: number) {
    return this.beers.find((beer) => beer.id === id);
  }

  updateBeer(beerToUpdate: Beer) {
    this.beers = this.beers.map((beer) =>
      beer.id === beerToUpdate.id ? beerToUpdate : beer
    );
  }
}
