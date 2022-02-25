import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Allergen } from '../core/models/allergen';
import { AllergenesService } from '../core/services/allergenes.service';


@Component({
  selector: 'app-allergens',
  templateUrl: './allergens.component.html',
  styleUrls: ['./allergens.component.scss']
})
export class AllergensComponent implements OnInit, OnDestroy {

  public collection$: Observable<Allergen[]>;
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
}
