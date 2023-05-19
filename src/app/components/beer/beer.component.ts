import { Component, Input, OnInit } from '@angular/core';
import { BeerService } from '../../services/beer.service';
import { Beer } from '../../models/beer.model';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css'],
})
export class BeerComponent implements OnInit {
  @Input() beerItem: Beer;
  constructor(private beerService: BeerService) {}

  ngOnInit() {}

  delete(beer: Beer) {
    this.beerService.deleteBeer(beer.id);
  }
}
