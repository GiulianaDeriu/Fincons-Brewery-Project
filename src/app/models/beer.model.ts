import { FormControl } from '@angular/forms';

export interface Beer {
  id: number;
  beerName: string;
  beerStyle: BeerStyle;
  upc: string;
  price: number;
  createdDate: Date;
  lastModifiedDate: Date;
}

export type BeerStyle =
  | 'ALE'
  | 'GOSE'
  | 'IPA'
  | 'LAGER'
  | 'PALE_ALE'
  | 'PILSNER'
  | 'PORTER'
  | 'SAISON'
  | 'STOUT'
  | 'HEAT'
  | 'WHEAT';

export const allBeerTypes: BeerStyle[] = [
  'ALE',
  'GOSE',
  'IPA',
  'LAGER',
  'PALE_ALE',
  'PILSNER',
  'PORTER',
  'SAISON',
  'STOUT',
  'HEAT',
  'WHEAT',
];

export interface BeerForm {
  beerName: FormControl<string | null | undefined>;
  beerStyle: FormControl<BeerStyle | null | undefined>;
  price: FormControl<number | null | undefined>;
  upc: FormControl<string | null | undefined>;
}
