import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Allergen } from '../models/allergen';
import { HttpClient } from '@angular/common/http';
import { AllergenErrorHandler } from '../abstracts/allergen-error-handler';
import { AllergenOut } from '../interfaces/allergenOut-i ';

@Injectable({
  providedIn: 'root'
})
export class AllergenesService extends AllergenErrorHandler {

  private urlApi = environment.urlApi;
  private data$ = new BehaviorSubject<Allergen[]>([]);

  constructor(private http: HttpClient) { 
    super();
    this.refreshCollection();
  }


  private refreshCollection(): void {

    this.http.get<AllergenOut>(`${this.urlApi}/allergens`).pipe(
      map((items) => {
        //v1 => retour des objets "plats" donc sans méthode notamment DireBonjour()
        return items?.data;
        //v2 => Construction d'objets complexe avec l'opérateur map de rxjs
        // return items?.data?.map(
        //   (iterator) => {
        //     return new Allergen(iterator);
        //   }
        //)
      }),
      catchError(this.handleError)
    )
    .subscribe((datas) => {
      this.data$.next(datas);
    })
    // Inutile d'unsubscribe au soubscription sur un httpClient.
  }

  get collection(): Observable<Allergen[]> {
    return this.data$.asObservable();
  }
}
