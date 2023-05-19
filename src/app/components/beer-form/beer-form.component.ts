import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BeerService } from '../../services/beer.service';
import { allBeerTypes, Beer, BeerForm } from '../../models/beer.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-beer-form',
  templateUrl: './beer-form.component.html',
  styleUrls: ['./beer-form.component.css'],
})
export class BeerFormComponent implements OnInit {
  beerForm: FormGroup<BeerForm>;
  beerTypes = allBeerTypes;
  beerToEdit: Beer | null | undefined;

  constructor(
    public beerService: BeerService,
    public router: Router,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.params?.id;
    const isEditPath = this.route.snapshot.url[0].path === 'edit';

    if (isEditPath) {
      this.beerToEdit = this.beerService.getBeerById(id);
      if (!this.beerToEdit) {
        this.router.navigateByUrl('/not-found');
      }
    }
    this.beerForm = this.initForm();
  }

  initForm(): FormGroup<BeerForm> {
    return new FormGroup<BeerForm>({
      beerName: new FormControl(this.beerToEdit?.beerName, [
        Validators.required,
      ]),
      beerStyle: new FormControl(this.beerToEdit?.beerStyle, [
        Validators.required,
      ]),
      upc: new FormControl(this.beerToEdit?.upc, [Validators.required]),
      price: new FormControl(this.beerToEdit?.price, [
        Validators.required,
        Validators.min(0.01),
      ]),
    });
  }

  onSubmit() {
    // 1 - creare un oggetto beer con i dati provenienti dal form
    const beer: Beer = {
      id: this.beerToEdit ? this.beerToEdit.id : this.beerService.generateId(),
      beerName: this.beerForm.value.beerName!,
      beerStyle: this.beerForm.value.beerStyle!,
      upc: this.beerForm.value.upc!,
      price: this.beerForm.value.price!,
      createdDate: this.beerToEdit ? this.beerToEdit.createdDate : new Date(),
      lastModifiedDate: new Date(),
    };
    console.log(beer);

    // 2 - chiamare il service e aggiungere o editare la birra
    this.beerToEdit ? this.beerService.updateBeer(beer) : this.beerService.addBeer(beer)
  }

  isFormFieldInvalid(formControl: string) {
    return (
      !this.beerForm.controls[formControl].valid &&
      this.beerForm.controls[formControl].touched
    );
  }
}
