import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AllergensComponent } from './allergens/allergens.component';
import { TailleEtBaseComponent } from './taille-et-base/taille-et-base.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { PanierComponent } from './panier/panier.component';
import {MatListModule} from '@angular/material/list';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AllergensComponent,
    TailleEtBaseComponent,
    IngredientsComponent,
    PanierComponent
  ],
  imports: [
    MatCardModule,
    MatListModule,
    MatSelectModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
