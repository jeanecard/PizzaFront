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
  public panierOut$: PanierOut;

  constructor() {
    this.panierIn$ = new PanierIn();
    this.panierOut$ = new PanierOut();
  }

  ngOnInit(): void {
  }

  public onAllergensSelectionChange(data: Allergen[]): void {
    this.panierIn$.allergens = [];
    data?.forEach(iter => {
      this.panierIn$.allergens.push(iter);
    });
    this.updatePanierOut();
  }


  updatePanierOut(): void {
    //Ici il reste à mettre à jour le panier out en appellant le service 

    if (this.panierOut$?.data) {
      //stub :
      this.panierOut$.data.amount = Math.random()*50;
    }

  }
}

