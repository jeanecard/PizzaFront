import { CodeI } from "./code-i";
import { PizzaI } from "./pizza-i";

export interface PanierInI {
    allergens : Array<CodeI>;
    pizza: PizzaI;
}

