import { Component, OnInit } from '@angular/core';
import {  Input } from '@angular/core'; 
import { PanierIn } from '../core/models/panierIn';
import { PanierOut } from '../core/models/panierOut';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {


  @Input() panierIn$ : PanierIn; 
  @Input() panierOut$ : PanierOut; 

  
  constructor() { 
    this.panierIn$ = new PanierIn();
    this.panierOut$ = new PanierOut();
  }

  ngOnInit(): void {
  }

}
