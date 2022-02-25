import { CodeI } from "../interfaces/code-i";
import { PanierInI } from "../interfaces/panierIn-i";
import { PizzaI } from "../interfaces/pizza-i";
import { Allergen } from "./allergen";
import { Pizza } from "./pizza";

export class PanierIn implements PanierInI {
    allergens: Allergen[];
    pizza: PizzaI;

    constructor(){
        this.allergens = [];
        this.pizza = new Pizza();
    }
}

