import { CodeI } from "../interfaces/code-i";
import { PanierInI } from "../interfaces/PanierIn-i";
import { PizzaI } from "../interfaces/pizza-i";

export class PanierIn implements PanierInI {
    allergens = [];
    pizza = {
        size : "",
        base: "",
        ingredients: []
    };
}

