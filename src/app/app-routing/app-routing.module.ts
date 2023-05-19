import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { BeerListComponent } from '../components/beer-list/beer-list.component';
import { BeerFormComponent } from '../components/beer-form/beer-form.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';

const routes: Route[] = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: BeerListComponent },
  { path: 'add', component: BeerFormComponent },
  { path: 'edit/:id', component: BeerFormComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
