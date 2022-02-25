import { AllergenI } from "./allergen-i";
import { PizzaI } from "./pizza-i";

export interface PanierInI {
    allergens : Array<AllergenI>;
    pizza: PizzaI;
}

