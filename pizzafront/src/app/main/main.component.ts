import { Component, OnInit } from '@angular/core';
import { Allergen } from '../core/models/allergen';
import { PanierIn } from '../core/models/panierIn';
import { PanierOut } from '../core/models/panierOut';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public panierIn$: PanierIn;
  

  constructor() {
    this.panierIn$ = new PanierIn();
    }

  ngOnInit(): void {
  }

  public onAllergensSelectionChange(data: Allergen[]): void {
    this.panierIn$.allergens = [];
    data?.forEach(iter => {
      this.panierIn$.allergens.push(iter);
    });
  }
}

