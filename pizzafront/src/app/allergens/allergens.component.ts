import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Allergen } from '../core/models/allergen';
import { AllergenesService } from '../core/services/allergenes.service';

import { Output, EventEmitter } from '@angular/core';
import { MatListOption } from '@angular/material/list/selection-list';


@Component({
  selector: 'app-allergens',
  templateUrl: './allergens.component.html',
  styleUrls: ['./allergens.component.scss']
})
export class AllergensComponent implements OnInit, OnDestroy {

  public collection$: Observable<Allergen[]>;
  @Output() newAllergensEvent$ = new EventEmitter<Allergen[]>();


  private _sub: Subscription;

  constructor(private _allergenService : AllergenesService) { 
    // Pas de subscription au niveau composant mais uniquement via l'opérateur |async dans la vue.
    // La gestion des erreurs est laissée au service afin de ne pas sur-responsabiliser le composant(controleur).
    this.collection$ = _allergenService.collection;

    //Test pour mettre en évidence l'instanciation des objets lors de la récupération via httpservice.
    // Pensez à toujours (sauf exception) libérer les ressources allouées, ici la subscription. 

    this._sub =     
    this.collection$.subscribe(item => {
      item.forEach(element => {
        console.log(element.direBonjour());  
      });
    });
  }
  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }

  ngOnInit(): void {
  }

  public onSelection(selectedOptions : MatListOption[]) : void{
    const allergensSelected = selectedOptions.map(s => (new Allergen(s.value)));
    this.newAllergensEvent$.emit(allergensSelected);
 }
}
