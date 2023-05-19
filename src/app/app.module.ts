import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BeerListComponent } from './components/beer-list/beer-list.component';
import { BeerComponent } from './components/beer/beer.component';
import { BeerFormComponent } from './components/beer-form/beer-form.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    NavbarComponent,
    BeerListComponent,
    BeerComponent,
    BeerFormComponent,
    NotFoundComponent,
    LoginComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
